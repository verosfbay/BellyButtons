d3.json("samples.json").then(function(data){
    console.log("hello");
});

/* Roza wants to extract only the wfreq, 
or the weekly belly button washing frequency, of each person into a new array. */ 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});


/* Roza now wants to sort the wfreq array in descending order. */ 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
}); 

/*Roza now wants to delete null values from the sorted wfreq array. */
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>
person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=
null);
    console.log(filteredWfreq);
});


/* With the following code, 
we can display the metadata of any individual from the dataset: */ 

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});


