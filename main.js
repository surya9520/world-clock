const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    
];
let gmt=true
let tf=true;
let tw=false
let ind=false
let chin=false
let ity=false
let us=false
// <==================
// HOUR
// ==================>
      let twenty=()=>{
        a=document.getElementById("twenty")
        a.style.backgroundColor="#000"
        a.style.color="#fff"
        b=document.getElementById("twelve")
        b.style.backgroundColor="#fff"
        b.style.color="#000"
        tw=false
        tf=true
      }
    let twelve=()=>{
        a=document.getElementById("twenty")
        a.style.backgroundColor="#fff"
        a.style.color="#000"
        b=document.getElementById("twelve")
        b.style.backgroundColor="#000"
        b.style.color="#fff"
        tw=true;
        tf=false
    }
    let india=()=>{
        setTimeout(()=>{document.getElementById("heading").innerHTML="INDIA"},100)
        ind=true
        chin=false
        ity=false
        us=false
        gmt=false
    }
    let china=()=>{
        setTimeout(()=>{document.getElementById("heading").innerHTML="CHINA"},100)
        ind=false
        chin=true
        ity=false
        us=false
        gmt=false
    }
    let itly=()=>{
        setTimeout(()=>{document.getElementById("heading").innerHTML="ITALY"},100)
        ind=false
        chin=false
        ity=true
        us=false
        gmt=false
    }
    let usa=()=>{
        setTimeout(()=>{document.getElementById("heading").innerHTML="USA"},100)
        ind=false
        chin=false
        ity=false
        us=true
        gmt=false
    }
   
   
