import { useEffect, useState } from 'react';

import { addTokenQuery, request } from './fetch';

import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser, CustomRoutes } from 'react-admin';
import { Route } from "react-router-dom";

import commonNinjaServerProvider from './common-ninja-server-provider';

import ComingSoon from './ComingSoon';
import { CustomLayout } from './CustomLayout';


import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import JavascriptIcon from '@mui/icons-material/Javascript';

import { Create as OrderCreate, Edit as OrderEdit, List as OrderList, Icon as OrderIcon } from './orders';
import { Create as ProductCreate, Edit as ProductEdit, List as ProductList, Icon as ProductIcon } from './products';

import './App.css';

const { REACT_APP_PROXY = '' } = process.env;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      setUser(null);

      try {
        const json = await request('/api/user');

        if (json.data?.platformUserId) {
          setUser(json.data);
        }
      } catch (e) {
        console.error('Could not load user', e);
        setUser(null);
      }

      setLoading(false);
    }
    getUser();
  }, []);


  if (loading) {
    return <p className='text-center'>Loading...</p>;
  }

  if (!user) {
    return (
      <a
        href={`${REACT_APP_PROXY}/connect?redirectUrl=${encodeURIComponent(
          window.location.href,
        )}`}
      >
        <p className='text-center'>
          Connect
        </p>
      </a>
    );
  }

  const cnHttpClient = (url, options = {}) => {
    if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    // options.headers.set('X-Custom-Header', 'header value here');
    return fetchUtils.fetchJson(addTokenQuery(url), options);
  };

  // const dataProvider = jsonServerProvider('/api/ecommerce', cnHttpClient);
  // const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  const dataProvider = commonNinjaServerProvider('/api/ecommerce', cnHttpClient);


  return (
    <Admin title="Stores Management Console" layout={CustomLayout} dataProvider={dataProvider} dashboard={ComingSoon}>
      <Resource name='orders' list={OrderList} create={OrderCreate} edit={OrderEdit} icon={OrderIcon} />
      <Resource name='products' list={ProductList} create={ProductCreate} edit={ProductEdit} icon={ProductIcon} />
      <Resource name='customers' list={ListGuesser} icon={SupportAgentIcon} />
      <Resource name='scripts' list={ListGuesser} icon={JavascriptIcon} />
      <CustomRoutes>
        <Route path='/categories' element={<ComingSoon />} />
        <Route path="/transactions" element={<ComingSoon />} />
        <Route path="/notifications" element={<ComingSoon />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
