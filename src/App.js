import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import React,{ useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About'


function App() {
  const [mode, setmode]=useState('light');//wheather dark mode
  const[alert, setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);

    },1000);
  }
  
  const toggleMode =()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enable", "success");
      setInterval(()=>{
        document.title = 'Welcome to the website';
      },2000);
      setInterval(()=>{
        document.title = 'Textdail is Amazing';
      },1500);
    }
    else{
      setmode('light');

      document.body.style.backgroundColor='white';
      showAlert("Light mode is enable", "success");
      
    }
  }
  return (
   <>

   <Navbar title="Textdail" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   {/* <Navbar/>*/}
   <div className="container my-3">
  <Textform showAlert={showAlert} heading="enter the text"mode={mode}/>
   {/*<About/>*/}
   </div>
   </>
  );
}

export default App;
