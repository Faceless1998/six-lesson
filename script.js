const prevButton = document.querySelector(".prev");
const NextButton = document.querySelector(".next");
const ImageContainer = document.querySelector(".carousel-images");

let currentImage = 0;

const updateCarousel = () => {
    const width = window.innerWidth;
    ImageContainer.style.transform = `translateX(-${currentImage * width}px)`
}

const goToNext = () => {
    // currentImage = currentImage + 1;
    // if(currentImage < ImageContainer.children.length-1){
    //     currentImage = currentImage;
    // }
    // else if(currentImage === ImageContainer.children.length){
    //     currentImage = 0;
    // }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    currentImage = (currentImage + 1) % ImageContainer.children.length;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    console.log(currentImage)
    updateCarousel()
}

const goToPrev = () => {
    // currentImage = currentImage - 1;
    // if(currentImage >-1){
    //     currentImage = currentImage;
    // }
    // else if(currentImage === -1){
    //     currentImage = ImageContainer.children.length-1;
    // }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    currentImage = (currentImage - 1 + ImageContainer.children.length) % ImageContainer.children.length
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(currentImage)
    updateCarousel()
}

prevButton.addEventListener("click",goToPrev)
NextButton.addEventListener("click",goToNext)


window.addEventListener("keydown", (event) => {
    if(event.key === "ArrowRight"){
        goToNext()
    }else if(event.key === "ArrowLeft"){
        goToPrev()
    }
})