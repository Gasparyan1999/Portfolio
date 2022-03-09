const col=document.getElementsByClassName("color")[0]
const radius=document.getElementsByClassName("range")[0]
const width=document.getElementsByClassName("widthrange")[0]
const elem=document.getElementsByClassName("object")[0]
const sect=document.getElementsByClassName("text")[1]
elem.style.cssText=`background-color:orange;width:200px;height:200px;margin:20px` 

col.oninput = () => {
    elem.style.cssText=`background-color:${col.value};border-radius:${radius.value}px;width:${width.value}px;height:${width.value}px`
    sect.innerText=`width:${width.value}px;
                height:${width.value}px;
                background-color:${col.value};
                border-radius:${radius.value}px`
}
radius.oninput = () =>{
    elem.style.cssText=`background-color:${col.value};border-radius:${radius.value}px;width:${width.value}px;height:${width.value}px`
    sect.innerText=`width:${width.value}px;
                height:${width.value}px;
                background-color:${col.value};
                border-radius:${radius.value}px`
}
width.oninput = () =>{
    elem.style.cssText=`background-color:${col.value};border-radius:${radius.value}px;width:${width.value}px;height:${width.value}px`
    sect.innerText=`width:${width.value}px;
                height:${width.value}px;
                background-color:${col.value};
                border-radius:${radius.value}px`
}

