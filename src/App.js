import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload. new
        </p>
        <a
          className='App-link'
          href='https://blog.theashishmaurya.me'
          target='_blank'
          rel='noopener noreferrer'
          data-testid='learn testing'
        >
          Learning Testing
        </a>
      </header>
    </div>
  );
}

export default App;
