import React from 'react';
import Photo from './Photo';

const GalleryGrid = React.createClass({
  render() {
    return (
      <div className="text-center padding-bottom-20p">
        <div className="row">
            {this.props.photos.map((photo, i) => <Photo {...this.props} key={i} i={i} photo={photo}/>)}
        </div>
        <a 
          className="btn btn-xs btn-default" 
          href="javascript:;" 
          role="button"
          onClick={this.props.nextPage.bind(null, this.props.page.current_page)}
          >More photos</a>
      </div>
    )
  }
});

export default GalleryGrid;
