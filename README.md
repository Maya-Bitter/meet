## **Achievement 4 Project: Meet App**

[Objective](#Objective)

[Technical Requirements](#Technical-Requirements)


## **Objective**

To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

The app will allow users to search for a city and
get a list of events hosted in that city. For the data visualization component, you’ll add two
charts—one that shows how many events will take place in that city on upcoming days, and another
that visualizes the popularity of event genres in the form of a pie chart.

- Frontend: Written with JavaScript/React; hosted on GitHub Pages.
- Backend (Server Logic): Written with Node/Express as Lambda functions (FaaS); hosted on AWS (requests come from frontend to Lambda function to data).
- Backend (Database): Google Calendar API.

## Technical Requirements

* The app must be a React application.
* The app must be built using the TDD technique.
* The app must use the Google Calendar API and OAuth2 authentication flow.
* The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server.
* The app’s code must be hosted in a Git repository on GitHub.
* The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.
*  The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.
*  The app must pass Lighthouse’s PWA checklist.
* The app must work offline or in slow network conditions with the help of a service worker.
* Users may be able to install the app on desktop and add the app to their home screen on
mobile.
* The app must be deployed on GitHub Pages.
* The API call must use React axios and async/await.
* The app must implement an alert system using an OOP approach to show information to the
user.
* The app must make use of data visualization (recharts preferred).
* The app must be covered by tests with a coverage rate >= 90%.
* The app must be monitored using an online monitoring tool

## Features and Requirements

Key Features:

* Filter events by city.
* Show/hide event details.
* Specify number of events.
* Use the app when offline.
* Add an app shortcut to the home screen.
* View a chart showing the number of upcoming events by city.

### Feature 1: filter events by city:

___User story:
as a user, I should be able to filter events by a requested city, so that I can see the list of the events taking place there.___

### scenario 1: when user hasn’t searched for a city, show upcoming events from all cities.

* Given: user hasn’t searched for any city
* When: the user opens the app
* Then: the user should see a list of all upcoming events

### scenario 2: user should see a list of suggestions when they search for a city.

* Given: the main page is open
* When: user starts typing in the city textbox
* Then: the user should see a list of cities (suggestions) that match what they’ve typed

### scenario 3: user can select a city from the suggested list.

* Given: the user was typing “berlin” in the city textbox and the list of suggested cities is showing
* when: the user selects a city (e.g., “berlin, Germany”) from the list
* Then: their city should be changed to that city (i.e., “berlin, Germany”) and the user should receive a list of upcoming events in that city

### Feature 2: show/hide an event's details

___User story:
as a user, I should be able to show or hide details, so that I can see more or less information about an event.___

### scenario 1: an event element is collapsed by default

* Given: the app is loaded
* When: the user should see a list of all upcoming events
* Then: the user should NOT see the "more details" information of the events.

### scenario 2: user can expand an event to see its details

* Given: the user should see a list of all upcoming events
* When: the user clicks on the “show details” of an event. 
* Then: the event is expanded and shows details.

### scenario 3: user can collapse an event to hide its details

* Given: specific event is being expanded with its details.
* When: the user clicks on the “hide details” button of the event.
* Then: the details of the event are hidden.

### Feature 3: specify number of events

___User story:
as a user, I should be able to specify the number of the upcoming events shown, so that I can see have more or less events loaded.___

### scenario 1: when user hasn’t specified a number, 32 is the default number

* Given:  the app is loaded. 
* When:  the user hasn’t specified the number of events. 
* Then:   list of 32 events will be shown. 
	
### scenario 2: user can change the number of events they want to see

* Given: a list of 32 events has been served to the user.
* When:  the user specifies the number of events to be loaded.
* Then:  list with the specified number of events is served to the user

### Feature 4: use the app when offline

___User story:
as a user, I should be able to use the app offline, so that I can view 
the events I saw when I was online.___

### scenario 1: show cached data when there’s no internet connection

* Given: user has had prior interaction with the app before while being online with internet connection.
* When: user opens the app without internet connection
* Then: user receives cashed data from their last time they has been with active internet connection.

### scenario 2: show error when user changes the settings (city, time range)

* Given: user opens the app without internet connection
* When: user changes the setting (city, time range)
* Then: user receives error message indicating that data is not available without internet connection

### Feature 5: data visualization

___User story:
as a user, i should be able to see a chart of all upcoming events of each city, so that i can choose from different offers and plan my time.___

### scenario 1: show a chart with the number of upcoming events in each city

* Given: the app is loaded.
* When: user clicks on a city.
* Then: a chart with the number of events in a city is served to the user


Inline-style link with a title attribute to [Markdown Land](https://markdown.land "Markdown Land")
