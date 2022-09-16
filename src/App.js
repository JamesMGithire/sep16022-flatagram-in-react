import './App.css';
import ImageDiv from './Image';

function App() {
  return (
    <div className="App">
      <img className="logo" src='./flatagram-logo.png' />
      <div className='Flatagram-container'>
        <ImageDiv/>
      </div>
    </div>
  );
}

export default App;
