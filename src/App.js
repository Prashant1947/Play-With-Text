// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'
import Alert from './Components/Alert';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



//html is picked up from bootstrap website and for this we added the link of css and javascript files in index.css file
//line 13 props is used on title in navbar.js so if we make change in title it will reflect in navbar.js and our website


function App() {
  const [Mode,setMode] = useState('light')

  const [alert,setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  
  const toggleMode = ()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Router>
    {/* <div className='Body' > */}
    <Navbar title="Play with Text" about="About Us" Mode={Mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <div className="container my-3" >my-3 is class in bootstrap to give spacing in y-direcrtion by 3 */}

         
        <TextForm showAlert={showAlert} heading="Enter the text below" Mode={Mode}/>
    {/* </div> */}
    <About Mode={Mode}/>
    {/* </div> */}
    </Router>
    </>
  );
}


//return can return only one tag so we used <></> this and wrote html in between this

export default App;
