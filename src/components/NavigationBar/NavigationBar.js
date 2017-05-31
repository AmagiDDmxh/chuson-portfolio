import React, {Component} from 'react'
import { NavigationContainer, NavItem } from './NavigationBar.style'

export default class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About Me</NavItem>
      </NavigationContainer>
    )
  }
}

/**
 * Created by Amagi on 5/31/2017.
 */
