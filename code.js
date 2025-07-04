const cars = [
      {
        type: "Toyota Camry",
        rate: 40,
        seats: 5,
        image: "Toyota.jpeg"
      },
      {
        type: "Honda Civic",
        rate: 50,
        seats: 5,
        image: "Civic.jpeg"
      },
      {
        type: "Ford Focus",
        rate: 35,
        seats: 4,
        image: "focus.jpeg"
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
        image: "F-150.jpeg"
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