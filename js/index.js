const firstImage = "url(\"https://images6.alphacoders.com/102/1026927.jpg\")";
const secondImage = "url(\"https://upload.wikimedia.org/wikipedia/commons/8/81/Alto%27s_Adventure_screenshot_-_B06_Camp.png\")";
const thirdImage = "url(\"https://www.ubackground.com/_ph/86/337703663.jpg\")";
const fourthImage = "url(\"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eb7ba755625865.598c27c460739.png\")";
const fifthImage = "url(\"https://i.pinimg.com/originals/90/d1/77/90d177942abcd783dea3b29ba00f32f3.jpg\")";
const sixthImage = "url(\"https://i.pinimg.com/originals/e0/b6/28/e0b6287c68560b06d708548e5be8e0ea.jpg\")";
const seventhImage = "url(\"https://img5.goodfon.com/wallpaper/nbig/b/c7/volk-medved-gora-vektor.jpg\")";
const eightImage = "url(\"https://w.wallhaven.cc/full/96/wallhaven-969kvd.jpg\")";
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
