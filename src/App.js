import logo from './logo.svg';
import './App.css';
import Name from './Name'
import Badge from './Badge'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Name />
        <Badge />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Tag 1</p>
        <p>tag 2</p>
        <p>tag 3</p>
      </header>
    </div>
  );
}

export default App;
