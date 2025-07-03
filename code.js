 const cars = [
    {
      name: "Toyota Corolla",
      pricePerDay: 40,
      image: "Toyota.jpeg"
    },
    {
      name: "Honda Civic",
      pricePerDay: 45,
      image: "Civic.jpeg"
    },
    {
      name: "BMW 3 Series",
      pricePerDay: 80,
      image: "BM.jpeg"
    }
  ];

  const container = document.getElementById('car-list');

  cars.forEach((car, index) => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Price per day: $${car.pricePerDay}</p>
      <label>From: <input type="date" id="from-${index}"></label>
      <label>To: <input type="date" id="to-${index}"></label>
      <button onclick="bookCar(${index})">Book Now</button>
      <div class="price-output" id="price-${index}"></div>
    `;
    container.appendChild(card);
  });

  function bookCar(index) {
    const fromDate = new Date(document.getElementById(`from-${index}`).value);
    const toDate = new Date(document.getElementById(`to-${index}`).value);
    const output = document.getElementById(`price-${index}`);

    if (isNaN(fromDate) || isNaN(toDate)) {
      output.innerHTML = "❌ Please select valid dates.";
      return;
    }

    if (toDate < fromDate) {
      output.innerHTML = "❌ End date must be after start date.";
      return;
    }

    const timeDiff = toDate - fromDate;
    const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // include both start and end dates

    const total = days * cars[index].pricePerDay;
    output.innerHTML = `✅ Booked for ${days} days. Total: $${total}`;
  }