const cars = [
      {
        type: "Toyota Camry",
        rate: 40,
        seats: 5,
        image: "Toyota.jpeg"
      },
      {
        type: "Honda CR-V",
        rate: 50,
        seats: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/2020_Honda_CR-V_SR_VTEC_CVT_1.5_Front.jpg"
      },
      {
        type: "Ford Focus",
        rate: 35,
        seats: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/2018_Ford_Focus_ST-Line_EcoBoost_1.0.jpg"
      },
      {
        type: "BMW M4",
        rate: 60,
        seats: 2,
        image: "bmw-m4-cs-flyout.webp"
      },
      {
        type: "Ford F-150",
        rate: 55,
        seats: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/2018_Ford_F-150_XLT_SuperCrew_4x4.jpg"
      }
    ];

    const carSelect = document.getElementById("carSelect");
    cars.forEach((car, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${car.type} - $${car.rate}/day`;
      carSelect.appendChild(option);
    });

    function showSummary() {
      const selectedIndex = carSelect.value;
      const rentalDays = parseInt(document.getElementById("rentalDays").value);
      const paymentMethod = document.getElementById("paymentMethod").value;

      const car = cars[selectedIndex];
      const estimatedCost = rentalDays * car.rate;

      const summaryHTML = `
        <p><strong>Car Type:</strong> ${car.type}</p>
        <p><strong>Seats:</strong> ${car.seats}</p>
        <p><strong>Rental Duration:</strong> ${rentalDays} day(s)</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <p><strong>Daily Rate:</strong> $${car.rate}</p>
        <p><strong>Estimated Cost:</strong> $${estimatedCost.toFixed(2)}</p>
        <img src="${car.image}" alt="${car.type}" class="car-image" />
        <p>Thank you for choosing QuickRide Rentals!</p>
      `;

      document.getElementById("summary").innerHTML = summaryHTML;
    }