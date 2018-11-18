import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

interface IState {
  firstName: string,
  lastName: string,
  middleName: string
}

interface IProps {

}

export default class App extends React.Component<IProps, IState> {


  constructor(props: any) {
    super(props);
    this.state = {
      firstName: 'Whelp',
      lastName: 'delp',
      middleName: 'hawt'
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(): void {
    this.setState({
      middleName: 'd00d111111'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'abc'} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.state.middleName}</h1>
          <button onClick={this.handleOnClick}>Press Me</button>
        </header>
      </div>
    );
  }
}
