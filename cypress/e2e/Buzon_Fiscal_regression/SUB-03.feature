@all  
Feature:  My Bag Screen
   
 
    Scenario: Validate that user can add item to "My bolsa" 

    Given The user open Suburbia web page  
    When The user selects Categories from the banner menu
    Then The system will display the list of categories correctly and they will be selectable
    When The user inserts the name of an item in the search engine to add any displayed item to my bag
    Then The system will display the list of products where they will be added to my bag correctly
    