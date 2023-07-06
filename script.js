const endTime = "1 January 2024 12:00 am";

document.getElementById("end-date").innerText=endTime;
const inputs =  document.querySelectorAll("input")


function clock(){
    const end = new Date(endTime);
    const start = new Date();
    const diff = (end-start)/1000;// divide by 1000 to convert milliseconds into seconds

    if(diff<0){ // to avoid negative value
        return;
    }
    // convert diff into days
    inputs[0].value = Math.floor(diff/3600/24);

    // convert diff into hours and excluding the hours which are includes in days
    inputs[1].value=Math.floor(diff/3600)%24;

    // convert diff into minutes
    inputs[2].value= Math.floor(diff/60)%60;

    // convert diff into seconds
    inputs[3].value= Math.floor(diff)%60;
}

clock();

setInterval(
    ()=>{
         clock()
    },
    1000
)
