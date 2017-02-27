import config from '../data/config';
import page from '../data/page';

export function getProfileName() {
  let fetchFlickrProfile = fetch('https://api.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key='+config.api_key+'&user_id='+config.user_id+'&format=json&nojsoncallback=1');
  return fetchFlickrProfile.then(response => response.json())
    .then(profile => profile.profile)
    .then(name => name.first_name);
}

// function for fetch get photos in init app
export function getInitPhotos() {
  let fetchFlickr = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+config.api_key+'&user_id='+config.user_id+'&per_page='+page.number_photos+'&format=json&nojsoncallback=1');
  return fetchFlickr.then( response => response.json())
    .then(photos => photos.photos)
    .then(photo => {
        let photoResults = photo.photo;
        let profileName = getProfileName();
        return profileName.then(
          name => photoResults.map(x => Object.assign({}, x, {'name': name}))
        );
      }
    );
}
