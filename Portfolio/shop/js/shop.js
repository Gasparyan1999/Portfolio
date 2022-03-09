const left=document.getElementsByClassName("left")[0]
const right=document.getElementsByClassName("right")[0]
const list=document.getElementsByClassName("img")
let active=2
function slide(){

    for(let i=0;i<list.length;i++){
        list[i].style.transform=`translateX(${-1 * active * 100}%)`
    }
}
slide()

left.addEventListener("click",function(){
    active--
    if(active==-1)active=list.length-3
    slide()
})
right.addEventListener("click",function(){
    active++
    if(active==list.length-2)active=0
    slide()
})
const dots=document.getElementsByClassName("dots")[0]
let x=0
for(let i=1;i<list.length-1;i++){
    const dot=document.createElement("div")
    dot.id=x
    x++
    dots.appendChild(dot)
}
dots.addEventListener("click",function(e){
    if(e.target==e.currentTarget)return
    active=e.target.id
    slide()
})

const burger=document.getElementsByClassName("burger")[0]
let burgerbool=true
burger.addEventListener("click",function(e){
    if(burgerbool){
    document.getElementsByClassName("burgermenu")[0].style.cssText="display:block"
    burgerbool=!burgerbool
    }
    else{
        document.getElementsByClassName("burgermenu")[0].style.cssText="display:none"
        burgerbool=!burgerbool
    }
})

const mediadots=document.getElementsByClassName("mediadots")[0]
const mediapic=document.getElementsByClassName("mediaimg")
let mediaactive=0
for(let i=0;i<mediapic.length;i++){
    const mediadot=document.createElement("div")
    mediadot.id=i
    mediadots.appendChild(mediadot)
}

function mediaslide(){
    for(let i=0;i<mediapic.length;i++){
        mediapic[i].style.transform=`translateX(${-1 * mediaactive * 100}%)`
    }
}

mediadots.addEventListener("click",function(e){
    if(e.target==e.currentTarget)return
    mediaactive=e.target.id
    mediaslide()
})
document.getElementsByClassName("medialeft")[0].addEventListener("click",function(){
    mediaactive--
    if(mediaactive==-1)mediaactive=4
    mediaslide()
})
document.getElementsByClassName("mediaright")[0].addEventListener("click",function(){
    mediaactive++
    if(mediaactive==5)mediaactive=0
    mediaslide()
})
