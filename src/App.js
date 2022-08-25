import './App.css';
import FirstStep from './components/FirstStep';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h3 style={{color: 'red', textDecoration: "underline"}}>ReactJS Multi Step Application</h3>
        <FirstStep />
      </header>
    </div>
  );
}

export default App;
