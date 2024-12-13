const largeImageContainer = document.querySelector('.large-image-container');
const thumbnailImageContainer = document.querySelector('.thumbnail-container');

console.log(largeImageContainer);
console.log(thumbnailImageContainer);

const images = [
  {
    largeImage:
      'https://images.unsplash.com/photo-1516640997890-5e4c83df8419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    thumbnailImage:
      'https://images.unsplash.com/photo-1516640997890-5e4c83df8419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    altText: 'A brown and white English Bulldog laid on a couch.',
  },
  {
    largeImage:
      'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    thumbnailImage:
      'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    altText:
      'A white and brown English Bulldog sat on some leafs in a woodland.',
  },
  {
    largeImage:
      'https://images.unsplash.com/photo-1709789945272-daa35e0f3591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xpc2glMjBidWxsZG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    thumbnailImage:
      'https://images.unsplash.com/photo-1709789945272-daa35e0f3591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xpc2glMjBidWxsZG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    altText:
      'A white and brown English Bulldog trying to get the ball in some water.',
  },
];

const createThumbnailImages = (images) => {
  console.log(images);
  for (const image of images) {
    const img = document.createElement('img');
    img.src = image.thumbnailImage;
    img.alt = image.altText;
    thumbnailImageContainer.appendChild(img);
    img.addEventListener('click', () => console.log('test'));
  }
};

createThumbnailImages(images);

//TODO: I want to create my larger images
//The larger images will be created when the user triggers the thumbnail images event
//This function will be event handler for our images
function createLargeImagesHandler(largeImage) {
  //I want to remove the image that's in the full screen, and create a new image with new properties
  // largeImageContainer.innerHTML = null / ""
  //create an image element
  //assign values to the image element
  //add a className to style the large image
  //append the image to the largeImageContainer
}
