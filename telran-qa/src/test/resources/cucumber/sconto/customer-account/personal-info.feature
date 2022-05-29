Feature: Customer Account Personal Info page Tests

  Scenario: Edit Customer Personal Info
    Given I am on Customer Account page

    When I click on Ihre Kundendaten
    Then I see Ihre Kundendaten page

    When I expand Ihre persönlichen Daten
    And I click on Edit button
    Then I see Ihre persönlichen Daten edit form

    When I change customer name to 123
    And I click Save button
    Then I see error message:
#      """
#     Der Vorname muss aus mindestens 2 Buchstaben bestehen
#     """
