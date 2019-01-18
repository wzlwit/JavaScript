var login = false;

document.onload = welcome();
window.setInterval(welcome, 1000);

// this function will validate email and password inputs;
function validate() {
    var errorDiv = document.getElementById("error");

    var email = document.loginFM.emailInput;
    var pwd = document.loginFM.pwdInput;


    errorDiv.innerHTML = "";//clear the content before showing the validation message

    //validate the form input
    var emailMatched = email.value.match(/(^\w+[-_.]*\w+)@([\w+-_.]*\w+).\w{3}$/);
    var pwdMatched = pwd.value.length >= 6;
    //var pwdMatched = pwd.value.match(/\w{6,}/) //this way only allow word character for password;
    if (!emailMatched || !pwdMatched) {
        errorDiv.innerHTML = "Error! Please complete the form!<br>";
        login = false;
    }
    if (!emailMatched) {
        errorDiv.innerHTML += "* Email address must be filled in!<br>";
        document.loginFM.emailInput.style.borderColor = "red";
    }
    if (!pwdMatched) {
        errorDiv.innerHTML += "* Password length must be at least 6 characters!";
    }
    if (pwdMatched && emailMatched) {
        welcome();
        forecast();
        login = true;
    }
    email.style.borderColor = emailMatched ? "initial" : "red";
    pwd.style.borderColor = pwdMatched ? "initial" : "red";

    document.getElementById("weather-list").innerHTML = ""; //after successfully login, may check again. so the content must be cleared

    return false; //disable submit for this project
}

var result; //to store the result of request for console track;
var resp;   //to track response


//this fuction will send a request to get forecast date
function forecast() {

    //the following is XMLHttpRequest way
    /*     
        var request = new XMLHttpRequest();
     
        //make a request and send it
        request.open("get", "http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=54QAjmuZN1YGEd7CeDOpnOSc9zlOBGlq&metric=true")
        request.send();
    
        request.onreadystatechange = function () {
            //check response
            if (request.readyState === 4) {//finish or not
                if (request.status === 200) {
                    result = JSON.parse(request.response);
                    list(result);
                } else { console.log("The status is: " + request.status); }//track the status
            }
            else { console.log("The request is not done yet!") }//track the process
        } 
        
    */

    //fetch() way to get the data and convert the response to JSON
    fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/56186?apikey=54QAjmuZN1YGEd7CeDOpnOSc9zlOBGlq&metric=true")
        .then(response => {
            resp = response;
            return response.json();
        })
        .then(data => {
            result = data;
            list(result);
        })
        .catch(e => {
            console.error(Date() + "\n something is wrong");
            console.error(e);
        }
        );


    //display the forecasts
    function list(obj) {
        var ul = document.getElementById("weather-list");
        var forecast = obj.DailyForecasts;

        ul.innerHTML = "<p>Weather in Montreal for the next 5 days:</p><br>";
        for (let i = 0; i < forecast.length; i++) {
            let max = forecast[i].Temperature.Maximum;
            let min = forecast[i].Temperature.Minimum;

            ul.innerHTML += `<li>
            <a href=${forecast[i].Link}>${forecast[i].Date}<a/>
            <p>Max: ${max.Value}${max.Unit} Min: ${min.Value}${min.Unit}</p>
            <p>Day: ${forecast[i].Day.IconPhrase}</p>
            <p>Night: ${forecast[i].Night.IconPhrase}</p>
            </li>`;
        }
    }
}

//show login message, time and date;
function welcome() {
    var now = Date();
    var hour = now.slice(16, 18) * 1;
    var time = hour >= 12 ? `${hour - 12}${now.slice(18, 24)} PM` : `${hour}${now.slice(18, 24)} AM`;
    var noon = hour >= 12 ? "Afternoon" : "Morning"
    var topMsg = login ? `<p>Today's message: <span>"Login! Good ${noon}!"</span></p>` : `<p>Today's message: <span>"Not logged in!"</span></p>`;
    var msgInner = document.getElementById("message");

    msgInner.innerHTML = "";
    msgInner.innerHTML += `
        ${topMsg}    
        <p>Today's date: ${now.slice(0, 15)}</p>
        <p>Time now: ${time}</p>
        `;
}
