const firstImage = "url(\"https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const secondImage = "url(\"https://images.pexels.com/photos/6618/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const thirdImage = "url(\"https://images.pexels.com/photos/87501/pexels-photo-87501.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const fourthImage = "url(\"https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const fifthImage = "url(\"https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const sixthImage = "url(\"https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500\")";
const imageGallery = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage];

let targetIndex = 0;

setInterval(() => {
    document.getElementsByClassName("back-img")[0].style.backgroundImage = imageGallery[targetIndex];
    
    if (targetIndex === 4) {
        targetIndex = 0;
    } else {
        targetIndex++;
    }
}, 4000);