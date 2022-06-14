Feature: Customer Account Personal Info page Tests

  Scenario Outline: Edit Customer Personal Info Negative Tests
    Given I am on Customer Account page

    When I click on Ihre Kundendaten
    Then I see Ihre Kundendaten page

    When I expand Ihre persönlichen Daten
    And I click on Edit button
    Then I see Ihre persönlichen Daten edit form

    When I change customer name to <Name>
    And I click Save button
    Then I see error message:
      """
     <Error>
     """
    Examples:
      | Error                                                 | Name                                                                                                                                                                                                                                   |
      | Der Vorname muss aus mindestens 2 Buchstaben bestehen | 123                                                                                                                                                                                                                                    |
      | Der Vorname muss aus mindestens 2 Buchstaben bestehen | !"£                                                                                                                                                                                                                                    |
      | Bitte geben Sie Ihren Vornamen ein!                   |                                                                                                                                                                                                                                        |
      | Der Vorname muss aus mindestens 2 Buchstaben bestehen | блаблабла                                                                                                                                                                                                                              |
      | Der Vorname muss aus mindestens 2 Buchstaben bestehen | ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff |


  Scenario: Edit Customer Personal Info Positive Test
    Given I am on Customer Account page

    When I click on Ihre Kundendaten
    Then I see Ihre Kundendaten page

    When I expand Ihre persönlichen Daten
    And I click on Edit button
    Then I see Ihre persönlichen Daten edit form

    When I change customer data
      | Name | Last Name | Country Code | Phone Number | Birthday   |
      | John | Doe       | 0049         | 15901501333  | 01.10.1970 |
    And I click Save button
    Then I see Edit button