setInterval(()=>{
let d= new Date();
let hour=document.getElementById("hour")
let minute=document.getElementById("min")
let sec=document.getElementById("sec")
let pm=document.getElementById("pm")

// <==================
// GMT
// ==================>
if(gmt===true){
hour.innerHTML=d.getUTCHours();
 let minute=document.getElementById("min")
 minute.innerHTML=d.getUTCMinutes()
 sec.innerHTML=d.getUTCSeconds()
}
// <==================
// INDIA
// ==================>
 else if(ind===true){
let x=new Date().toLocaleString("en-us",{timeZone:"Asia/Kolkata",hourCycle:"h24",timeStyle:"medium"})
let y=new Date().toLocaleString("en-us",{timeZone:"Asia/Kolkata",hourCycle:"h12",timeStyle:"medium"})

    if(tf===true){
    let hr=x[0]+x[1]
    hour.innerHTML=hr;
    }
    else if(tw===true){
        if(y[1]==":"){
            let h=0
            let hr=h+y[0]
         hour.innerHTML=hr;
        }
        else{
        let hr=y[0]+y[1]
        hour.innerHTML=hr;}
    }
    let minin=x[3]+x[4]
    minute.innerHTML=minin

    let secin=x[6]+x[7]
    sec.innerHTML=secin

    if(y[1]===":"){
        let pmin=y[8]+y[9]
        pm.innerHTML=pmin
      }
      else{
        let pmin=y[9]+y[10]
        pm.innerHTML=pmin
      }
}
// <==================
// CHINA
// ==================>
else if(chin===true){
    let x=new Date().toLocaleString("en-us",{timeZone:"Asia/Hong_Kong",hourCycle:"h24",timeStyle:"medium"})
    let y=new Date().toLocaleString("en-us",{timeZone:"Asia/Hong_Kong",hourCycle:"h12",timeStyle:"medium"})
    if(tf===true){
    let hr=x[0]+x[1]
    hour.innerHTML=hr;
    }
    else if(tw===true){
        if(y[1]==":"){
            let h=0
            let hr=h+y[0]
         hour.innerHTML=hr;
        }
        else{
        let hr=y[0]+y[1]
        hour.innerHTML=hr;}
    }
    let minc=x[3]+x[4]
    minute.innerHTML=minc

    let secc=x[6]+x[7]
    sec.innerHTML=secc

    if(y[1]===":"){
        let pmc=y[8]+y[9]
        pm.innerHTML=pmc
      }
      else{
        let pmc=y[9]+y[10]
        pm.innerHTML=pmc
      }
}

// <==================
// ITALY
// ==================>
else if(ity===true){
    let x=new Date().toLocaleString("en-us",{timeZone:"Europe/Rome",hourCycle:"h24",timeStyle:"medium"})
    let y=new Date().toLocaleString("en-us",{timeZone:"Europe/Rome",hourCycle:"h12",timeStyle:"medium"})
    if(tf===true){
    let hr=x[0]+x[1]
    hour.innerHTML=hr;
    }
    else if(tw===true){
        if(y[1]==":"){
            let h=0
            let hr=h+y[0]
         hour.innerHTML=hr;
        }
        else{
        let hr=y[0]+y[1]
        hour.innerHTML=hr;}
    }
    let mini=x[3]+x[4]
    minute.innerHTML=mini

    let seci=x[6]+x[7]
    sec.innerHTML=seci

    if(y[1]===":"){
        let pmi=y[8]+y[9]
        pm.innerHTML=pmi
      }
      else{
        let pmi=y[9]+y[10]
        pm.innerHTML=pmi
      }
      alert(z)
}
// <==================
// USA
// ==================>

else if(us===true){
    let x=new Date().toLocaleString("en-us",{timeZone:"America/New_York",hourCycle:"h24",timeStyle:"medium"})
    let y=new Date().toLocaleString("en-us",{timeZone:"America/New_York",hourCycle:"h12",timeStyle:"medium"})
    if(tf===true){
    let hr=x[0]+x[1]
    hour.innerHTML=hr;
    }
    else if(tw===true){
        if(y[1]==":"){
            let h=0
            let hr=h+y[0]
         hour.innerHTML=hr;
        }
        else{
        let hr=y[0]+y[1]
        hour.innerHTML=hr;}
    }
    let minu=x[3]+x[4]
    minute.innerHTML=minu

    let secu=x[6]+x[7]
    sec.innerHTML=secu

    if(y[1]===":"){
        let pmu=y[8]+y[9]
        pm.innerHTML=pmu
      }
      else{
        let pmu=y[9]+y[10]
        pm.innerHTML=pmu
      }
}

// <==================
// pm
// ==================>
  
  
// <==================
// DAY
// ==================>
let day=document.querySelectorAll(".day")
day.forEach((elem,idx)=>{
    day[idx].innerHTML=days[d.getDay()]
})
// <==================
// DAY
// ==================>
let month=document.querySelectorAll(".month")
month.forEach((elem,idx)=>{
    month[idx].innerHTML=months[d.getMonth()]
})
// <==================
// DATE
// ==================>
let dat=document.querySelectorAll(".date")
dat.forEach((elem,idx) => {
    dat[idx].innerHTML=d.getDate()
});
// <==================
// YEAR
// ==================>
let year=document.querySelectorAll(".year")
year.forEach((elem,idx)=>{
    year[idx].innerHTML=d.getFullYear()
})
},100)
// <==========================
// Function for mm/dd/yyyy btn
// ==========================>
let mm=()=>{
    document.getElementById("mmm").style.display="inline-block";
    document.getElementById("ddd").style.display="none";
    let a=document.getElementById("mm")
    a.style.backgroundColor="#000"
    a.style.color="#fff"
    let b=document.getElementById("dd")
    b.style.backgroundColor="#fff"  
    b.style.color="#000"
}
// <==========================
// Function for mm/dd/yyyy btn
// ==========================>
let dd=()=>{
    document.getElementById("ddd").style.display="inline-block"
    document.getElementById("mmm").style.display="none"
    let a=document.getElementById("dd")
    a.style.backgroundColor="#000"
    a.style.color="#fff"
    let b=document.getElementById("mm")
    b.style.backgroundColor="#fff"
    b.style.color="#000"
}
let x=new Date().toLocaleString("en-us",{timeZone:"America/New_York",hourCycle:"h24",timeStyle:"medium"})
let hell=x[0]+x[1]
console.log(x)
console.log(hell)