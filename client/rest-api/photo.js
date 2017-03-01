import config from '../data/config';
import store from '../store';

export function getProfileName() {
  let fetchFlickrProfile = fetch('https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key='+config.api_key+'&user_id='+config.user_id+'&format=json&nojsoncallback=1');
  return fetchFlickrProfile.then(response => response.json())
    .then(profile => {
      if (profile.code === 1){
        return false;
      }
      return profile.profile;
    })
    .then(name => name.first_name);
}

// function for fetch get photos in init app
export function getInitPhotosApi() {
  const { page } = store.getState();
  let fetchFlickr = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+config.api_key+'&user_id='+config.user_id+'&per_page='+page.number_photos+'&page='+page.current_page+'&format=json&nojsoncallback=1');
  return fetchFlickr.then( response => response.json())
    .then(photos =>{
      if (photos.code === 2){
        return {
          code: 2,
          text: new Error("User Id incorrect. See config file.")
        };
      }
      return photos.photos;
    })
    .then(photo => {
        let photoResults = photo.photo;
        let profileName  = getProfileName();
        return profileName.then(
          name => {
            if (!name) {
              return {
                code: 2,
                text: new Error("User Id incorrect. See config file.")
              };
            }
            return Object.assign({}, photo, {photo: photoResults.map(x => Object.assign({}, x, {'name': name}))});
        });
      }
    );
}

export function getPhotoComments(photoId) {
  let fetchFlickrComments = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.comments.getList&api_key='+config.api_key+'&photo_id='+photoId+'&format=json&nojsoncallback=1');
  return fetchFlickrComments.then(response => response.json())
    .then(photoComments => photoComments.comments)
    .then(comments => comments.comment);
}

// function for get photo info when it's called
export function getPhotoInfoApi(photoId) {
  let fetchFlickrPhotoInfo = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+config.api_key+'&photo_id='+photoId+'&format=json&nojsoncallback=1');
  return fetchFlickrPhotoInfo.then(response => response.json())
    .then(photoInfo => {
      let photoInfoResult = photoInfo.photo;
      let photoComments = getPhotoComments(photoId);
      return photoComments.then(
        comments => Object.assign({}, photoInfoResult, {comments: comments})
      );
    });
}
