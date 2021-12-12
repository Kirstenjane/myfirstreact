import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';



function Home() {
  return (
    <div className="Home">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. LALISA LOVE ME
        </p>
        <p> {Hello()}</p>
              
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

export default Home;