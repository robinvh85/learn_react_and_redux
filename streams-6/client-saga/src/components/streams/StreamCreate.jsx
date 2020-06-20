import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../store/streams/actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    const { userId } = this.props.auth;
    this.props.createStream(formValues, userId);
  }

  render() {
    console.log("StreamCreate - render()", this.props);
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { createStream })(StreamCreate)
