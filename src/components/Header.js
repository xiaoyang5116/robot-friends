import React, { Component } from 'react'

// const Header = () => {
//   return (
//     <h1 className="f1">RoboFriends</h1>
//   )
// }

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false
  }

  render() {
    return <h1 className="f1">RoboFriends</h1>
  }
}

export default Header