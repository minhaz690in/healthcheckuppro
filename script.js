const accessCode = "Minhaz007";

// Access Code Check
function checkAccessCode() {
  const userInput = document.getElementById("access-code").value;
  const errorMessage = document.getElementById("error-message");
  const accessCodeInterface = document.getElementById("access-code-interface");
  const thankYou = document.getElementById("thank-you");

  if (userInput === accessCode) {
    accessCodeInterface.classList.add("hidden");
    thankYou.classList.remove("hidden");
    setTimeout(() => {
      thankYou.classList.add("hidden");
      document.getElementById("main-interface").classList.remove("hidden");
    }, 3000);
  } else {
    errorMessage.classList.remove("hidden");
  }
}

// Open Feature
function openFeature(featureId) {
  document.querySelectorAll(".feature").forEach(feature => feature.classList.add("hidden"));
  document.getElementById(featureId).classList.remove("hidden");

  // Load health tips if the feature is opened
  if (featureId === "health-tips") {
    loadHealthTips();
  }
}

// BMI Calculator
function calculateBMI() {
  const height = parseFloat(document.getElementById("height-input").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);
  const bmi = (weight / (height * height)).toFixed(2);
  document.getElementById("bmi-result").innerText = `Your BMI: ${bmi}`;

  // Provide BMI tips
  let bmiTips = "";
  if (bmi < 18.5) {
    bmiTips = "You are underweight. Eat more protein-rich foods like eggs, fish, and nuts.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiTips = "Your weight is normal. Maintain a balanced diet and exercise regularly.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiTips = "You are overweight. Reduce calorie intake and increase physical activity.";
  } else {
    bmiTips = "You are obese. Consult a doctor for a personalized diet and exercise plan.";
  }
  document.getElementById("bmi-tips").innerText = bmiTips;
}

// Age Calculator
function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDiff = today.getMonth() - birthdate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  const months = (today.getMonth() + 12 - birthdate.getMonth()) % 12;
  const days = Math.floor((today - new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((today - new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) / (1000 * 60 * 60));
  const minutes = Math.floor((today - new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())) / (1000 * 60));
  document.getElementById("age-result").innerText = `Your age: ${age} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes`;
}

// Height Converter
function convertHeight() {
  const feet = parseFloat(document.getElementById("feet").value);
  const inches = parseFloat(document.getElementById("inches").value);

  if (isNaN(feet) || isNaN(inches) || feet < 0 || inches < 0) {
    document.getElementById("height-result").innerText = "Please enter valid height values.";
    return;
  }

  const cm = (feet * 30.48) + (inches * 2.54);
  document.getElementById("height-result").innerText = `Height: ${cm.toFixed(2)} cm`;
}

// Diet Chart
function suggestDiet() {
  const age = parseInt(document.getElementById("diet-age").value);
  const dietType = document.getElementById("diet-type").value;
  let suggestion = "";

  if (dietType === "vegetarian") {
    suggestion = `
      <p>Vegetarian Diet Plan:</p>
      <ul>
        <li>Protein: Tofu, beans, lentils, paneer</li>
        <li>Carbs: Rice, bread, pasta, fruits</li>
        <li>Fats: Avocado, nuts, olive oil</li>
        <li>Water: 2-3 liters</li>
      </ul>
    `;
  } else {
    suggestion = `
      <p>Non-Vegetarian Diet Plan:</p>
      <ul>
        <li>Protein: Chicken, fish, eggs</li>
        <li>Carbs: Rice, bread, pasta</li>
        <li>Fats: Nuts, olive oil, butter</li>
        <li>Water: 3-4 liters</li>
      </ul>
    `;
  }

  document.getElementById("diet-suggestion").innerHTML = suggestion;
}

// Health Tips
function loadHealthTips() {
  const tips = [
    "১. চুল পড়া কমাতে নারকেল তেল ও আমলকীর রস মিশিয়ে মাথায় মালিশ করুন।",
    "২. চাপ কমাতে প্রতিদিন ১০ মিনিট মেডিটেশন করুন।",
    "৩. ত্বকের উজ্জ্বলতা বাড়াতে প্রতিদিন পর্যাপ্ত পানি পান করুন।",
    "৪. ওজন কমানোর জন্য সকালে খালি পেটে গরম পানি ও লেবু খান।",
    "৫. হজমশক্তি বাড়াতে আদা চা পান করুন।",
    "৬. ডায়াবেটিস নিয়ন্ত্রণে রাখতে নিয়মিত ব্যায়াম করুন।",
    "৭. উচ্চ রক্তচাপ নিয়ন্ত্রণে লবণ কম খান।",
    "৮. ঘুমের সমস্যা দূর করতে প্রতিদিন একই সময়ে ঘুমাতে যান।",
    "৯. চোখের স্বাস্থ্য ভালো রাখতে গাজর ও সবুজ শাকসবজি খান।",
    "১০. স্ট্রেস কমাতে প্রতিদিন ৩০ মিনিট হাঁটুন।",
    "১১. দাঁতের স্বাস্থ্য ভালো রাখতে নিয়মিত ব্রাশ ও ফ্লস করুন।",
    "১২. ঠান্ডা লাগা থেকে বাঁচতে ভিটামিন সি সমৃদ্ধ খাবার খান।",
    "১৩. কোলেস্টেরল নিয়ন্ত্রণে রাখতে তেল-চর্বি কম খান।",
    "১৪. হাড়ের স্বাস্থ্য ভালো রাখতে দুধ ও দুগ্ধজাত খাবার খান।",
    "১৫. মাথাব্যথা কমাতে লবঙ্গ তেল ব্যবহার করুন।",
    "১৬. পেটের সমস্যা দূর করতে দই খান।",
    "১৭. ক্লান্তি দূর করতে পর্যাপ্ত ঘুমান।",
    "১৮. ত্বকের ব্রণ দূর করতে নিমপাতা বাটা লাগান।",
    "১৯. শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়াতে ভিটামিন ডি সমৃদ্ধ খাবার খান।",
    "২০. মানসিক স্বাস্থ্য ভালো রাখতে বই পড়ুন ও গান শুনুন।"
  ];

  const tipsList = document.getElementById("tips-list");
  tipsList.innerHTML = tips.map(tip => `<div class="tip">${tip}</div>`).join("");
}

// Simulate loading animation
setTimeout(() => {
  document.getElementById("loading-animation").classList.add("hidden");
  document.getElementById("access-code-interface").classList.remove("hidden");
}, 3000);