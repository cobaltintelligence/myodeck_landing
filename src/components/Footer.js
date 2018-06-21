// components/Footer.js
// Yuan Wang

import React, { Component } from 'react';
import { Black, White, PrimaryColor, Red, Green } from '../global/Colors.js'
import axios from 'axios'
import { __COMPONENT_STYLES__ } from '../global/Styles.js'
import Icon from 'react-icons-kit';
import { roundN } from '../helpers/calcs.js'
import { boldUp } from 'react-icons-kit/entypo/boldUp'
import { boldDown } from 'react-icons-kit/entypo/boldDown'
import { Pie, PieChart, Cell } from 'recharts'
import { Checkbox } from '@blueprintjs/core'
import { RangeSlider, Slider } from '@blueprintjs/core'

const __DEV__ = false

const __COLORS__ = [
  PrimaryColor(0.4),
  Red(0.4),
  Green(0.4)
]

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={styles.container}>
        
      </div>
    )
  }
}


const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    display: 'flex',
    marginBottom: 0,
  },
}
