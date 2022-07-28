import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import ForgetPasswordPage from "./components/ForgetPasswordPage";
import LandingPage from "./components/LandingPage";
import LogInPage from "./components/LogInPage";
import QuePage from "./components/QuePage";
import RegisterPage from "./components/RegisterPage";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Router> */}
      <div className="App">
        <h1>Hi there</h1>
        {/* <Routes>
            <Route path="/"
            element={<HomePage/>}/>
          </Routes> */}
        <HomePage />
        <ForgetPasswordPage></ForgetPasswordPage>
        <LandingPage></LandingPage>
        <LogInPage></LogInPage>
        <QuePage></QuePage>
        <RegisterPage></RegisterPage>
      </div>
      {/* </Router> */}
      <Router>
      <nav>
        <Link to="/"> HomePage </Link>
        <Link to="/LandingPage"> LandingPage </Link>
        <Link to="/RegisterPage"> RegisterPage </Link>
      </nav>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/RegisterPage" element={<RegisterPage />} />
        <Route path="*" element={<ForgetPasswordPage/>} />
      </Routes>
      <div> Foooter </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
