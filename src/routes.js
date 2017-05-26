import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'

export default (
  <Router>
    <Route path="/" component={Home}/>
  </Router>
)
