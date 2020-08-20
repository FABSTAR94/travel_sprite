const firstImage = "url(\"https://st2.depositphotos.com/2058297/6457/v/450/depositphotos_64576809-stock-illustration-san-francisco-skyline.jpg\")";
const secondImage = "url(\"https://newcastlebeach.org/images/london-cartoon-8.png\")";
const thirdImage = "url(\"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/254f318f-c1bd-4166-88a9-7986e45bb4fe/dbvhka5-93e03bed-ea67-4f71-851b-daf8b61a39d1.png/v1/fill/w_1024,h_727,strp/beutiful_sunset_in_desert_mosque_silhouette_by_simplexor_dbvhka5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjciLCJwYXRoIjoiXC9mXC8yNTRmMzE4Zi1jMWJkLTQxNjYtODhhOS03OTg2ZTQ1YmI0ZmVcL2RidmhrYTUtOTNlMDNiZWQtZWE2Ny00ZjcxLTg1MWItZGFmOGI2MWEzOWQxLnBuZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aJyfwsLYewgwSIKG9h43x552jWQ-XhkpYiAHPeJwp2U\")";
const fourthImage = "url(\"https://static.vecteezy.com/system/resources/thumbnails/000/274/410/original/Paris_Illustration.jpg\")";
const fifthImage = "url(\"https://i.pinimg.com/originals/90/d1/77/90d177942abcd783dea3b29ba00f32f3.jpg\")";
const sixthImage = "url(\"https://images.alphacoders.com/961/961608.jpg\")";
const seventhImage = "url(\"https://images6.alphacoders.com/887/887558.jpg\")";
const eightImage = "url(\"https://images6.alphacoders.com/102/1026927.jpg\")";

const imageGallery = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage, seventhImage, eightImage];

let targetIndex = 0;

setInterval(() => {
    document.getElementsByClassName("back-img")[0].style.backgroundImage = imageGallery[targetIndex];
    
    if (targetIndex === 7) {
        targetIndex = 0;
    } else {
        targetIndex++;
    }
}, 4000);