import React from 'react';
import Header from './header'
import './App.css';
import Introduction from './Introduction.jsx'
import Detail from './Detail.jsx';
import Footer from './Footer.jsx';
function App() {
  return (

    <div className="App">

    
   
    
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@700&display=swap" rel="stylesheet"></link>
      <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet"></link>
      <div className='intro'>
      <Header></Header>
      <Introduction></Introduction>
      </div>
      <div>
        <Detail></Detail>
      </div>
      
      <Footer></Footer>
      
      
      

      
    
    
    
    
    
    
    
    
    
    
      
    </div>
       

    

    
  );
}

export default App;
