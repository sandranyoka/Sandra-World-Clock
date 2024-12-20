function updateTime(){  
    let HarareElement =document.querySelector("#Harare");
    let HarareDateElement =HarareElement.querySelector(".date");
    let HarareTimeElement =HarareElement.querySelector(".time");
    let HarareTime =moment().tz("Africa/Harare");
    HarareDateElement.innerHTML=HarareTime.format("MMMM Do YYYY");
    HarareTimeElement.innerHTML=HarareTime.format("h:mm:ss [<small>]A[</small>]");


     let ParisElement= document.querySelector("#Paris");
        let ParisDateElement = ParisElement.querySelector(".date");
        let ParisTimeElement = ParisElement.querySelector(".time");
        let ParisTime = moment().tz("Europe/Paris");
        ParisDateElement.innerHTML = ParisTime.format(" MMMM Do YYYY");
        ParisTimeElement.innerHTML = ParisTime.format(
            "h:mm:ss [<small>]A[</small>]"
            );
    }


function updateCity(event){
        let cityTimeZone=event.target.value;
        if(cityTimeZone ==="current"){
            cityTimeZone=moment.tz.guess();

        }
        let cityName=cityTimeZone.replace("_","").split("/")[1];
        let cityTime=moment().tz(cityTimeZone);
        let citiesElement=document.querySelector("#cities");
        citiesElement.innerHTML= `
         <div class="city">
        <div>
        <h2>${cityName}</h2>
 <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
         </div>
         `;


     }
      updateTime();
            setInterval(updateTime, 1000);

            let citiesSelectElement=document.querySelector("#city");
            citiesSelectElement.addEventListener("change", updateCity);
    
   
