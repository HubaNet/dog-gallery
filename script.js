let picNum = 1;
let textNum = 1;

function fwd() {
    picNum++;
    textNum++;

    if (picNum > 10) picNum = 1;
    if (textNum > 10) textNum = 1;

    document.getElementById("picnump").innerHTML = `${textNum}/10`;
    document.getElementById("pictureGallery").src = `${picNum}.jpg`;
}

function bck() {
    picNum--;
    textNum--;

    if (picNum < 1) picNum = 10;
    if (textNum < 1) textNum = 10;

    document.getElementById("picnump").innerHTML = `${textNum}/10`;
    document.getElementById("pictureGallery").src = `${picNum}.jpg`;
}