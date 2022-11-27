$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/uiFeatures/hrmOrange.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.step({
  "name": "I login with incorrect Credentials\"\u003cusername\u003e\"\"\u003cpassword\u003e\"\"\u003cincorrectCredential\u003e\"",
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
        "incorrectCredential"
      ]
    },
    {
      "cells": [
        "",
        "abcd",
        "Username cannot be empty"
      ]
    },
    {
      "cells": [
        "jfkdkfjkj",
        "",
        "Password cannot be empty"
      ]
    },
    {
      "cells": [
        "dfjdjfk",
        "Bootcamp5#",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "yoll-student",
        "jdjfjdfkj",
        "Invalid credentials"
      ]
    },
    {
      "cells": [
        "kfjkdjfk",
        "jjwhewhnr",
        "Invalid credentials"
      ]
    }
  ]
});
formatter.scenario({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with incorrect Credentials\"\"\"abcd\"\"Username cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_incorrect_Credentials(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with incorrect Credentials\"jfkdkfjkj\"\"\"\"Password cannot be empty\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_incorrect_Credentials(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with incorrect Credentials\"dfjdjfk\"\"Bootcamp5#\"\"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_incorrect_Credentials(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with incorrect Credentials\"yoll-student\"\"jdjfjdfkj\"\"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_incorrect_Credentials(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hrmOrange login functionalities verification",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with incorrect Credentials\"kfjkdjfk\"\"jjwhewhnr\"\"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_incorrect_Credentials(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@toan"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I login with correct Credentials",
  "keyword": "Given "
});
formatter.match({
  "location": "HrmOrangeStep.i_login_with_correct_Credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});