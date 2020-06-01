import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//   return <div>Hello:</div>
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {lat: 1, lng: null, errorMessage: ''};
  // }

  state = {lat: null, lng: null, errorMessage: ''};

  componentDidMount() {
    console.log('My component was rendered to the screen')
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => {
        this.setState({errorMessage: err.message})
      }
    );
  }

  componentDidUpdate() {
    console.log('My component was updated - it was rerendered')
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner />
  }

  // Required from React
  render() {
    console.log("Render component")
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
