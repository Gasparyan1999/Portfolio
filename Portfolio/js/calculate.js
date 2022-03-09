const listCalc=document.getElementsByClassName("calc")[0]
const mon=document.getElementsByClassName("monitor")[0]

listCalc.addEventListener("click", function(e){
    if(e.target==e.currentTarget || e.target.classList[0]=="monitor")return
    const value=e.target.textContent
    if(value=="."){
        if(mon.textContent.includes("."))return
    }
    if(value==0){
        if(mon.textContent.length==0)return
    }
    if(value=="SQRT"){
        mon.textContent= Math.sqrt(+mon.textContent)
    }
    else if(value=="AC"){
        mon.textContent=0
    }
    if(value=="x" || value=="/" || value=="+" || value=="-" || value=="%" || value=="=") {
        let res=""
        let count=""
        let alert=0
     if(mon.textContent.includes("x") || mon.textContent.includes("/") || mon.textContent.includes("+") || mon.textContent.includes("-") || mon.textContent.includes("%")){
        
         for(let i=0;i<mon.textContent.length;i++){
            if(mon.textContent[i]!="+" && mon.textContent[i]!="-" && mon.textContent[i]!="/" && mon.textContent[i]!="x" && mon.textContent[i]!="%"){
                count=count+mon.textContent[i]
            }
            else if(mon.textContent[i]=="x"){
                 alert=1
                 res=count
                 count=0
            }
            else if(mon.textContent[i]=="/"){
                alert=2
                res=count
                 count=0
            }
            else if(mon.textContent[i]=="+"){
                alert=3
                res=count
                 count=0
            }
            else if(mon.textContent[i]=="-"){
                alert=4
                res=count
                 count=0
            }
            else if(mon.textContent[i]=="%"){
                alert=5
                res=count
                 count=0
            }    
     }
  
     }
     else{
        mon.innerText +=value
     }
     if(alert==1){
         const result= +res * +count
         if(value!="=") mon.innerText =result + `${value}`
         else mon.innerText =result
         
     }
     else if(alert==2){
        const result= +res / +count
        if(value!="=") mon.innerText =result + `${value}`
        else mon.innerText =result
     }
     else if(alert==3){
        const result= +res + +count
        if(value!="=") mon.innerText =result + `${value}`
         else mon.innerText =result
     }
     else if(alert==4){
        const result= +res - +count
        if(value!="=") mon.innerText =result + `${value}`
        else mon.innerText =result

     }
     else if(alert==5){
        const result= (+res * +count)/100
        if(value!="=") mon.innerText =result + `${value}`
        else mon.innerText =result

     }
    

}
else{
    if(value!="SQRT" && value!="AC") mon.innerText +=value

}
if(mon.textContent[0]==0 && mon.textContent.length>1 && !mon.textContent.includes(".")){
    mon.textContent=  mon.textContent.slice(1)
  }
})