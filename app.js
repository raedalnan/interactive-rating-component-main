const ratingContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container")
const submit = document.getElementById("submit-btn")
const rate = document.querySelectorAll(".rate")
const spanRating = document.getElementById("rating")
var rateText = null;
rate.forEach(e => {
    e.addEventListener("click" , ()=>{
        rate.forEach(btn =>{
            if(btn.classList.contains("checked")){
                btn.classList.remove("checked")
            }
        })
        e.classList.add("checked")
        rateText=e.innerText;
    })
});
submit.addEventListener("click" , ()=>{
    if(rateText){
        spanRating.innerText = rateText;
        ratingContainer.classList.add("hidden");
        thanksContainer.classList.remove("hidden")
    }
   
})
