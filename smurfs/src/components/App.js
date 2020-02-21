import React from "react";
import "./App.css";
import HandleSmurfs from './handleSmurfs';
import SmurfMap from './smurfMap';
import SmurfForm from './smurfForm';




const App = () => {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <HandleSmurfs />
        <SmurfMap />
        <SmurfForm />
      
      </div>
    );
 
}

export default App;
