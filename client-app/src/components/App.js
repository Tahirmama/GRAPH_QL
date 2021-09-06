
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from '../config/gql';
import Students from './Students'

function App() {
  return (
    <div className="main">
    <ApolloProvider client={client}>
      <Students />
 
    </ApolloProvider>
 
 </div>
  );
}

export default App;