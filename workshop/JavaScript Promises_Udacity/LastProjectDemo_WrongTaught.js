/* 
this demo will show that:
it is still serialized instead of parallel
*/

let url1 = 'https://swapi.co/api/people/1';
let url2 = 'https://swapi.co/api/people/2';
let url3 = 'https://swapi.co/api/people/3';
let url4 = 'https://swapi.co/api/people/4';
let url5 = 'https://swapi.co/api/people/5';
//free API for test


getJSON(url1).then(createPlanetThumb)
    .then(function () {
        return getJSON(url2).then(createPlanetThumb);
    })
    .then(function () {
        return getJSON(url3).then(createPlanetThumb);
    })
    .then(function () {
        return getJSON(url4).then(createPlanetThumb);
    })
    .then(function () {
        return getJSON(url5).then(createPlanetThumb);
    })


function getJSON(url) {
    return get(url).then(function (response) {
        return response.json();
    });
}

/**
   * XHR wrapped in a promise
   * @param  {String} url - The URL to fetch.
   * @return {Promise}    - A Promise that resolves when the XHR succeeds and fails otherwise.
   */
function get(url) {
    return fetch(url);
}

/**
   * Helper function to create a planet thumbnail.
   * @param  {Object} data - The raw data describing the planet.
   */
function createPlanetThumb(data) {
    console.log(data); //modify this function for test
}

