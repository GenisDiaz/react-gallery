import React from 'react';
import Photo from './Photo';
import Spinner from './commons/Spinner';
import ButtonMorePhoto from './commons/ButtonMorePhoto';

class GalleryGrid extends React.Component {
  render() {
    const { photos, page, nextPage } = this.props;
    return (
      <div className="text-center padding-bottom-20p">
        <div className="row">
            {photos.map((photo, i) => <Photo {...this.props} key={i} i={i} photo={photo}/>)}
        </div>
        { page.loading ? <Spinner/> : <ButtonMorePhoto {...this.props}/> }
      </div>
    )
  }
};

export default GalleryGrid;
