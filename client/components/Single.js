import React from 'react';
import Photo from './Photo';

const Single = React.createClass({
  render() {
    const { photoId } = this.props.params;
    const i = this.props.photos.findIndex((photo) => photo.id === photoId);
    const photo = this.props.photos[i];
    console.log(i, photo);

    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="block-photo">
          This is a singular photo
        </div>
      </div>
    )
  }
});

export default Single;
