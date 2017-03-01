import React from 'react';
import FontAwesome from 'react-fontawesome';

class Spinner extends React.Component {
  render() {
    return (
      <FontAwesome name='rocket' size='2x' spin/>
    )
  }
};

export default Spinner;
