import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

interface IState {
  firstName: string,
  lastName: string,
  middleName: string,
  counter: number
}

interface IProps {

}

export default class App extends React.Component<IProps, IState> {


  constructor(props: any) {
    super(props);
    this.state = {
      firstName: 'Whelp',
      lastName: 'delp',
      middleName: 'hawt',
      counter: 0
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(): void {
    if (this.state.counter === 3) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  showSomeJSX(): JSX.Element {
    let famWord: string[] = ["Momma", "Papa", "Controller", "Soups"];
    return (
      <p>Hi {famWord[this.state.counter]}!!!</p>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
          <button onClick={this.handleOnClick}>Counter</button>
          <p>Current: {this.state.counter}</p>
          <p>
          Hmmm:
          {
            this.showSomeJSX()
          }
          </p>
        </header>
      </div>
    );
  }
}
