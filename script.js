class BMREstimator {
  // Gender-specific BMR
  calculateBMRMale(weight, height, age) {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  }

  calculateBMRFemale(weight, height, age) {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // TDEE calculation based on activity
  calculateTDEE(bmr, activity) {
    const factors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
    };
    return bmr * factors[activity];
  }
}

const form = document.getElementById("bmr-form");
const resultSection = document.getElementById("result");
const bmrText = document.getElementById("bmr-text");
const tdeeText = document.getElementById("tdee-text");

const estimator = new BMREstimator();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);
  const weight = Number(document.getElementById("weight").value);
  const gender = document.getElementById("gender").value;
  const activity = document.getElementById("activity").value;

  if (!isValid(age, height, weight, gender)) {
    alert("Please enter valid inputs.");
    return;
  }

  let bmr, tdee;

  if (gender === "male") {
    bmr = estimator.calculateBMRMale(weight, height, age);
  } else {
    bmr = estimator.calculateBMRFemale(weight, height, age);
  }

  tdee = estimator.calculateTDEE(bmr, activity);

  displayResults(bmr, tdee);
});

function isValid(age, height, weight, gender) {
  return (
    age > 0 &&
    height >= 50 &&
    weight >= 10 &&
    (gender === "male" || gender === "female")
  );
}

function displayResults(bmr, tdee) {
  bmrText.textContent = `Your BMR: ${Math.round(bmr)} kcal/day`;
  tdeeText.textContent = `Daily Calories Needed: ${Math.round(tdee)} kcal/day`;

  resultSection.classList.remove("hidden");
}

