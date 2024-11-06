// const form =document.querySelector(".form"),
// fileinput =document.querySelector(".file-input"),
// progresArea =document.querySelector(".progres-area")
// uploadArea =document.querySelector(".upload-area");

// form.addEventListener("click", () => {
//     fileinput.click();
// });

// fileinput.onchange =({target}) =>{
//     let file = target.file[0];
//     if(file){
//         let fileName = file.name;
//         if (fileName.length >= 12){
//             let splitName =fileName.split('.');
//             fileName =splitName[0].substring(0, 13)+ "... ."+ splitName[1];
//         }
//         uploadFile(fileName);
//     }
// }
// function uploadFile(name){
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST","php/upload.php");
//     xhr.upload.addEventListener("progress", ({loaded, total}) =>{
//         let fileLoaded = Math.floor((loaded /total*100));
//         let fileatotal = Math.floor(total/1000);
//         let fileSize;
//         (fileatotal < 1024) ?fileSize = fileatotal+ "KB" :fileSize = (loaded)/
//         let progressHTML = '<li class'
//     }
// }

const attach =document.querySelector(".attach");
const wrapper =document.querySelector(".wrapper");
attach.addEventListener("click",() =>{
    wrapper.classList.toggle("active")
})

window.onscroll = () => {
     navbar.classList.remove('active');
}




const form = document.querySelector("form"), 
fileInput = document.querySelector(".file-input"), 
progressArea = document.querySelector(".progress-area"), 
uploadedArea = document.querySelector(".uploaded-area"); 
 
form.addEventListener("click", () =>{ 
  fileInput.click(); 
}); 
 
fileInput.onchange = ({target})=>{ 
  let file = target.files[0]; 
  if(file){ 
    let fileName = file.name; 
    if(fileName.length >= 12){ 
      let splitName = fileName.split('.'); 
      fileName = splitName[0].substring(0, 13) + "... ." + splitName[1]; 
    } 
    uploadFile(fileName); 
  } 
} 
 
function uploadFile(name){ 
  let xhr = new XMLHttpRequest(); 
  xhr.open("POST", "php/upload.php"); 
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{ 
    let fileLoaded = Math.floor((loaded / total) * 100); 
    let fileTotal = Math.floor(total / 1000); 
    let fileSize; 
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB"; 
    let progressHTML = `<li class="row"> 
                          <i class="fas fa-file-alt"></i> 
                          <div class="content"> 
                            <div class="details"> 
                              <span class="name">${name} • Uploading</span> 
                              <span class="percent">${fileLoaded}%</span> 
                            </div> 
                            <div class="progress-bar"> 
                              <div class="progress" style="width: ${fileLoaded}%"></div> 
                            </div> 
                          </div> 
                        </li>`; 
    uploadedArea.classList.add("onprogress"); 
    progressArea.innerHTML = progressHTML; 
    if(loaded == total){ 
      progressArea.innerHTML = ""; 
      let uploadedHTML = `<li class="row"> 
                            <div class="content upload"> 
                              <i class="fas fa-file-alt"></i> 
                              <div class="details"> 
                                <span class="name">${name} • Uploaded</span> 
                                <span class="size">${fileSize}</span> 
                              </div> 
                            </div> 
                            <i class="fas fa-check"></i> 
                          </li>`; 
      uploadedArea.classList.remove("onprogress"); 
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML); 
    } 
  }); 
  let data = new FormData(form); 
  xhr.send(data); 
} 


//preview uploaded file files//
const chooseFile = document.getElementById("choose-file");
const imgPreview =document.getElementById("img-preveiw");

chooseFile.addEventListener("change" , function() {
  getImgData()
});

function getImgData() {
  const file = chooseFile.files[0];
  if (files){
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileInput.addEventListener("load" , function (){
      imgPreview.style.display="block";
      imgPreview.innerHTML = '<img src="" + this.result + "" />';
    });
  }
}


///upload///
const dropArea = document.querySelector(".drop_box"),
button = dropArea.querySelector("button"),
dragText = dropArea.querySelector("header"),
input = dropArea.querySelector("input");
let file;
var filename;
button.onclick = () => {
input.click();
};
input.addEventListener("change", function (e) {
var fileName = e.target.files[0].name;
let filedata = 
`
<form action="" method="post">
<div class="form">
<h4>${fileName}</h4>
<input type="email" placeholder="Enter email upload file">
<button class="btn">Upload</button>
</div>
</form>
`
;
dropArea.innerHTML = filedata;
});

const rotate = () => {
  const cubes = document.querySelectorAll(".cube");

  Array.from(cubes).forEach(
    (cube) => (cube.style.transform = `rotateY(${x}deg)`)
  );
};

const changePlayPause = () => {
  const i = document.querySelector(".play-pause i");
  const cls = i.classList[1];
  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  } else {
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

let x = 0;
let bool = false;
let interval;

const playPause = () => {
  if (!bool) {
    interval = setInterval(() => {
      x -= 90;
      rotate();
    }, 3000);
    changePlayPause();
    bool = true;
  } else {
    clearInterval(interval);
    changePlayPause();
    bool = false;
  }
};

document.querySelector(".left-arrow").addEventListener("click", () => {
  x += 90;
  rotate();
  if (bool) {
    playPause();
  }
});

document.querySelector(".left-arrow").addEventListener("mouseover", () => {
  x += 25;
  rotate();
});

document.querySelector(".left-arrow").addEventListener("mouseout", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  x -= 90;
  rotate();
  if (bool) {
    playPause();
  }
});

document.querySelector(".right-arrow").addEventListener("mouseover", () => {
  x -= 25;
  rotate();
});

document.querySelector(".right-arrow").addEventListener("mouseout", () => {
  x += 25;
  rotate();
});

document.querySelector(".play-pause").addEventListener("click", () => {
  playPause();
});






const vid = document.querySelector('#vid');
const pipBtn = document.querySelector('#pip-btn');

// On click of button, enter PIP mode
pipBtn.addEventListener('click', () => {
  vid.requestPictureInPicture();
});

vid.addEventListener('enterpictureinpicture', () => {
  pipBtn.textContent = 'Vid is now PIP';
  pipBtn.disabled = true;
});

vid.addEventListener('leavepictureinpicture', () => {
  pipBtn.textContent = 'Enter PIP';
  pipBtn.disabled = false;
});
