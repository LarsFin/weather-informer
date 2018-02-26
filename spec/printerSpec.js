describe("Printer", () => {
  var testprinter
  var fakedata = { name: "testname",
    sys: { country: "testcountry"},
    weather: [{
      description: "testDescription"
    }],
    main: {
      temp: "testTemp", temp_min: "testMin", temp_max: "testMax"
    },
    wind: {
      speed: "testSpeed"
    }
  }

  beforeEach( () => {
    testPrinter = new Printer();
  });

  describe("Instantiation", () => {

    it("Should be initialized with an empty text attribute", () => {
      expect(testPrinter.text.length).toEqual(0);
    })

  })

  describe("format", () => {

    it("Should return undefined if the data passed in is undefined", () => {
      expect(testPrinter.format(undefined)).toBe(undefined);
    })

    it("If data was a 404 should set printers text to error message", () => {
      testPrinter.format("Error")
      expect(testPrinter.text).toEqual('<i style="color:red">I\'m afraid the city you searched couldn\'t be found, please try again.</i>')
    })

    it("The format function can return a string of HTML with the correct data within it", () => {
      testPrinter.format(fakedata)
      expect(testPrinter.text).toEqual(
        '<b style="font-size:22px">testname, testcountry</b><br><hr>Weather: testDescription<br>Temp: testTemp°C<br>Temp range: testMin° ~ testMax°C<br>Wind speed: testSpeedkm/h'
      )
    })

  })

});
