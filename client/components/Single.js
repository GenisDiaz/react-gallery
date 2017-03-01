import React from 'react';
import Spinner from './commons/Spinner';
import store from '../store';
import { getPhotoInfo } from '../actions/actionCreators';

class Single extends React.Component {
  componentDidMount() {
    const { photoId } = this.props.params;
    console.log('hello', this);
    store.dispatch(getPhotoInfo(photoId));
  }
  render() {
    const { photoId } = this.props.params;
    const i = this.props.photos.findIndex((photo) => photo.id === photoId);
    const photo = this.props.photos[i];
    if (photo) {
      return (
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="block-single-photo">
            <div className="row">
              <div className="col-md-8 col-xs-12">
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_h.jpg`} alt={`${photo.title}`}/>
              </div>
              <div className="col-md-4 col-xs-12">
                <div className="block-single-photo-info">
                  <h1 className="text-right">{photo.title}</h1>
                  <h2 className="text-right">by {photo.name}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="col-md-12 col-sm-12 col-xs-12 text-center">
          <Spinner/>
        </div>
      )
    }
  }
};

export default Single;
