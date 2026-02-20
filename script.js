let  picNum = 1;
      let  textNum = 1;
function changeSrc(){

document.getElementById("picnump").innerHTML = `${textNum}/10`
    document.getElementById("pictureGallery").src = `${picNum}.jpg`
    ++picNum;
++textNum;
    
    if (picNum > 10){picNum=1};
    if (textNum > 10){textNum=1};

}
