# JavaScript-Weather-Informer
User Stories;

1 User can input city - **priority: 5** complete
```
As a user,
So that I can choose a variety of cities,
I wish to be able to input a city of my choice.
```

2 User can get weather information of city - **priority: 6** complete
```
As a user,
So that I can plan a business trip to a city,
I wish to be able to view the current weather of the city.
```

3 User can view weather information in user-friendly format - **priority: 4** complete
```
As a user,
So that I can quickly get the information I need,
I wish to view the weather details in a user friendly format
```

4 User receives PDF document with weather information - **priority: 2** complete
```
As a user,
So I can have the information in an easily portable file,
I wish to have the formatted information stored in a PDF file.
```

5 User can see a nice UI on the website - **priority: 1**
```
As a user,
So I can enjoy the use of the app,
I wish to have a nice interface.
```

6 User can see error with a potential fix to the issue - **priority: 3** complete
```
As a user,
So that I'm not completely stuck when an error occurs,
I would like a cause and list of solutions for the error.
```

---

Initially I knew 2 classes I would create would be an APIClient class
and a Printer Class;

- The APIClient would be responsible for retrieving the JSON data from the
OpenWeatherMap api.

- The Printer would be responsible for formatting the data into a user
friendly format and creating a PDF document with the relevant data visible.

These classes may be broken down however due to potentially having too many responsibilities.

I have decided to use a static html page that uses JavaScript to make XHR's to gather the required
JSON from the api. The page being static means the user will not have to install anything to setup.
They will need to put their API key in the ApiClient class. Then to run just open the WeatherNow.html
document.

The ApiClient will be instantiated with a Printer object that will be used to format and display the data
retrieved.

Used Jasmine for testing classes as I have used it before and it is easy and simple to use.

To run Jasmine tests simply open the SpecRunner.html in google chrome.

jsPDF was used to create the PDF files.

There are some flaws that I would have liked to address but ran out of time;

- Had to move on from testing the getWeather() function of the ApiClient due to issues with asynchronicity and making the requests.

- Would have liked to look into being able to feature test the static page for elements existing and event listeners being activated.

- Of course edit the CSS to give the page styles and make a nicer UI.

- A way for the user to get weather details on a city that shares it's name with another but is less prominent. e.g; Windsor from GB and CA but api takes data from Windsor US (in California).
