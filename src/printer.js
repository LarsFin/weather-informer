//ES6 class construction.
class Printer {

  constructor() {
    //the text that the printer stores.
    this.text = "";
  }
  //formats the data into a HTML string in a user-friendly format.
  format(data) {
    //If the data passed in is undefined the function immediately returns and
    //is cut short.
    if (data === undefined) {
      return;
    //If the Error string is passed in the printer knows to print an error
    //message.
    } else if (data === "Error") {
      //This error message is not very good as there could be other reasons for
      //an error having been caused than the city not being found. e.g; internet
      //connection breaks.
      this.text = '<i style="color:red">I\'m afraid the city you searched couldn\'t be found, please try again.</i>'
      //return of course cuts off the rest of the function from being carried
      //out.
      return;
    }
    //Degrees character defined. This is to prevent encoding mismatch as HTML
    //and JavaScript use different character encodings.
    var degrees = String.fromCharCode(176);
    //Empty formatted data variable.
    var fdata = "";
    //HTML lines as strings are added to the variable with the appropriate data
    //interpolated using ES6.
    fdata += `<b style="font-size:22px">${data.name}, ${data.sys.country}</b><br>`;
    fdata += `<hr>`
    fdata += `Weather: ${data.weather[0].description}<br>`;
    fdata += `Temp: ${data.main.temp}${degrees}C<br>`;
    fdata += `Temp range: ${data.main.temp_min}${degrees} ~ ${data.main.temp_max}${degrees}C<br>`;
    fdata += `Wind speed: ${data.wind.speed}km/h`
    //Once all the data has been formatted into one string with HTML and the
    //specified pieces of data within it. The text of the printer is set to the
    //string to be used by the print function later.
    this.text = fdata
  }

  //Displays the text of the printer on the static page.
  print(data) {
    //Calls format on the data passed in.
    this.format(data);
    //Gets the element with the matching id and sets it's html content to that
    //of the printer's current text attribute.
    //The document object is simply the HTML document loaded into the browser.
    document.getElementById("weatherInfo").innerHTML = this.text;
  }

}
