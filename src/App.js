import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Display } from './components/Display';

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  const decrementCounter = () => setCounter(counter - 1);
  
  return (
    <div>
      <Button type="+" changeCounter={incrementCounter} />
      <Button type="-" changeCounter={decrementCounter} />
      <Display counter={counter} />
    </div>
  );
}

export default App;
