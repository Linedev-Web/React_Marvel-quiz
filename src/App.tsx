import React from 'react';

import './App.css';

import {Header} from '@/shared/Header/Header'
import {Landing} from '@/shared/Landing/Landing'
import {Footer} from '@/shared/Footer/Footer'


function App() {
  return (
    <div className="App">
		<Header/>
        <Landing/>
        <Footer/>
    </div>
  );
}

export default App;
