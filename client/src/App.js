
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import LandingPage from './components/LandingPage';
import LogInPage from './components/LogInPage';
import QuePage from './components/QuePage';
import RegisterPage from './components/RegisterPage';

import Header from './components/Header'
import { Container } from './components/styles/Container.style'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
}

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
  //   <ApolloProvider client={client}>
  //     {/* <Router> */}
  //       <div className="App">
  //         <h1>Hi there</h1>
  //         {/* <Routes>
  //           <Route path="/"
  //           element={<HomePage/>}/>
  //         </Routes> */}
  //         <HomePage/>
  //         <ForgetPasswordPage>
  //         </ForgetPasswordPage>
  //         <LandingPage></LandingPage>
  //         <LogInPage></LogInPage>
  //         <QuePage></QuePage>
  //         <RegisterPage></RegisterPage>
  //       </div>
  //    {/* </Router> */}
  //  </ApolloProvider>
  <ThemeProvider theme = {theme}>
    <>
    <Header />
    <Container>
      <h1>ClubQ</h1>
    </Container>
    </>
  </ThemeProvider>
  );
};


  // return (
  //   <Container>
  //     <h1>Hello World</h1>
  //   </Container>
  // )


export default App;
