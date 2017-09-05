var maxNumberOfCalls = 5;
var numberOfCallsProcessing = 0;
function distance(p1, p2, cb) {
    distanceHandler(p1, p2, cb)
}

function distanceHandler(p1, p2, cb) {
    if (numberOfCallsProcessing < maxNumberOfCalls) {
        numberOfCallsProcessing++;
        setTimeout(() => {
            /*
             * Api call here
             * Added setTimeout in this, just make it feel like api call
             */
            numberOfCallsProcessing--;
            cb(p2 - p1);
        }, Math.random()*10000);
    } else {
        setTimeout(()=>{
            distanceHandler(p1, p2, cb);
        }, 0)
    }
}


// call for the distance function (100 times, you can change the number)
for (let i = 0; i < 15; i++) {
    distance(i, i + 1, function (resp) {
        console.log(i, resp);
    });
}
