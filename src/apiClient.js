//ES6 class construction
class ApiClient {

  constructor(printer) {
    //printer stored within ApiClient the response from the api can be printed directly
    this.printer = printer
    //targetUrl for the location that the XMLHttpRequest will be sent
    this.targetUrl = undefined;
    //the data retrieved from the response
    this.retrievedData = undefined;
  }

  buildUrl(location) {
    //Builds a url with location interpolated within it (using ES6 features)
    this.targetUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=[INSERT API KEY]`;
  }

  getWeatherData() {
    //Assigning a new instance of an XMLHttpRequest that can be used to make http
    //requests. Once successfully sent it will store the JSON as the body.
    //It will also store the HTTP status of the result.
    var req = new XMLHttpRequest();
    //Used to initialize the request, here the method is 'GET' and the url is to
    //be determined by the ApiClient's targetUrl attribute.
    //An asynchronous request is made, can set a third argument to false to make
    //the request synchronous.
    req.open("GET", this.targetUrl);
    //Sends the request, in this case asynchronously as specified above.
    //Send method can take an argument that would be the body of the request,
    //this could be used in a post request to send data.
    //We are however only interested in getting information here.
    req.send();
    //The callback of a request to determine what to do with the data retrieved.
    req.onload = () => {
      //Checks the state of the XMLHttpRequest.
      // 4 -> done
      // 3 -> loading
      // 2 -> header is available
      // 1 -> opened
      // 0 -> unopened
      if(req.readyState === 4) {
        //Checks the HTTP status and determines whether it is OK.
        if (req.status === 200) {
          //If HTTP status is OK, JSON.parse turns the JSON data into a
          //JavaScript object. This is then the res (response).
          var res = JSON.parse(req.responseText);
          //Assignes attribute to the response.
          this.retrievedData = res;
          //Calls the print function on the printer object the ApiClient holds.
          this.printer.print(res);
        } else {
          //If the HTTP status is not OK, the printer is told to print an error.
          this.printer.print("Error");
        }
      }
    }
  }

}
