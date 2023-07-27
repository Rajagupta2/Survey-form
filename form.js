document.getElementById("surveyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Gather form data
  const formData = new FormData(event.target);
  const surveyData = {};
  formData.forEach((value, key) => {
    surveyData[key] = value;
  });

  // Replace this with your own code to submit the data to the server
  console.log(surveyData);
});
