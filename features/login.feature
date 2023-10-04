Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

@debug
Scenario: El usuario crea una cuenta de facebook
  Given el usuario ingresa a la pagina de registro
 When el usuario ingresa al modulo de registro
  Then el usuario ve el mensaje de registro exitoso
