import './styles/App.css';
import Home from './sections/home';
import Header from './sections/header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Home />
      </header>
    </div>
  );
}

export default App;
