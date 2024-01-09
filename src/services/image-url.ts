import noImage from "../assets/default_placeholder_image.webp"; // We need to import this as a module so that we can use it as a string because it's not a .ts file

function getCroppedUrl(url: string) {
  if (!url) return noImage;

  const target = "media/"; // The string we want to find
  const index = url.indexOf(target) + target.length; // Find the index of the target string, then add the length of the target string to get the index of the first character after the target string (i.e. the start of the image filename)
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index); // Slice the string into two parts, then insert the crop string in the middle of the two parts and return the new string

  return newUrl;
}

export default getCroppedUrl;
