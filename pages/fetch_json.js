import React from 'react';


const botao = function goFetch(){
    var elem = document.querySelector('#myFetchField'),
    fetchUrl = elem.value,
    respostaJson,
    stringJson;

    fetch( '' + fetchUrl )
    .then( resposta => resposta.json() )
    .then( respostaObj => respostaJson = respostaObj )
    .then( () => stringJson  = JSON.stringify(respostaJson, null, 4) )
    .then( () => {
        document.querySelector('#result').innerHTML = stringJson;
    } )
    .then( () => console.log(respostaJson) )
}

const divStyle = {
    border: '1px solid #dedede',
    borderRadius: '5px',
    padding: "10px",
    fontFamily: 'Calibri'
}

export default function FetchToJson(params) {

    return (
        <div style={divStyle}>
        <h1>Fetch to Json</h1>
        <label htmlFor={'name'}>Input URL to use js fetch() method:</label>
        <input style={{minWidth: '100%', display: 'block', margin: '10px auto'}} id={'myFetchField'} type={'text'} name={'name'} placeholder={'Your URL...'} ></input>
        <button onClick={botao}>Go fetch!</button>
        <p>Check out the javascript console in your browser element inspector for better view.</p>
        <pre><code><div id={'result'} style={divStyle}>Result:</div></code></pre>
        </div>
    )

}