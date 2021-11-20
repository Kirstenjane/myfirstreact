import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. LALISA LOVE ME
        </p>
        <p> {Hello()}</p>
                <Employee/> 
        <Greet name="Lalisa" stagename="Lisa">
            <Message/>
        </Greet>
          <Greet name="Pranpriya" stagename="Poopoo">
          <Button/>
        </Greet>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;