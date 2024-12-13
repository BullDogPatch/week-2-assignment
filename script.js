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
  },
  {
    largeImage:
      'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    thumbnailImage:
      'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
  },
  {
    largeImage:
      'https://images.unsplash.com/photo-1709789945272-daa35e0f3591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xpc2glMjBidWxsZG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    thumbnailImage:
      'https://images.unsplash.com/photo-1709789945272-daa35e0f3591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xpc2glMjBidWxsZG9nc3xlbnwwfHwwfHx8MA%3D%3D',
  },
];

const createThumbnailImages = (images) => {
  console.log(images);
  for (const image of images) {
    // console.log(images);
    console.log(image.largeImage);
  }
};

createThumbnailImages(images);
