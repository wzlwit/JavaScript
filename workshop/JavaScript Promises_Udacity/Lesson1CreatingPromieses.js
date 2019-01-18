//first promise:
function wait(ms) {
    return new Promise(function (resolve) {
        console.log(this);//globle object, ES2015 will be different
        window.setTimeout(function () {
            resolve();
        }, ms);
    });
};

var milliseconds = 2000;
wait(milliseconds).then(finish);

function finish() {
    var completion = document.querySelector('.completion');
    completion.innerHTML = "Complete after " + milliseconds + "ms.";
};