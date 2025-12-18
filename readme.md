# BMR & Daily Calorie Estimator

## Overview
This project is a web-based application that calculates a user's Basal Metabolic Rate (BMR) and estimated daily calorie needs based on their gender, height, weight, age, and activity level.  
Focus is on clean logic, modular JavaScript, and user-friendly results.

## Formula Used
**Male:** BMR = 10 × weight + 6.25 × height − 5 × age + 5  
**Female:** BMR = 10 × weight + 6.25 × height − 5 × age − 161  

## Activity Level Adjustment
Daily calorie needs (TDEE) = BMR × Activity Factor:  
- Sedentary: 1.2  
- Lightly active: 1.375  
- Moderately active: 1.55  
- Very active: 1.725  

## Features
- Input validation for realistic values  
- Calculates BMR and daily calories only for selected gender  
- Modular JavaScript design (class-based)  
- Clean and simple user interface  

## Assumptions & Limitations
- Results are estimates, not medical advice  
- Does not account for body fat percentage or health conditions  

## How to Run
1. Open `index.html` in any modern web browser.


