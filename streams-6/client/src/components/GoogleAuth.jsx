import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '853167705300-smhda4ip0a9hldr0nmcqes53jobq9hb1.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render() {
    return <div>Google Auth</div>
  };
}

export default GoogleAuth;
