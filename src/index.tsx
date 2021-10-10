import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
