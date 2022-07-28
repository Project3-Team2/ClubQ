
import './App.css';
import HomePage from './components/HomePage';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import QuePage from './components/QuePage';
import RegisterPage from './components/RegisterPage';

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <HomePage/>
      {/* <ForgetPasswordPage></ForgetPasswordPage>
      <LandingPage></LandingPage>
      <LoginPage></LoginPage>
      <QuePage></QuePage>
      <RegisterPage></RegisterPage> */}
    </div>
  );
}

export default App;
