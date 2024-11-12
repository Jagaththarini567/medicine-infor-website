// Sample medicine database with 50 entries
const medicines = {
    "Aspirin": {
        activeIngredients: "Acetylsalicylic Acid",
        dosage: "300-600 mg every 4-6 hours as needed",
        sideEffects: "Nausea, vomiting, stomach pain, heartburn",
        precautions: "Avoid alcohol; caution in patients with asthma",
        interactionAlerts: "Can increase bleeding risk with blood thinners"
    },
    "Ibuprofen": {
        activeIngredients: "Ibuprofen",
        dosage: "200-400 mg every 4-6 hours as needed",
        sideEffects: "Nausea, dizziness, headache, stomach upset",
        precautions: "Avoid in kidney disease; take with food",
        interactionAlerts: "May interact with blood pressure medications"
    },
    "Paracetamol": {
        activeIngredients: "Paracetamol",
        dosage: "500 mg every 4-6 hours as needed",
        sideEffects: "Rash, nausea, liver damage (high doses)",
        precautions: "Avoid alcohol; caution in liver disease",
        interactionAlerts: "May interact with blood thinners"
    },
    "Amoxicillin": {
        activeIngredients: "Amoxicillin",
        dosage: "250-500 mg every 8 hours",
        sideEffects: "Diarrhea, nausea, skin rash",
        precautions: "Caution in patients with penicillin allergy",
        interactionAlerts: "May interact with methotrexate"
    },
    "Ciprofloxacin": {
        activeIngredients: "Ciprofloxacin",
        dosage: "500 mg every 12 hours",
        sideEffects: "Nausea, diarrhea, headache, dizziness",
        precautions: "Avoid in tendon disorders; caution in kidney disease",
        interactionAlerts: "Can interact with blood thinners and antacids"
    },
    "Metformin": {
        activeIngredients: "Metformin",
        dosage: "500 mg twice daily with meals",
        sideEffects: "Nausea, vomiting, diarrhea, stomach pain",
        precautions: "Avoid in kidney disease; monitor blood sugar levels",
        interactionAlerts: "May interact with insulin and alcohol"
    },
    "Lisinopril": {
        activeIngredients: "Lisinopril",
        dosage: "10-40 mg once daily",
        sideEffects: "Dizziness, headache, cough",
        precautions: "Avoid in pregnancy; monitor blood pressure",
        interactionAlerts: "Can interact with diuretics and potassium supplements"
    },
    "Atorvastatin": {
        activeIngredients: "Atorvastatin",
        dosage: "10-80 mg once daily",
        sideEffects: "Muscle pain, liver damage (rare)",
        precautions: "Avoid in liver disease; limit alcohol intake",
        interactionAlerts: "Can interact with certain antibiotics and grapefruit juice"
    },
    "Simvastatin": {
        activeIngredients: "Simvastatin",
        dosage: "10-40 mg once daily",
        sideEffects: "Muscle pain, liver abnormalities",
        precautions: "Avoid in liver disease; limit alcohol intake",
        interactionAlerts: "Can interact with grapefruit juice and certain antibiotics"
    },
    "Omeprazole": {
        activeIngredients: "Omeprazole",
        dosage: "20 mg once daily",
        sideEffects: "Headache, diarrhea, stomach pain",
        precautions: "Avoid long-term use; monitor magnesium levels",
        interactionAlerts: "Can interact with blood thinners and antifungals"
    },
    "Pantoprazole": {
        activeIngredients: "Pantoprazole",
        dosage: "40 mg once daily",
        sideEffects: "Headache, diarrhea, stomach pain",
        precautions: "Avoid long-term use; caution in liver disease",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Furosemide": {
        activeIngredients: "Furosemide",
        dosage: "20-80 mg once or twice daily",
        sideEffects: "Dizziness, dehydration, low potassium",
        precautions: "Monitor electrolytes; avoid dehydration",
        interactionAlerts: "May interact with blood pressure medications"
    },
    "Hydrochlorothiazide": {
        activeIngredients: "Hydrochlorothiazide",
        dosage: "12.5-50 mg once daily",
        sideEffects: "Dizziness, dehydration, low potassium",
        precautions: "Monitor electrolytes; caution in kidney disease",
        interactionAlerts: "Can interact with lithium and blood pressure medications"
    },
    "Metoprolol": {
        activeIngredients: "Metoprolol",
        dosage: "50-100 mg once or twice daily",
        sideEffects: "Dizziness, fatigue, depression",
        precautions: "Avoid abrupt discontinuation; caution in asthma",
        interactionAlerts: "May interact with other blood pressure medications"
    },
    "Amlodipine": {
        activeIngredients: "Amlodipine",
        dosage: "5-10 mg once daily",
        sideEffects: "Swelling, fatigue, dizziness",
        precautions: "Monitor blood pressure; avoid in heart failure",
        interactionAlerts: "Can interact with simvastatin"
    },
    "Clonazepam": {
        activeIngredients: "Clonazepam",
        dosage: "0.5-1 mg twice daily",
        sideEffects: "Drowsiness, dizziness, fatigue",
        precautions: "Avoid alcohol; caution in respiratory disease",
        interactionAlerts: "Can interact with sedatives"
    },
    "Lorazepam": {
        activeIngredients: "Lorazepam",
        dosage: "1-2 mg as needed",
        sideEffects: "Drowsiness, dizziness, weakness",
        precautions: "Avoid alcohol; caution in respiratory disease",
        interactionAlerts: "Can interact with sedatives and alcohol"
    },
    "Diazepam": {
        activeIngredients: "Diazepam",
        dosage: "5-10 mg as needed",
        sideEffects: "Drowsiness, dizziness, fatigue",
        precautions: "Avoid alcohol; caution in liver disease",
        interactionAlerts: "Can interact with sedatives and alcohol"
    },
    "Alprazolam": {
        activeIngredients: "Alprazolam",
        dosage: "0.25-0.5 mg as needed",
        sideEffects: "Drowsiness, dizziness, fatigue",
        precautions: "Avoid alcohol; caution in liver disease",
        interactionAlerts: "Can interact with sedatives and alcohol"
    },
    "Citalopram": {
        activeIngredients: "Citalopram",
        dosage: "20-40 mg once daily",
        sideEffects: "Nausea, drowsiness, dry mouth",
        precautions: "Avoid abrupt discontinuation; monitor mood",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Sertraline": {
        activeIngredients: "Sertraline",
        dosage: "50-100 mg once daily",
        sideEffects: "Nausea, dizziness, insomnia",
        precautions: "Monitor mood; caution in liver disease",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Escitalopram": {
        activeIngredients: "Escitalopram",
        dosage: "10-20 mg once daily",
        sideEffects: "Nausea, drowsiness, dry mouth",
        precautions: "Monitor mood; avoid abrupt discontinuation",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Fluoxetine": {
        activeIngredients: "Fluoxetine",
        dosage: "20-40 mg once daily",
        sideEffects: "Nausea, insomnia, dry mouth",
        precautions: "Avoid abrupt discontinuation; monitor mood",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Bupropion": {
        activeIngredients: "Bupropion",
        dosage: "150 mg once daily",
        sideEffects: "Dry mouth, insomnia, headache",
        precautions: "Avoid in seizure disorders; monitor mood",
        interactionAlerts: "May interact with alcohol"
    },
    "Trazodone": {
        activeIngredients: "Trazodone",
        dosage: "50-100 mg before bedtime",
        sideEffects: "Drowsiness, dizziness, dry mouth",
        precautions: "Avoid alcohol; monitor mood",
        interactionAlerts: "Can interact with sedatives"
    },
    "Duloxetine": {
        activeIngredients: "Duloxetine",
        dosage: "60 mg once daily",
        sideEffects: "Nausea, dizziness, dry mouth",
        precautions: "Avoid in liver disease; monitor mood",
        interactionAlerts: "May interact with blood thinners"
    },
    "Venlafaxine": {
        activeIngredients: "Venlafaxine",
        dosage: "75 mg once daily",
        sideEffects: "Nausea, dizziness, dry mouth",
        precautions: "Avoid abrupt discontinuation; monitor mood",
        interactionAlerts: "Can interact with blood thinners"
    },
    "Cetirizine": {
        activeIngredients: "Cetirizine",
        dosage: "10 mg once daily",
        sideEffects: "Drowsiness, dry mouth",
    },
    "Losartan": {
          activeIngredients: "Losartan",
          dosage: "50 mg once daily",
          sideEffects: "Dizziness, back pain, nasal congestion",
          precautions: "Avoid in pregnancy; monitor kidney function",
          interactionAlerts: "May interact with diuretics"
        },
        "Aspirin": {
          activeIngredients: "Aspirin",
          dosage: "325 mg once daily",
          sideEffects: "Upset stomach, gastrointestinal bleeding",
          precautions: "Avoid if allergic to NSAIDs; use with caution in patients with ulcers",
          interactionAlerts: "May interact with blood thinners"
        },
        "Ibuprofen": {
          activeIngredients: "Ibuprofen",
          "dosage": "200-400 mg every 4-6 hours as needed",
          "sideEffects": "Stomach upset, dizziness, headache",
          "precautions": "Avoid long-term use; monitor kidney function",
          "interactionAlerts": "May interact with blood pressure medications"
        },
        "Amoxicillin": {
          activeIngredients: "Amoxicillin",
          dosage: "500 mg every 8 hours for 7-10 days",
          sideEffects: "Nausea, diarrhea, rash",
          precautions: "May cause allergic reactions; take with food to reduce stomach upset",
          interactionAlerts: "May interact with birth control pills"
        },
        "Paracetamol-plus": {
          activeIngredients: "Paracetamol",
          dosage: "500 mg every 4-6 hours as needed",
          sideEffects: "Liver damage (in overdose), rash",
          precautions: "Do not exceed 4g per day to avoid liver damage",
          interactionAlerts: "May interact with alcohol and warfarin"
        },
        "Atorvastatin": {
          activeIngredients: "Atorvastatin",
          dosage: "10-80 mg once daily",
          sideEffects: "Muscle pain, liver enzyme abnormalities",
          precautions: "Monitor liver function; avoid in pregnancy",
          interactionAlerts: "May interact with grapefruit juice and certain antibiotics"
        },
        "Metformin": {
          activeIngredients: "Metformin",
          dosage: "500 mg twice daily",
          sideEffects: "Diarrhea, nausea, vitamin B12 deficiency",
          precautions: "Avoid in kidney disease; monitor kidney function",
          interactionAlerts: "May interact with contrast dyes"
        },
        "Prednisone": {
          activeIngredients: "Prednisone",
          dosage: "5-60 mg per day depending on condition",
          sideEffects: "Weight gain, increased blood sugar, mood changes",
          precautions: "Avoid abrupt withdrawal; monitor blood sugar",
          interactionAlerts: "May interact with NSAIDs and certain vaccines"
        },
        "Alprazolam": {
          activeIngredients: "Alprazolam",
          dosage: "0.25-0.5 mg every 8 hours as needed",
          sideEffects: "Drowsiness, dizziness, memory problems",
          precautions: "Avoid alcohol; use with caution in patients with a history of addiction",
          interactionAlerts: "May interact with other sedatives"
        },
        "Ciprofloxacin": {
          activeIngredients: "Ciprofloxacin",
          dosage: "250-500 mg every 12 hours",
          sideEffects: "Nausea, diarrhea, tendonitis",
          precautions: "Avoid in patients with a history of tendon disorders",
          interactionAlerts: "May interact with antacids and dairy products"
        },
        "Lisinopril": {
          activeIngredients: "Lisinopril",
          dosage: "10-40 mg once daily",
          sideEffects: "Cough, dizziness, elevated potassium levels",
          precautions: "Monitor blood pressure and kidney function",
          interactionAlerts: "May interact with diuretics and potassium supplements"
        },
        "Cetirizine": {
          activeIngredients: "Cetirizine",
          dosage: "10 mg once daily",
          sideEffects: "Drowsiness, dry mouth, headache",
          precautions: "Use with caution in elderly patients",
          interactionAlerts: "May interact with alcohol and other sedatives"
        },
        "Clonazepam": {
          activeIngredients: "Clonazepam",
          dosage: "0.25-0.5 mg twice daily",
          sideEffects: "Drowsiness, dizziness, memory impairment",
          precautions: "Avoid alcohol; use with caution in patients with a history of substance abuse",
          interactionAlerts: "May interact with other sedatives"
        },
        "Omeprazole": {
          activeIngredients: "Omeprazole",
          dosage: "20 mg once daily",
          sideEffects: "Headache, abdominal pain, diarrhea",
          precautions: "Avoid long-term use; monitor magnesium levels",
          interactionAlerts: "May interact with certain antifungals and blood thinners"
        },
        "Amlodipine": {
          activeIngredients: "Amlodipine",
          dosage: "5-10 mg once daily",
          sideEffects: "Swelling of feet or ankles, dizziness",
          precautions: "Monitor blood pressure regularly",
          interactionAlerts: "May interact with other antihypertensives"
        },
        "Warfarin": {
          activeIngredients: "Warfarin",
          dosage: "5 mg daily, adjusted based on INR levels",
          sideEffects: "Bleeding, bruising, nausea",
          precautions: "Monitor INR regularly; avoid in pregnancy",
          interactionAlerts: "May interact with vitamin K, certain antibiotics, and other blood thinners"
        },
        "Hydrochlorothiazide": {
          activeIngredients: "Hydrochlorothiazide",
          dosage: "12.5-50 mg once daily",
          sideEffects: "Low potassium, dehydration, dizziness",
          precautions: "Monitor potassium levels; use with caution in patients with diabetes",
          interactionAlerts: "May interact with lithium and other diuretics"
        },
        "Furosemide": {
          activeIngredients: "Furosemide",
          dosage: "20-80 mg once or twice daily",
          sideEffects: "Low blood pressure, dehydration, dizziness",
          precautions: "Monitor electrolytes and kidney function",
          interactionAlerts: "May interact with digoxin and lithium"
        },
        "Tamsulosin": {
          activeIngredients: "Tamsulosin",
          dosage: "0.4 mg once daily",
          sideEffects: "Dizziness, headache, abnormal ejaculation",
          precautions: "Take with caution in patients with a history of prostate issues",
          interactionAlerts: "May interact with other alpha blockers"
        },
        "Doxycycline": {
          activeIngredients: "Doxycycline",
          dosage: "100 mg every 12 hours for 7-14 days",
          sideEffects: "Upset stomach, sun sensitivity, headache",
          precautions: "Avoid direct sunlight; take with a full glass of water",
          interactionAlerts: "May interact with antacids and dairy products"
        },
        Fluoxetine: {
          activeIngredients: "Fluoxetine",
          dosage: "20 mg once daily",
          sideEffects: "Nausea, insomnia, sexual dysfunction",
          precautions: "Monitor for serotonin syndrome; avoid abrupt withdrawal",
          interactionAlerts: "May interact with other antidepressants"
        },
        "Zolpidem": {
          activeIngredients: "Zolpidem",
          dosage: "5-10 mg before bedtime",
          sideEffects: "Drowsiness, dizziness, headache",
          precautions: "Use only for short-term insomnia treatment",
          interactionAlerts: "May interact with alcohol and other sedatives"
        },
        "Azithromycin": {
          activeIngredients: "Azithromycin",
          dosage: "500 mg on day 1, followed by 250 mg daily for 4 days",
          sideEffects: "Diarrhea, nausea, abdominal pain",
          precautions: "Avoid in patients with liver issues",
          interactionAlerts: "May interact with antacids"
        },
        "Venlafaxine": {
          activeIngredients: "Venlafaxine",
          dosage: "75 mg once daily",
          sideEffects: "Nausea, dizziness, dry mouth",
          precautions: "Monitor for suicidal thoughts; taper off slowly",
          interactionAlerts: "May interact with other antidepressants"
        },
        "Levothyroxine": {
          activeIngredients: "Levothyroxine",
          dosage: "50-100 mcg once daily",
          sideEffects: "Nervousness, palpitations, weight loss",
          precautions: "Monitor thyroid function regularly",
          interactionAlerts: "May interact with iron and calcium supplements"
        },
        "Candesartan": {
          "activeIngredients": "Candesartan",
          "dosage": "8-32 mg once",
        }
    }



    function searchMedicine() {
        const searchInput = document.getElementById("medicineSearch").value;
        const medicineInfo = document.getElementById("medicineInfo");
        const medicine = medicines[searchInput];
    
        if (medicine) {
            medicineInfo.innerHTML = `
                <h3>${searchInput}</h3>
                <p><strong>Active Ingredients:</strong> ${medicine.activeIngredients}</p>
                <p><strong>Dosage:</strong> ${medicine.dosage}</p>
                <p><strong>Side Effects:</strong> ${medicine.sideEffects}</p>
                <p><strong>Precautions:</strong> ${medicine.precautions}</p>
                <p><strong>Interaction Alerts:</strong> ${medicine.interactionAlerts}</p>
            `;
        }
         
        
        else {
            medicineInfo.innerHTML = `<p>Sorry, we couldn't find any information for "${searchInput}".</p>`;
        }
    }
    
    // Function to show different sections
    function showHome() {
        document.getElementById("home").classList.add("active");
        document.getElementById("about").classList.remove("active");
        document.getElementById("login").classList.remove("active");
        document.getElementById("register").classList.remove("active");
        document.getElementById("services").classList.remove("active");
    }
    
    function showForm(formType) {
        document.getElementById("home").classList.remove("active");
        document.getElementById("about").classList.remove("active");
        document.getElementById("login").classList.remove("active");
        document.getElementById("register").classList.remove("active");
        document.getElementById("services").classList.remove("active");
    
        document.getElementById(formType).classList.add("active");
    }
    
    function showServices() {
        document.getElementById("home").classList.remove("active");
        document.getElementById("about").classList.remove("active");
        document.getElementById("login").classList.remove("active");
        document.getElementById("register").classList.remove("active");
        document.getElementById("services").classList.add("active");
    }
    // Function to show the login or register form
function showForm(formType) {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'none';
    if (formType === 'login') {
      document.getElementById('login').style.display = 'block';
    } else if (formType === 'register') {
      document.getElementById('register').style.display = 'block';
    }
  }
  
  // Function to show home section
  