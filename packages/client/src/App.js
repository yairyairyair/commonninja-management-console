import { useEffect, useState } from 'react';

import { addTokenQuery, request } from './fetch';

import * as React from "react";
import { fetchUtils, Admin, Resource, ListGuesser, CustomRoutes } from 'react-admin';
import { Route } from "react-router-dom";

import jsonServerProvider from 'ra-data-json-server';
import { commonNinjaServerProvider } from './common-ninja-server-provider';

import ComingSoon from './ComingSoon';
import { CustomLayout } from './CustomLayout';

import AddCardIcon from '@mui/icons-material/AddCard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CategoryIcon from '@mui/icons-material/Category';

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

  const dataProvider = jsonServerProvider('/api/ecommerce', cnHttpClient);
  // const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
  // const dataProvider = commonNinjaServerProvider('/api/ecommerce', cnHttpClient);


  return (
    <Admin title="Stores Management Console" layout={CustomLayout} dataProvider={dataProvider} dashboard={ComingSoon}>
      <Resource name='users' list={ListGuesser} />
      <h1>hey</h1>
      <Resource name='orders' list={ListGuesser} icon={AddCardIcon} />
      <Resource name='products' list={ListGuesser} icon={ProductionQuantityLimitsIcon} />
      <Resource name='customers' list={ListGuesser} icon={SupportAgentIcon} />
      <Resource name='scripts' list={ListGuesser} icon={JavascriptIcon} />
      <Resource name='categories' list={ListGuesser} icon={CategoryIcon} />
      <h1>hey</h1>
      {/* <Resource name='transactions' list={ListGuesser} icon={ReceiptLongIcon} /> */}
      {/* <Resource name='notifications' list={ListGuesser} icon={NotificationsIcon} /> */}
      <CustomRoutes>
        <Route path="/transactions" element={<ComingSoon />} />
        <Route path="/notifications" element={<ComingSoon />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
