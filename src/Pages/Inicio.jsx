import React from 'react';
import Header from '../components/GlobalAdmi/Header';
import Navigation from '../components/GlobalAdmi/Navigation';
import InfoInicio from '../components/InfoInicio/InfoInicio';

function Inicio () {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <InfoInicio></InfoInicio>
    </div>
  );
}

export default Inicio;
