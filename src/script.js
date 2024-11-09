const galleryContainer = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const clearGalleryBtn = document.getElementById('clearGalleryBtn');
const removeLastBtn = document.getElementById('removeLastBtn');
const reverseGalleryBtn = document.getElementById('reverseGalleryBtn');
let images = [];
let currentPage = 1; 
function loadImages() {
    fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=4`)
        .then(response => response.json())
        .then(data => {
            images = [...images, ...data];
            displayGallery();
            currentPage++;
        })
        .catch(error => console.log('Error:', error));
}
function displayGallery() {
    galleryContainer.innerHTML = ''; // Очищаємо
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.download_url;
        imgElement.alt = 'Image';
        galleryContainer.appendChild(imgElement); //Не впевнена 
    });
}
loadMoreBtn.addEventListener('click', () => {
    loadImages();
});
clearGalleryBtn.addEventListener('click', () => {
    images = [];
    displayGallery();
    currentPage = 1; 
});
removeLastBtn.addEventListener('click', () => {
    images.pop();
    displayGallery();
});
reverseGalleryBtn.addEventListener('click', () => {
    images.reverse();
    displayGallery();
});
loadImages();
