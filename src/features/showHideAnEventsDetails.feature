Feature: Show/hide an event's details

Scenario: An event element is collapsed by default
Given the app is loaded
When the user should see a list of all upcoming events
Then the user should not see the more details information of the events

Scenario: User can expand an event to see its details
Given the user should see a list of all upcoming events
When the user clicks on the “show details“ of an event
Then the event is expanded and shows details

Scenario: User can collapse an event to hide its details

Given the user should see a list of all upcoming events
And the user clicks on the “show details“ of an event
When the user clicks on the “hide details“ button of the event
Then the details of the event are hidden

