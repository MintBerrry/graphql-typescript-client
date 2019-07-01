import React from 'react';
import { render } from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './App';
const cache = new InMemoryCache();

const client = new ApolloClient({ uri: process.env.NODE_ENV === "production"  ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL ,cache});
 
const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
 
render(<ApolloApp/>, document.getElementById('root'));