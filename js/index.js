const firstImage = "url(\"https://images6.alphacoders.com/102/1026927.jpg\")";
const secondImage = "url(\"https://images.wallpapersden.com/image/download/minimalist-landscape-painting_67136_2880x1800.jpg\")";
const thirdImage = "url(\"https://www.ubackground.com/_ph/86/337703663.jpg\")";
const fourthImage = "url(\"https://www.pixel4k.com/wp-content/uploads/2018/10/forset-landscape-artwork-4k_1540751323.jpg\")";
const fifthImage = "url(\"https://i.pinimg.com/originals/90/d1/77/90d177942abcd783dea3b29ba00f32f3.jpg\")";
const sixthImage = "url(\"https://i.pinimg.com/originals/e0/b6/28/e0b6287c68560b06d708548e5be8e0ea.jpg\")";
const seventhImage = "url(\"https://images6.alphacoders.com/887/887558.jpg\")";
const eightImage = "url(\"https://images.hdqwalls.com/wallpapers/vector-landscape-reflection-mountains-4k-md.jpg\")";
const ninethImage = "url(\"https://wallpaperaccess.com/full/812556.jpg\")";
const tenthImage = "url(\"https://i.pinimg.com/originals/02/c5/ff/02c5ff3803aeddfea08247d6cdc3f8e3.jpg\")";


const imageGallery = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eightImage, ninethImage, tenthImage];

let targetIndex = 0;

setInterval(() => {
    document.getElementsByClassName("back-img")[0].style.backgroundImage = imageGallery[targetIndex];

    if (targetIndex === 9) {
        targetIndex = 0;
    } else {
        targetIndex++;
    }
}, 4000);
