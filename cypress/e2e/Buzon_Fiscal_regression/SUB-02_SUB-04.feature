@all  
Feature:  Sign in Screen
   
 
    Scenario: Validate User can Sign in 

    Given The user open Suburbia web page 
    When The user Enter to Suburbia webpage select the Sign in option 
    Then The user will be able to see the Sign in section correctly with all its components

    Given The user is on the suburbia page in the Sign in section
    When The user selects forgot your password
    Then The system will display the Recover Password section where you can return to the Sign in section

    Given The user returns to the Sign in section
    When The user enters a valid email
    And A valid password is entered
    Then The system will allow entry to the user s account and the system will additionally allow the user to log out of their own account

