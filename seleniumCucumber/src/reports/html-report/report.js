$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:skeleton/login.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "admin user enters \u003cusername\u003e as username",
  "keyword": "When "
});
formatter.step({
  "name": "admin user enters \u003cpassword\u003e as passsword",
  "keyword": "And "
});
formatter.step({
  "name": "\u003cresult\u003e user",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "result"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "abc123",
        "valid"
      ]
    },
    {
      "cells": [
        "xyz@email.com",
        "123456",
        "valid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters abc@gmail.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.admin_user_enters_abc_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters abc123 as passsword",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.admin_user_enters_abc_as_passsword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.admin_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@valid"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the url of the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDef.the_url_of_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters xyz@email.com as username",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.admin_user_enters_abc_gmail_com_as_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "admin user enters 123456 as passsword",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.admin_user_enters_abc_as_passsword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "valid user",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.admin_user(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
formatter.uri("classpath:skeleton/shout.feature");
formatter.feature({
  "name": "Shout Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Voice Audible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sean is 20 metres away {from} Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.sean_is_meters_away_from_Lucia(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sean shouts \"free coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.sean_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia hears the message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.lucia_hears_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Voice not Audible",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Sean is 200 metres away {from} Lucia",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.sean_is_meters_away_from_Lucia(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sean shouts \"free coffee\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefs.sean_shouts(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Lucia cannot hear the message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs.lucia_hears_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "status": "passed"
});
});