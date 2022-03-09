const left=document.getElementsByClassName("left")[0]
const right=document.getElementsByClassName("right")[0]


const info=document.getElementsByClassName("info")[0]
const calc=document.getElementsByClassName("calccon")[0]
const css=document.getElementsByClassName("css")[0]

let active=0
function slide(){
    info.style.transform = `translateX(${-1 * active * 100}%)`
    calc.style.transform = `translateX(${-1 * active * 100}%)`
    css.style.transform = `translateX(${-1 * active * 100}%)`
}
left.addEventListener("click",function(e){
    active--
    if(active==-1)active=2
    slide()
})
right.addEventListener("click", function(e){
    active++
    if(active==3)active=0
    slide()
})

const cv=document.getElementsByClassName("cv")[0]
const calculate=document.getElementsByClassName("calculate")[0]
const compilator=document.getElementsByClassName("compilator")[0]
cv.addEventListener("click",function(e){
    active=0
    slide()
})
calculate.addEventListener("click",function(e){
    active=1
    slide()
})
compilator.addEventListener("click",function(e){
    active=2
    slide()
})