import React from 'react';
import Home from './home/Home';
import Help from './components/Help';
import Rooms from './rooms/Rooms';
import { Navigate, Route,Routes } from 'react-router-dom';
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './components/About';
import Confirm from './components/Confirm';
import Contact from './components/Contact';
import Khapri from './area/Khapri';
import Chinchbhavan from './area/Chinchbhavan';
import Manishnagar from './area/Manishnagar';
import Palhoti from './area/Palhoti';
import Butibori from './area/Butibori';
import Jamtha from './area/Jamtha';
import Chhatrapati from './area/Chhatrapati';
import Jayprakash from './area/Jayprakash';
import Rameshwari from './area/Rameshwari';
import Pratapnagar from './area/Pratapnagar';
import Ganeshpeth from './area/Ganeshpeth';
import Nandanvan from './area/Nandanvan';
import Kharbi from './area/Kharbi';
import Dighori from './area/Dighori';
import Itwari from './area/Itwari';
import Telangkhedi from './area/Telangkhedi'
import Ravinagar from './area/Ravinagar';
import Panjara from './area/Panjara';
import Congress from './area/Congress';
import Khaperkheda from './area/Khaperkheda';
import Chandkapur from './area/Chandkapur';
import Bhanegaon from './area/Bhanegaon';
import Dahegaon from './area/Dahegaon';
import Wakodi from './area/Wakodi';
import Kamthi from './area/Kamthi';
import Parshivani from './area/Parshivani';
import Mansar from './area/Mansar';
import Sitabardi from './area/Sitabardi';
import Takli from './area/Takli';
import Wadi from './area/Wadi';
import Rent from './components/Rent'
import Resistration from './components/Resistration';
import Log_in from './components/Log_in';
import CallAlert from './components/CallAlert';
import Response from './components/Response';
import Frauds from './components/Frauds';

function App() {
  const [authUser,setAuthUser]=useAuth();
    console.log(authUser)
  return (
    <>
   
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/Room" element={authUser?<Rooms/>:<Navigate to="/signup"/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/About" element={<About/>}/>
       <Route path="/Confirm" element={<Confirm/>}/> 
       <Route path="/Help" element={<Help/>}/> 
       <Route path="/Contact" element={<Contact/>}/>
       <Route path="/Rent" element={<Rent/>}/>
       <Route path="/Khapri" element={<Khapri/>}/>
       <Route path="/Chinchbhavan" element={<Chinchbhavan/>}/>
       <Route path="/Manishnagar" element={<Manishnagar/>}/>
       <Route path="/Palhoti" element={<Palhoti/>}/>
       <Route path="/Butibori" element={<Butibori/>}/>
       <Route path="/Jamtha" element={<Jamtha/>}/>
       <Route path="/Chhatrapati" element={<Chhatrapati/>}/>
       <Route path="/Jayprakash" element={<Jayprakash/>}/>
       <Route path="/Rameshwari" element={<Rameshwari/>}/>
       <Route path="/Pratapnagar" element={<Pratapnagar/>}/>
       <Route path="/Ganeshpeth" element={<Ganeshpeth/>}/>
       <Route path="/Nandanvan" element={<Nandanvan/>}/>
       <Route path="/Kharbi" element={<Kharbi/>}/>
       <Route path="/Dighori" element={<Dighori/>}/>
       <Route path="/Itwari" element={<Itwari/>}/>
       <Route path="/Telangkhedi" element={<Telangkhedi/>}/>
       <Route path="/Ravinagar" element={<Ravinagar/>}/>
       <Route path="/Panjara" element={<Panjara/>}/>
       <Route path="/Congress" element={<Congress/>}/>
       <Route path="/Khaperkheda" element={<Khaperkheda/>}/>
       <Route path="/Chandkapur" element={<Chandkapur/>}/>
       <Route path="/Bhanegaon" element={<Bhanegaon/>}/>
       <Route path="/Dahegaon" element={<Dahegaon/>}/>
       <Route path="/Wakodi" element={<Wakodi/>}/>
       <Route path="/Kamthi" element={<Kamthi/>}/>
       <Route path="/Parshivani" element={<Parshivani/>}/>
       <Route path="/Mansar" element={<Mansar/>}/>
       <Route path="/Sitabardi" element={<Sitabardi/>}/>
       <Route path="/Takli" element={<Takli/>}/>
       <Route path="/Wadi" element={<Wadi/>}/>
       <Route path="/Resistration" element={<Resistration/>}/>
       <Route path="/Log_in" element={<Log_in/>}/>
       <Route path="/CallAlert" element={<CallAlert/>}/>
       <Route path="/Response" element={<Response/>}/>
       <Route path="/Frauds" element={<Frauds/>}/>
    </Routes>
    <Toaster />
    </>
  )
}

export default App
