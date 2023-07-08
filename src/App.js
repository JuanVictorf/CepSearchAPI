
import "./style.css";
import React, { useState} from "react";
import axios from "axios";



function App() {

const [cep, setCep] = useState('');
const [endereco, setEndereco] = useState(null);

const handleCepChange = (event) => {
  setCep(event.target.value);
};

const buscarEndereco = () => {
  axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => {
      setEndereco(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
      setEndereco(null);
    });
};



  return (
      <div className="container">
        <h1>API Busca CEP</h1>
        <input type="text" value={cep} onChange={handleCepChange} />
        <button onClick={buscarEndereco} className="botao">Buscar CEP</button>

      
      {endereco && (
          <div className="resultado">
            <p>CEP: {endereco.cep}</p>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>Estado: {endereco.uf}</p>
          </div>
        )}
      
      </div>
  );
}


export default App;
