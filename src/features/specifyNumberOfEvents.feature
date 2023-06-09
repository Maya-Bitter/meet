Feature: Specify number of events

Scenario: When user has not specified a number 32 is the default number
Given the app is loaded
When the user has not specified the number of events
Then the default number of events displayed should be 32
	
Scenario: User can change the number of events they want to see
Given a list of 32 events has been served to the user
When the user specifies the number of events to be loaded
Then list with the specified number of events is served to the user




