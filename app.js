
var age = prompt("yoshingizni kiriting")
  
let age1 = 18
let age2 = 50
let age3 = 60
let age4 = 150

if(age <= age1){
    alert("siz o'qishingiz kerak")
} else if ( age <= age2 ){
    alert("siz ishlashingiz kerak")
} else{
    if ( age <= age3){
      alert("siz yaqinda pensiya olasiz")
    } else if ( age <= age4 ){
        alert("siz tirik bo'lsangiz pensiya olasiz")
    } else {
        alert("sizda nimadur noto'g'ri ketdi")
    }
}
   