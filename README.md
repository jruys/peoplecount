# peoplecount
Webex Room device people counter - alerts when room is too full

This is a proof of concept using the Webex video endpoint peoplecount function to alert when more than a given number of people in view. The alert will also work when the board is in half-wake state. Technically you could show the number of people detected but I chose not to do that in the alert.

Macro code speaks for itself: set maxPeople to room capacity, and optionally change the time the alert is visible in line 10.

For the macro to work, set PeopleCountOutOfCall and PeoplePresenceDetector to TRUE in Setup->Configuration->RoomAnalytics.
