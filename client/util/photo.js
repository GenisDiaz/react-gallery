import config from '../data/config';
import page from '../data/page';

// function for fetch get photos in init app
export function getPhotos() {
  console.log('config', config, page);
  let fetchFlickr = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+config.api_key+'&user_id='+config.user_id+'&per_page='+page.number_photos+'&format=json&nojsoncallback=1');
  fetchFlickr.then( response => response.json())
    .then(photos => photos.photos)
    .then(photo => console.log('hola',photo));
  return fetchFlickr;
}
