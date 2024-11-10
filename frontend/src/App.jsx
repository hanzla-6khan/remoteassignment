

import './App.css'
import ProtectedPage from './pages/componets/ProtectedPage';





import Header from './pages/Header';
import Login from './pages/Login';


import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';


function App() {




  return (

    <>
      <Header />
      <Routes>


        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />

        <Route path='dashboard' element={<ProtectedPage />} />


      </Routes>




    </>
  )
}


// const h1_virtualDom = <h1> loading this contend </h1>
// console.log(h1_virtualDom)

// const h1_readDom = document.createElement('h1');
// h1_readDom.innerText = "testing Real Dom ";
// console.dir(h1_readDom)




export default App
