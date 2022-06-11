const url = "https://api.spacexdata.com/v2/launchpads";
// In the first line, the URL to the SpaceX is defined.

d3.json(url).then(receivedData => console.log(receivedData));
/* In the second line, d3.json() method places a call to SpaceX's API, 
retrieves the data, and prints it to the browser console */ 

/* const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(data => console.log(data)); */

/* d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0])); */

// How would Roza access the latitude of the Vandenberg Airforce Base?
/*
d3.json(url).then(spaceXResults =>
console.log(spaceXResults[0].location.latitude));
*/ 
