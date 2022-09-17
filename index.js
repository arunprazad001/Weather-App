function getData(){
    let city=document.querySelector("#query").value;    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7999bca05cdc8c89f2735d94db3d66b6`;
    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
        // console.log(res);
        append(res);
    })
    
    }
    
    function append(data){
        let url=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
        let Cont=document.querySelector("#container");
        Cont.innerHTML="";
        let h2=document.createElement("h1");
        h2.innerText=data.name;
        let temp=document.createElement("p");
        temp.innerText=`Temp:- ${data.main.temp}`
        let max_temp=document.createElement("p");
        max_temp.innerText=`Max Temp:- ${data.main.temp_max}`
        let min_temp=document.createElement("p");
        min_temp.innerText=`Min Temp:- ${data.main.temp_min}`
        let Wind=document.createElement("p");
        Wind.innerText=`Wind Speed:-${data.wind.speed}`;
        let Clouds=document.createElement("p");
        Clouds.innerText=`Clouds:-${data.clouds.all}`;
        let Sunrise=document.createElement("p");
        Sunrise.innerText=`Sunrise:-${data.sys.sunrise}`;
        let Sunset=document.createElement("p");
        Sunset.innerText=`Sunset:-${data.sys.sunset}`;
    
    
        Cont.append(h2,temp,max_temp,min_temp,Wind,Clouds,Sunrise,Sunset);
    
        let iframe=document.getElementById("gmap_canvas");
        iframe.src=url;
    }
    
    
    function getLocation(){
        navigator.geolocation.getCurrentPosition(success);
    
        function success(pos) {
            const crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
            getWeatherOnLocation(crd.latitude,crd.longitude);
           
          }
    }
    
    
    
    function getWeatherOnLocation(lat,lon){
        let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=7999bca05cdc8c89f2735d94db3d66b6`;
        fetch(url).then(function(res){
            return res.json();
        }).then(function(res){
            // console.log(res);
            append(res);
        });
    }

    // async function  getForecast(){
    //     let city=document.querySelector("#query").value;  
    //     // let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=7999bca05cdc8c89f2735d94db3d66b6`;
    //     let url=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=d6e58469041d92e3a378bc527b2567ec`;
    //     let res=await fetch(url);
    //     let list=await res.json();
    //     console.log(list);
    //     }
    