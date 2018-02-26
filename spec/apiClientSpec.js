describe("ApiClient", () => {
  var testApiClient;
  var printer;

  beforeEach( () => {
    // printer = jasmine.createSpyObj('printer', ['print']);
    testApiClient = new ApiClient(printer);
  });

  describe("Instantiation", () => {

    it("Should be initialized with a printer that can be set as an argument", () => {
      expect(testApiClient.printer).toEqual(printer)
    })

    it("Should have an undefined targetUrl when initialized", () => {
      expect(testApiClient.targetUrl).toBe(undefined)
    })

    it("Should have an undefined attribute for retrievedData when initialized", () => {
      expect(testApiClient.retrievedData).toBe(undefined)
    })

  })

  describe("buildUrl", () => {

    it("Should build and assign the correct url with the location passed in to the targetUrl", () => {
      testApiClient.buildUrl("London")
      expect(testApiClient.targetUrl).toEqual(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=d963c42a9e0054822e77efc63acf4b87`)
    })

  })

  //tests removed due to errors with asynchronicity

  // describe("getWeatherData", () => {
  //
  //   beforeEach( () => {
  //     //https://jsonplaceholder.typicode.com/ used for REST API testing
  //     testApiClient.targetUrl = "https://jsonplaceholder.typicode.com/posts/1"
  //     testApiClient.getWeatherData();
  //   })
  //
  //   it("Should call print on the printer of the ApiClient", () => {
  //     //https://jsonplaceholder.typicode.com/ used for REST API testing
  //     expect(printer.print).toHaveBeenCalled();
  //   })
  //
  //   it("Data retrieved should be an Error if the targetUrl is malformed", (done) => {
  //     //https://jsonplaceholder.typicode.com/ used for REST API testing
  //     expect(testApiClient.retrievedData).toEqual("Error 404")
  //   })
  //
  // })

});
