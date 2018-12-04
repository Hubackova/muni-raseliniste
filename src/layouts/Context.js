import React, {Component} from 'react'
import PropTypes from 'prop-types';

const IntContext = React.createContext();
export class IntProvider extends Component {
  state = {
    int: localStorage.getItem('int') || 'cz',
  }

  changeToEn = () => {
    this.setState({
      int: "en"
    })
    localStorage.setItem('int', "en")
  }

  changeToCz = () => {
    this.setState({
      int: "cz"
    })
    localStorage.setItem('int', "cz")
  }

  render() {
    const {children} = this.props
    return (
      <IntContext.Provider
        value={{
          int: this.state.int,
          changeToCz: this.changeToCz,
          changeToEn: this.changeToEn
        }}
      >
        {children}
      </IntContext.Provider>
    )
  }
}

IntProvider.propTypes = {
  children: PropTypes.node
}

export const Consumer = IntContext.Consumer
