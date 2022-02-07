
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login/login'
import Dashboard from "./components/Dashboard"

const loginCode = new URLSearchParams(window.location.search).get('code')

function App() {
  return loginCode ? <Dashboard code={loginCode} /> : <Login />
}

export default App;
