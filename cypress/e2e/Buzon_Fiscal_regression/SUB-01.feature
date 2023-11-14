@all  
Feature:  Create Account until  verification code screen
   
 
    Scenario: Scenario: Validation Create Account until verification code screen

    Given The user open Suburbia web page  
    When The user Enter to Suburbia webpage select the Login option 
    Then The user will be able to see the Sign In section correctly with all its components

    Given The user is on the suburbia page in the Sign in section
    When The user selects Create account
    Then The user will be able to see the create account section with all its components correctly

    Given The user is in the create account section to validate the system does not allow creating an account
    When The user enters an invalid email 
    And A valid password is entered
    Then The website will show an error message in the email and where the password validation will appear.

    Given The user is in the create account section to validate the system allows the creation of an account
    When The user enters a valid email
    And Enter a valid password to create the account
    Then The system will show us the personal data section where the components will be displayed correctly and the user will be able to fill out correctly to advance to the verification.

    Given The user has registered their personal data and is in the Verify Cellular section
    When Select the location and enter phone number
    Then The system allows you to advance to Text Code Confirmation
    * The Verification Code section will display correctly

    


 


