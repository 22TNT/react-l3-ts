import React from 'react';
import {
    useEffect,
    useState,
    useRef,
} from "react";
import './App.css';

function Countdown()
{
  const dob = useRef<Date>((new Date(0)));
  const [difference, setDifference] = useState(Math.floor((Date.now() - dob.current.getTime())/1000));
  useEffect(() => {
    setInterval(() => {
      setDifference(Math.floor((Date.now() - dob.current.getTime())/1000));
    }, 1000);
  }, []);
    return <>
    <input
        type={"date"}
        value={dob.current.toLocaleDateString('en-CA')}
        max = {new Date().getDate().toLocaleString('en-CA')}
        onChange = {e => (dob.current = e.target.valueAsDate ?? new Date(0))}
    />
    <br/><br/>
    <>Вы прожили {difference} секунд</>
  </>
}

function App() {
  return (
    <div className="App">
      <Countdown/>
    </div>
  );
}

export default App;
