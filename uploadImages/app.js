const images = [];

const uploadedImage = document.querySelector(".fileUploaded");
const image = document.querySelector(".displayImageUploaded");

uploadedImage.addEventListener("change", () => {
    const reader = new FileReader();
    console.log("hey");
    reader.addEventListener('load', () => {;
        images.push(reader.result);  
    });
    reader.readAsDataURL(uploadedImage.files[0]);
});
