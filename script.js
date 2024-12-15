const largeImageContainer = document.querySelector('.large-image-container');
const thumbnailImageContainer = document.querySelector('.thumbnail-container');
const previousButton = document.querySelector('.previous-btn');
const nextButton = document.querySelector('.next-btn');

let imageIndex = 0;

const images = [
  {
    thumbnailImage:
      'https://images.unsplash.com/photo-1516640997890-5e4c83df8419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    altText: 'A brown and white English Bulldog laid on a couch.',
  },
  {
    thumbnailImage:
      'https://images.unsplash.com/photo-1546201483-a0fa9e5ed258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW5nbGlzaCUyMGJ1bGxkb2dzfGVufDB8fDB8fHww',
    altText:
      'A white and brown English Bulldog sat on some leafs in a woodland.',
  },
  {
    thumbnailImage:
      'https://images.unsplash.com/photo-1709789945272-daa35e0f3591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xpc2glMjBidWxsZG9nc3xlbnwwfHwwfHx8MA%3D%3D',
    altText:
      'A white and brown English Bulldog trying to get the ball in some water.',
  },
];

const createThumbnailImages = (images) => {
  // for (const image of images) {
  //   const img = document.createElement('img');
  //   img.src = image.thumbnailImage;
  //   img.alt = image.altText;
  //   thumbnailImageContainer.appendChild(img);
  //   img.addEventListener('click', () => createLargeImagesHandler(img));
  // }

  // need index
  images.forEach((image, idx) => {
    const img = document.createElement('img');
    img.src = image.thumbnailImage;
    img.alt = image.altText;
    thumbnailImageContainer.appendChild(img);
    img.addEventListener('click', () => createLargeImagesHandler(images[idx]));
  });
};

createThumbnailImages(images);

const createLargeImagesHandler = (img) => {
  let image = largeImageContainer.querySelector('img');
  // Create the image if it doesn't exist
  if (!image) {
    image = document.createElement('img');
    image.classList.add('large-image');
    largeImageContainer.appendChild(image);
  }

  image.src = img.thumbnailImage;
  image.alt = img.altText;
};

console.log(imageIndex);

const selectImage = (index) => {
  console.log(imageIndex);
  imageIndex += index;
  console.log(images[imageIndex]);

  // This bit I know from using React.js using state, going back to basic JS is more difficult, but here is a modified versiojn from the react docs
  /*
export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if(index < sculptureList.length - 1){
      
    setIndex(index + 1);
    }
  }
    */

  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }

  createLargeImagesHandler(images[imageIndex]);
};

previousButton.addEventListener('click', () => selectImage(-1));
nextButton.addEventListener('click', () => selectImage(1));

createLargeImagesHandler(images[imageIndex]);
