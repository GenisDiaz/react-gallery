import React from 'react';
import { Link } from 'react-router';

const Photo = React.createClass({
  render() {
    const { photo, i } = this.props;
    return (
      <div className="col-md-4 col-xs-6">
        <div className="block-photo">
          {photo.id}
        </div>
      </div>
    )
  }
});

export default Photo;
