import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Experience from './components/Experience';



function App() {
  return (
   <> 
    <Nav></Nav>
 <div class="container-fluid p-0">
   <About></About>
   <Experience></Experience>
 </div>
   </> //프래그먼트(Fragment)
  );
}

export default App;
