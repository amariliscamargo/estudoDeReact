import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//     Criando um elemento com javaScript

//const rootElement = document.getElementById('root')
//const elemento = document.createElement('div')
//elemento.className = 'container'
//elemento.innerHTML = 'Hello World!'

//rootElement.appendChild(elemento);

//     Criando um elemento com React

//const ama = document.getElementById('ama')

//const criaAma = React.createElement('section', {className:'amaClass'}, 'Finalmente entendi como criar elemento no React')

//ReactDOM.render(criaAma, ama)


//const rootElement = document.getElementById('root')
//const element = React.createElement('div', {className:'container'}, 'Hello World!')

//ReactDOM.render(element, rootElement)


//const amatest = document.getElementById('ama1')

//const amaElement = React.createElement('em', {className:'container'}, 'Entendi como cria módulo no react')

//ReactDOM.render(amaElement, amatest)

// Criando elemento no React com ajuda do JSX

//const hello = document.getElementById('root')

//const mensagem = <h1>Hello World</h1>

//ReactDOM.render(mensagem,hello)

//Forma modular

/* const hello = document.getElementById('root')
const helloWord = 'Oi Mundo'
const props = {
    className:'teste123',
    children: ['goodbye blue sky'],
    style:{
        background:'blue',
        fontFamily:'Arial'
    }
}
const AmaElement = ()=> <h1 {...props}>{helloWord}</h1>
ReactDOM.render(<AmaElement/>, hello); */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
