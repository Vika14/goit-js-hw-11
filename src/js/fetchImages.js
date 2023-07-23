export const fetchImages = async (inputValue, pageNr) => {
  return await fetch(`https://pixabay.com/api/?key=38418103-e2e4509277d2059a8bf32eb76&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`)
        .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};