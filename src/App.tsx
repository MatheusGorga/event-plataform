import { Event } from './pages/Event';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { Router } from './Router';

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </>
  );
}

export default App;
