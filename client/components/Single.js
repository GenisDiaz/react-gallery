import React from 'react';
import Spinner from './commons/Spinner';
import Comment from './Comment';
import store from '../store';
import { getPhotoInfo } from '../actions/actionCreators';
import FontAwesome from 'react-fontawesome';

class Single extends React.Component {
  componentDidMount() {
    const { photoId, index } = this.props.params;
    store.dispatch(getPhotoInfo(photoId, index));
  }
  render() {
    const { photoId } = this.props.params;
    const i = this.props.photos.findIndex((photo) => photo.id === photoId);
    const photo = this.props.photos[i];
    if (photo && photo.info) {
      const { comments } = photo.info;
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
                  <hr />
                  <p className="text-right"><FontAwesome name='calendar-o'/> {photo.info.dates.taken} - <FontAwesome name='eye'/> {photo.info.views}</p>
                  <p>{photo.info.description._content}</p>
                  <hr />
                  <h3><FontAwesome name='comments'/> Comments</h3>
                  <div className="block-comments">
                    {comments.map((comment, i) => <Comment key={i} i={i} comment={comment}/>)}
                  </div>
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
