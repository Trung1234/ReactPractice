import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import BaseProvider from './components/shared/BaseProvider';


function App() {
  return (
    <div className="App">
      <BaseProvider>
        <Home></Home>
      </BaseProvider>    
    </div>
  );
}

export default App;
