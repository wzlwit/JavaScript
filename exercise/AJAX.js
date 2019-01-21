let url = 'https://swapi.co/api/people/1';


//$.ajax()
let res;
$.ajax(url)
    .done(response => { res = response; })
    .fail(result => { res = result });


//XMLHttpRequest()
let xHR;
let err;
let request = new XMLHttpRequest();

request.addEventListener('load',() => {//this event 'load' will always execute no matter succeed or not and get a response
    xHR = request.response;
});
request.addEventListener('error',() => {
    err = request.response;
    console.error(request.response);
});

let suc, fail;
request.onreadystatechange = () => {
    //check response
    if (request.readyState === 4) {//finish or not
        if (request.status === 200) {
            suc = JSON.parse(request.response);

        } else {
            fail = request.response;
            document.body.innerHTML=fail;
            console.log("The status is: " + request.status);
        }//track the status
    }
    else {
        fail = request.response;
        console.log("The request is not done yet!")
    }//track the process
}

request.open('get', url);
request.send();


//fetch
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