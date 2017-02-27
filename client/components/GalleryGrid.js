import React from 'react';
import Photo from './Photo';

const GalleryGrid = React.createClass({
  render() {
    return (
      <div className="row">
          {this.props.photos.map((photo, i) => <Photo {...this.props} key={i} i={i} photo={photo}/>)}
      </div>
    )
  }
});

export default GalleryGrid;
