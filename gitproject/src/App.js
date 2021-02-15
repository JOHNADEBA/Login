
import Header from './components/Header'
import Countries from './components/Countries'
import SignIn from './components/SignIn'
import Robotss from './components/Robotss'
import Register from './components/Register'
import Movies from './components/Movies'
import Footer from './components/Footer'
import './App.css';
import 'tachyons'
import { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
const [route, setRoute] = useState('signin')


  return (
   
   <Router>
      <div className="App relative pb2 tc">
         <Switch>
         
         { route === 'home'
         ?
         <div> 
            <Header  onRouteChange={()=> setRoute('signin')} />

               <Route path = '/countries'> 
                  <Countries /> 
               </Route>

               <Route path = '/robots'>
                  <Robotss />
               </Route>
         </div>

         :(route === 'signin'
         ? <SignIn  onRouteChange={()=>setRoute('home')} onRouteeChange={()=>setRoute('register')} />
         : <Register onRouteChange={()=>setRoute('signin')} /> 
         ) 
      
         }   
         </Switch>
         <Movies />
         <Footer />
      </div>
   </Router>
    
  );
}

export default App;
