

let bar = document.querySelector(".bar")
let round = document.querySelector(".round")
let span = document.querySelector(".span")
let btn = document.querySelector("button")



function handleScroll() {
    
    const scrollY = window.scrollY;
    const windowHight = window.innerHeight;

    const documentHight = Math.max(
         document.body.scrollHeight,
         document.body.offsetHeight,
         document.documentElement.clientHeight,
         document.documentElement.scrollHeight,
         document.documentElement.offsetHeight
    )
    const scroolParcentage = (scrollY / (documentHight - windowHight) * 100)
    // const finalValue = scroolParcentage.toFixed(Math.random())    chaile fist time round kora jai
    const finalValue = scroolParcentage.toFixed(2)
    bar.style.width = `${finalValue}%`
    const roundValue = Math.floor(finalValue)
    span.innerHTML = `${roundValue}%`;
    
      let topHight =  document.documentElement.scrollTop;
      if(topHight > 100){
        btn.style.display = "Block"
      }else{
         btn.style.display = "none"
      }
    btn.addEventListener("click",function(){
        document.documentElement.scrollTop = 0;
        
    })

}




handleScroll()

window.addEventListener("scroll", handleScroll)

window.onload =  document.documentElement.scrollTop = 0





