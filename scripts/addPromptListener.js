try {
  // Get the Gen AI control id:
  const genAiCtrlId = Forms.SDK.GetControlValue('GenAIChat1.id');
  console.log("Gen AI Control ID is: " + genAiCtrlId);

  // Get the textarea element by its id, using the Gen AI control id:
  const textareaId = document.getElementById(genAiCtrlId);

  // Add an event listener to capture user input
  textareaId.addEventListener('input', function (event) {
    // Access the current value
    const currentValue = event.target.value;
    console.log('User entered:', currentValue);
    Forms.SDK.UpdateFormVariableValue('lastPrompt', currentValue);
  });
}
catch (err) {
  console.log("Error reading prompt: " + err.message);
}
