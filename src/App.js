import React from 'react';
import Header from './header'
import './App.css';
import Introduction from './Introduction.jsx'
import Detail from './Detail.jsx';
import Footer from './Footer.jsx';
function App() {
  return (

    <div className="App">

    
   
      
      
      <div className='intro'>
      <Header></Header>
      <Introduction></Introduction>
      </div>
      <div>
        <Detail></Detail>
      </div>
      
      <div className='foot'>
        <Footer></Footer>
      </div>
      
      

      
    
    
    
    
    
    
    
    
    
    
      
    </div>
       

    

    
  );
}

export default App;
