const form = document.querySelector('#img-form');
const img = document.querySelector('#img');
const outputPath = document.querySelector('#output-path');
const filename = document.querySelector('#filename');
const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');

// Load image and show form
const loadImage = (e) =>{
  const file = e.target.files[0]
  if (!isFileImage(file)){
    console.log("please select an Image!");
    return;
  }
  const image = new Image();
  image.src = URL.createObjectURL(file)
  image.onload = function(){
    widthInput.value = this.width;
    heightInput.value = this.height;

  }
  filename.innerText = file.name
  form.style.display = 'block'
  console.log("success");

}

const isFileImage = (file) =>{
  const acceptedImageType = ['image/gif','image/png','image/jpeg','image/jpg']
  return file && acceptedImageType.includes(file['type'])
}
img.addEventListener("change",loadImage)