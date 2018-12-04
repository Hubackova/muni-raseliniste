import React, {Component} from 'react'
import PropTypes from 'prop-types';

const IntContext = React.createContext();
export class IntProvider extends Component {
  state = {
    int: typeof window !== 'undefined' && window && window.localStorage.getItem('int') || 'cz',
  }

  changeToEn = () => {
    const windowGlobal = typeof window !== 'undefined' && window
    this.setState({
      int: "en"
    })
    windowGlobal.localStorage.setItem('int', "en")
  }

  changeToCz = () => {
    const windowGlobal = typeof window !== 'undefined' && window
    this.setState({
      int: "cz"
    })
    windowGlobal.localStorage.setItem('int', "cz")
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
