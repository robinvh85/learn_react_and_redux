import { combineReducers } from 'redux';

const songsReducer = () => {
  console.log("songsReducer")
  return [
    { title: 'No Scrub', duration: '4:05' },
    { title: 'Macarena', duration: '2:05' },
    { title: 'All star', duration: '4:05' },
    { title: 'I Want it that way', duration: '1:45' }
  ];
}

const selectedSongReducer = (selectedSong = null, action) => {
  console.log("selectedSongReducer", selectedSong)

  if(action.type === 'SONG_SELECTED'){
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

