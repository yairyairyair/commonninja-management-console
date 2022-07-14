import { useEffect, useState } from 'react';

import { request } from './fetch';

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



  const renderBody = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return (
        <a
          href={`${REACT_APP_PROXY}/connect?redirectUrl=${encodeURIComponent(
            window.location.href,
          )}`}
        >
          Connect
        </a>
      );
    }

    return <div>Logged in as: {user.platformUserId}</div>;
  }

  return <div className="App">{renderBody()}</div>;
}

export default App;
