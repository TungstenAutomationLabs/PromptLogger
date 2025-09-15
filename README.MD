# Prompt Logger
This project contains the scripts and an example package containing a form to illustrate how each prompt entered into a TotalAgility Gen AI Chat Control can be mapped to a TA variable for other use on the form using the ```Prompt entered``` TA event.

## Setup:
1. Add a VAR to hold the last prompt: ```lastPrompt```
2. ```addPromptLister.js``` should be called on the top level form ```After Render```. This script adds an event listener to text box in the Gen AI Control, which updates the ```lastPrompt``` var with the last thing entered in the text box.
3. ```promptLoggerJS.js``` should be called on the ```Prompt entered``` even on the form control. In this case it just logs the prompt to the console, but this function could be replaced with any other TA form action, which can now access the contents of the prompt via the ```lastPrompt``` var.

