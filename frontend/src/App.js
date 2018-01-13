import React, { Component } from 'react'

// Redux
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';

import { session } from 'client-sessions';

// Material-UI
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

// Theme
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Font
import 'typeface-roboto'

// Click handler
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// Styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
}

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

const reducers = {
  // ... your other reducers here ...
  session: sessionReducer
};
const reducer = combineReducers(reducers);

class App extends Component {
  constructor (props, context) {
    super(props, context)

    // Default text
    this.state = {
      text: 'I love U'
    }
  }

  onSubmit = e => {
    // No real submit
    e.preventDefault()

    // Get input value
    const text = this.refs.cool_text.input.value

    // Set state
    this.setState({
      text
    })
    // Do something with text
   this.refs.ta.value = this.refs.ta.value + "\n" +text;
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Lillith's web idea</h1>
          <h2>Lashing up the web</h2>
          <textarea ref='ta' > </textarea>
          <form onSubmit={this.onSubmit}>
            <TextField
              ref='cool_text'
              floatingLabelText='Say something cool!'
              defaultValue={this.state.text}
            />
            <br />
            <RaisedButton type='submit' label='Submit' primary />
          </form>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
