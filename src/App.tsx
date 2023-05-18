import './App.css'
import { Authorization } from './components/Authorization/Authorization';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
    <div className="container">
      <div className="wrapper wrapper-left">
        <NavBar />
      </div>
      <div className="wrapper wrapper-right">
        <div className="app-title">Welcome to the ...</div>
        <Authorization />
      </div>
    </div>
  )
}

export default App
