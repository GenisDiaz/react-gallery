import React from 'react';
import Photo from './Photo';

const GalleryGrid = React.createClass({
  render() {
    return (
      <div className="text-center">
        <div className="row">
            {this.props.photos.map((photo, i) => <Photo {...this.props} key={i} i={i} photo={photo}/>)}
        </div>
        <a className="btn btn-xs btn-default" href="#" role="button">More photos</a>
      </div>
    )
  }
});

export default GalleryGrid;
