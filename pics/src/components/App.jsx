import React from 'react';
import unslash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
      const response = await unslash.get('/search/photos1', {
        params: { query: term }
      }).catch(e => {
        console.log("SEARCH IMAGES ERROR", e)
      });

      if(response){
        this.setState({images: response.data.results});
      }
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }} >
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images}  />
      </div>
    )
  }
}

export default App;
