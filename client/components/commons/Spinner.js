import React from 'react';
import FontAwesome from 'react-fontawesome';

const Spinner = React.createClass({
  render() {
    return (
      <FontAwesome name='rocket' size='2x' spin/>
    )
  }
});

export default Spinner;
