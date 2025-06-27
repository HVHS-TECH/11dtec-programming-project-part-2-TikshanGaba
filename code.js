 function calculatePrice() {
            // Get user input values
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const carType = document.getElementById("carType").value;
            const rentalDays = document.getElementById("rentalDays").value;

            // Basic input validation
            if (!name || !age || rentalDays <= 0 || rentalDays === "") {
                alert("Please fill in all fields correctly.");
                return;
            }

            // Age verification (e.g., user must be 18 or older)
            if (age < 18) {
                alert("You must be at least 18 years old to rent a car.");
                return;
            }

            // Car pricing logic
            let dailyRate = 0;

            if (carType === "sedan") {
                dailyRate = 40;
            } else if (carType === "suv") {
                dailyRate = 60;
            } else if (carType === "sports") {
                dailyRate = 100;
            }

            // Calculate total price
            const totalPrice = dailyRate * rentalDays;

            // Show the result
            document.getElementById("totalPrice").innerText = totalPrice;
            document.getElementById("result").style.display = "block";
        }