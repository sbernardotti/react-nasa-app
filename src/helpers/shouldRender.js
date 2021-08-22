export default function shouldRender(photos) {
  return photos.length > 0 && photos.length % 25 === 0;
}
