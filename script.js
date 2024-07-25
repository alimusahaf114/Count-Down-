const endDate = "26 july 2024 10:00 PM" ;
document.getElementById("end-date").innerText = endDate ;
const inputs = document.querySelectorAll("input");



function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;
    console.log(diff);
    // into days 
    inputs[0].value = Math.floor(diff/3600/24);
    // into hours
    inputs[1].value= Math.floor(diff / 3600 ) % 24 ;
    // into minuts
    inputs[2].value = Math.floor(diff/60)%60;
    // into seconds
    inputs[3].value = Math.floor(diff)%60;
    
}
// clock();

setInterval(()=>{
    clock();
} , 1000)