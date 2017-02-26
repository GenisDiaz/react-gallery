import config from '../data/config';

// function for fetch get photos in init app
export function getPhotos() {
  let fetchFlickr = fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a3aaff05f8fbe045216b9a991affd3ad&user_id=54694930@N05&per_page=5&format=json&nojsoncallback=1');
  fetchFlickr.then( response => response.json())
    .then(x => console.log('hola', x));
  return fetchFlickr;
}
