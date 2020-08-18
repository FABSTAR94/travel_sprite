const firstImage = "url(\"https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\")";
const secondImage = "url(\"https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\")";
const thirdImage = "url(\"https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60\")";

const imageGallery = [firstImage, secondImage, thirdImage];

let targetIndex = 0;

setInterval(() => {
    document.getElementsByClassName("back-img")[0].style.backgroundImage = imageGallery[targetIndex];
    
    if (targetIndex === 2) {
        targetIndex = 0;
    } else {
        targetIndex++;
    }
}, 4000);