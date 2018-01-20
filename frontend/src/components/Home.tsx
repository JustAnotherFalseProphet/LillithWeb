import * as React from 'react';
import AppState from '../stores/AppState';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

const style = {
  height: 400,
  width: 600,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

@observer
class Home extends React.Component<{ appState: AppState }, any> {

  onClick = () => {
    this.props.appState.resetTimer()
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="home">
          <h1>
            Hare Krsna
          </h1>
          <textarea style={style} >
            Sri Krsna Caitanya
          </textarea>
          <TextField
            hintText="Full width"
            fullWidth={true}
          />
          <p>timer: {this.props.appState.timer}</p>
          <button onClick={this.onClick}>Reset</button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Home;
