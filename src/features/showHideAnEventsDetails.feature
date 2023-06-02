Feature: show/hide an event's details

scenario: An event element is collapsed by default
Given: the app is loaded
When: the user should see a list of all upcoming events
Then: the user should not see the more details information of the events

scenario: User can expand an event to see its details
Given: the user should see a list of all upcoming events
When: the user clicks on the “show details“ of an event
Then: the event is expanded and shows details

scenario: User can collapse an event to hide its details
Given: specific event is being expanded with its details
When: the user clicks on the “hide details“ button of the event
Then: the details of the event are hidden

