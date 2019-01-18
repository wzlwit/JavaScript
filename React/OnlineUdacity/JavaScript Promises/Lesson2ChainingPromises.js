//1. Quzi1
getJSON(url)
    .then(response => {
        addSerchHeader(response.query);
        return getJSON(response.results[0]);// results[i] is also an url
    })
    .catch(() => {
        throw Erro('Search Request Error');
    })
    .then(planetDat => {
        createPlanetThumb(planetData);
    })
    .catch(e => {
        addSearchHeader('unknown');
        console.log(e);
    })



//3. Quiz: Chained Thenables
var urls = [];
async('example.json')   //if only error here, 1 3 will be logged
    .then(data => {
        urls = data.urls;     //if only error here, 1 3 will be logged
        return async(urls[0]);
    })
    .then(undefined, e => {
        console.log(1);
        return recovery();     //this return will put back on thenable
    })
    .catch(e => {
        console.log(2);
        return recovery();      //if only error here. as no error elsewhere, it will not be invoked. so nothing logged
    })
    .then(() => {
        console.log(3);
        return async(urls[1]);  //if only error here, 4 will be logged
    })
    .then(asyn, e => {           //asyn() just execute and treat the result from last promise, no promise anymore
        console.log(4);
        ahhIGiveUp();
    })



//6 Quiz: Promises with .forEach
getJson(url)
    .then(resp => {
        var seq = Promise.resolve();

        resp.results.forEach(url => {
            seq = seq.then(() => {  //as 'seq=' is used, all then must be finished before assignment, so it is serialized. otherwise, it will be parallel
                return getJSON(url)
            })
                .then(createPlanetThumb);
        });
    })
    .catch(e => {
        console.log(e);
    });



//7. Quiz: Promises with .map
getJSON(url)
    .then(resp => {
        resp.results.map(url => { //no guranttee for the order because of then()?. so the returned array would be in different order
            getJSON(url).then(createPlanetThumb);
        });
    });


Promise.all(arrayOfPromises).then(arrayOfVales => { })//values are in the same order as promises; Rejects if just one promise rejects


//use Promises.All() to map the array to keep order
getJSON(url)
    .then(resp => {
        var aryOfProm = resp.results.map(getJSON);
        return Promise.all(aryOfProm);
    })
    .then(aryOfData => {
        aryOfData.forEach(planet => {
            createPlanetThumb(planet);
        })
    })
    .catch(e => {
        console.log(e);
    })
