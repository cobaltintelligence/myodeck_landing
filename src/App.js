// App.js
// Yuan Wang

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BackgroundImage from './components/BackgroundImage.js'
import { __COMPONENT_STYLES__ } from './global/Styles.js'
import { Black, White, PrimaryColor } from './global/Colors.js'
import axios from 'axios'
import ScrollArea from 'react-scrollbar'
// import FlowsPane from './components/FlowsPane.js'
import Footer from './components/Footer.js'
import './index.css'
import { dataGen } from './helpers/calcs.js'
import { RangeSlider, Slider } from '@blueprintjs/core'

const __BACKGROUND_IMAGES__ = [
  "/action-athlete-barbell-841130.jpg"
]

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount() {

  }

  render() {
    // determine the background
    var now = new Date()
    var hour = now.getHours()

    var backgroundIndex = 0
    var backgroundImage = __BACKGROUND_IMAGES__[backgroundIndex]

    return (
      <div 
        style={styles.container}
        className="App">
        <BackgroundImage 
          backgroundColor={Black(0.8)}
          contentStyle={{
            ...__COMPONENT_STYLES__.jumboContent,
            ...styles.content
          }}
          background={"url(" + backgroundImage + ")"}>
          <div style={styles.titleColumn}>
            <h1 
              class='vertical-text'
              style={{
                ...__COMPONENT_STYLES__.jumboText,
                ...styles.vertical}}>
              Myodeck
            </h1>

          </div>
          <div style={styles.vline}/>

          <div style={styles.pane}>
            <p 
              style={{
                ...__COMPONENT_STYLES__.subtitle,
                ...{
                  color: White(1)
                }}}>
              A Cobalt Intelligence Project
            </p>

            <div style={styles.hline}/>
            <br/>

            <p 
              style={{
                ...__COMPONENT_STYLES__.paragraph,
                ...{
                  color: White(1)
                }}}>
              Project abstract lorem ipsum
            </p>
            <br/>
            <img 
              alt="Myodeck exercise device"
              src='/hopper.jpg' 
              style={styles.hopper}/>
          </div>
        </BackgroundImage>
        <Footer/>
      </div>
    );
  }
}



const styles = {

  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    display: 'flex'
  },
  titleColumn: {
    backgroundColor: White(0.0),
    paddingTop: 470,
    paddingLeft: 30,
    width: 130,
  },
  content: {
    width: '100vw',
    height: '100vh',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
  },
  vline: {
    maxWidth: 8,
    minWidth: 8,
    backgroundColor: White(0.7),
    flex: 1,
    marginTop: 10,
  },
  hline: {
    backgroundColor: White(1),
    maxHeight: 2,
    minHeight: 2,
    flex: 2,
    width: 400,
    marginTop: 10,
  },
  pane: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    padding: 30,
    paddingTop: 4,
  },
  hopper: {
    width: '50vw'
  }
}

export default App;
