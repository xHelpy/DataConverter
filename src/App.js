import logo from './logo.svg';
import './App.css';

function App() {
  let firstdate = Date.now()
  let seconddate =  new Date("1900-03-23")

  let diff = firstdate - seconddate.getTime()

  let Days = diff / 86400000
  let Months = diff / 2629800000
    let Years = diff / 31536000000
  console.log(firstdate,diff,Days)
  return (
      <div className="App">


          <label>Lata roznicy: {Math.trunc(Years)} </label>
          <label>Miesiace roznicy: {Math.trunc(Months%12)} </label>
          <label>Dni: {Math.trunc((Days%365)%30)}</label>
      </div>
  );
}

export default App;
