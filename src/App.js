import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
          <div class='wrapper'>
            <SayFullName name='Александр' surname='Куликов' link='vk.com' what='Hello World' prof='Web-Developer'/>
          </div>
    );
  }
}

function SayFullName(props) {
  return (
   <div>
    <h1> Мое имя {props.name}, фамилия - {props.surname}</h1>
    <p> И я {props.prof}</p>
    <h1>{props.what}</h1>
    <a href={props.link}>Вконтакте</a>
    <hr/>
   </div>
  )
}

export default App;
