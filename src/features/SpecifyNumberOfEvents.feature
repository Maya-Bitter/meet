Feature: specify number of events

scenariowhen user hasn’t specified a number, 32 is the default number
Given: the app is loaded 
When: the user hasn’t specified the number of events
Then: list of 32 events will be shown
	
scenario: user can change the number of events they want to see
Given: a list of 32 events has been served to the user
When: the user specifies the number of events to be loaded
Then: list with the specified number of events is served to the user





