import { useState } from 'react/cjs/react.development';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() =>{
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode ("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "Success");
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title='Texttutils' aboutText='aboutus' mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading='Enter the text here' mode={mode}/>
          {/* </Route>
        </Switch> */}
</div>
{/* </Router> */}
    </>
  );
}

export default App;
