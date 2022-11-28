import './App.css';
import axios from 'axios';

function App() {

  const getAdvice = () =>{
    axios.get("https://api.adviceslip.com/advice").then(res => {
      console.log(res.data.slip.id)
      console.log(res.data.slip.advice)
    })
  }

  return (
    <div className="App">
      <h1>Hi</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
