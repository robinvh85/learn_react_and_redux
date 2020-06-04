import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
// const SongDetail = ({song}) => {
  if(!props.song) {
    return <label>No selected song</label>
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: { props.song.title }</p>
      <p>Duration: { props.song.duration }</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("SongDetail -> mapStateToProps")
  return {
    song: state.selectedSong
  }
};

export default connect(mapStateToProps)(SongDetail)
