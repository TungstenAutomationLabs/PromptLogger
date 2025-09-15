try {
  let prompt = Forms.SDK.GetFormVariableValue('lastPrompt');
  console.log("Last prompt is: "  + prompt);
}
catch(err) {
  console.log("Error reading prompt: " + err.message);
}
