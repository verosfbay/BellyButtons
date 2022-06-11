d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(d3.selectAll("#menu").node().id);
};

/* The first line uses the d3.selectAll() method to create an event listener. 
Whenever there is a change to the HTML body,the updatePage()function is called. 
That is, when an event occurs on the page, 
such as selection of a dropdown menu option, 
the updatePage() function is triggered.
*/ 

/* updatePage 
The function uses d3.selectAll() to select the dropdown menu, which has an id of selectOption.
The id of the dropdown menu, selectOption, is assigned the variable dropdownMenuID.
Whenever a dropdown menu option is selected, its value is assigned the variable selectedOption. Note that selectOption is the id value of the dropdown menu, while selectedOption is the option that is chosen by the user.
Each time updatePage() is triggered, the id value of the dropdown menu, as well as the value of the chosen menu option, are printed to the browser console.
*/ 