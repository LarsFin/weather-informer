//Allows the use of Event listeners that are triggered by certain interactions
//with the HTML document.
document.addEventListener("DOMContentLoaded", (event) => {

  //Adds a click trigger which has a function that handles the response.
  document.getElementById("getWeather").addEventListener("click", () => {
    //Checks the value of the locationField to determine whether it is empty or
    //not.
    if(document.getElementById("locationField").value === "") {
      //If empty it is immediately returned and the button appears unresponsive.
      return;
    }
    //Calls buildUrl on the document api client, the contents of the
    //locationField are passed in.
    apic.buildUrl(document.getElementById("locationField").value);
    //The document api attempts to get the weather data with the newly
    //established URL.
    apic.getWeatherData();
    //The locationField is emptied.
    document.getElementById("locationField").value = "";
  });

  //Another click trigger, for the savePDF button this time however.
  document.getElementById("savePDF").addEventListener("click", () => {
    //Checks whether the weatherInfo is empty.
    if (document.getElementById("weatherInfo").innerHTML === "") {
      //If empty the function is returned and cut off.
      //I wished to do the same with an error message aswell.
      return;
    }
    //Creates new instance of jsPDF that stores attributes which are interpreted
    //to create a resulting PDF document.
    var doc = new jsPDF();
    //The jsPDF instance can take HTML and interpret it into the PDF document
    //aswell.
    doc.fromHTML(document.getElementById("weatherInfo"), 12, 16);
    //Saves the document with a filename of the city searched and the date
    //following so users can easily tell apart two pdf documents reporting the
    //weather from the same city.
    doc.save(`${apic.retrievedData.name} ${new Date()}.pdf`);
  })

});
