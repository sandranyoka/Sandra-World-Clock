function updateTime(){  
    let HarareElement =document.querySelector("#Harare");
    let HarareDateElement =HarareElement.querySelector(".date");
    let HarareTimeElement =HarareElement.querySelector(".time");
    let HarareTime =moment().tz("Africa/Harare");
    HarareDateElement.innerHTML=HarareTime.format("MMMM Do YYYY");
    HarareTimeElement.innerHTML=HarareTime.format("h:mm:ss [<small>]A[</small>]");





    let LosAngelesElement= document.querySelector("#Los-Angeles");
        let LosAngelesDateElement = LosAngelesElement.querySelector(".date");
        let LosAngelesTimeElement = LosAngelesElement.querySelector(".time");
        let LosAngelesTime = moment().tz("America/Los-Angeles");
        LosAngelesDateElement.innerHTML = LosAngelesTime.format(" MMMM Do YYYY");
        LosAngelesTimeElement.innerHTML = LosAngelesTime.format(
            "h:mm:ss [<small>]A[</small>]"
            );
    }
            updateTime();
            setInterval(updateTime, 1000);

   
