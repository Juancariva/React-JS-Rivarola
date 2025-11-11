import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/containers/NavBar/index.jsx";
import ItemListContainer from "./components/containers/ItemListContainer/index.jsx";
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a Expert!" />
    </>
  );
}

export default App
