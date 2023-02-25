function calculateBMI() {
	var weight = document.getElementById("weight").value;
	var feet = document.getElementById("feet").value;
	var inches = document.getElementById("inches").value;

	// Convert height to meters
	var height = ((feet * 12) + parseInt(inches)) * 0.0254;

	// Calculate BMI
	var bmi = (weight / (height * height)).toFixed(2);

	// Display BMI
	document.getElementById("bmi").value = bmi;

	// Determine BMI category
	var category;
	if (bmi < 18.5) {
		category = "Underweight";
	} else if (bmi < 25) {
		category = "Normal";
	} else if (bmi < 30) {
		category = "Overweight";
	} else {
		category = "Obese";
	}

	// Display BMI category
	document.getElementById("category").value = category;
}
