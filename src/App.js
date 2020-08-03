import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain';
import Carrousel from './components/Carousel';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].titulo[0]}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando com mimimi"}
      />
        
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[0]}
      />
      
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[1]}
      />
      
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[2]}
      />      
      
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[3]}
      />      
      
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[4]}
      />      
      
      <Carrousel
        ignoreFirstVideo
        category = {dadosIniciais.categorias[5]}
      />

    </div>
  );
}

export default App;