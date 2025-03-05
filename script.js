// Данные о процессорах
const processors = [
  {
    name: "Intel Core i9-12900K",
    cores: "16 ядер",
    threads: "24 потока",
    frequency: "3.2 GHz",
    image: "images/intel-i9.jpg"
  },
  {
    name: "AMD Ryzen 9 5900X",
    cores: "12 ядер",
    threads: "24 потока",
    frequency: "3.7 GHz",
    image: "images/amd-ryzen9.jpg"
  }
];

// Данные о видеокартах
const graphicsCards = [
  {
    name: "NVIDIA GeForce RTX 3080",
    memory: "10 GB GDDR6X",
    cores: "8704 ядра CUDA",
    image: "images/rtx3080.jpg"
  },
  {
    name: "AMD Radeon RX 6800 XT",
    memory: "16 GB GDDR6",
    cores: "4608 потоковых процессоров",
    image: "images/rx6800xt.jpg"
  }
];

// Функция для отображения процессоров
function displayProcessors() {
  const processorsList = document.getElementById("processors-list");
  processors.forEach(processor => {
    const processorCard = document.createElement("div");
    processorCard.classList.add("card");
    processorCard.innerHTML = `
      <img src="${processor.image}" alt="${processor.name}">
      <h3>${processor.name}</h3>
      <p>Ядра: ${processor.cores}</p>
      <p>Потоки: ${processor.threads}</p>
      <p>Частота: ${processor.frequency}</p>
    `;
    processorsList.appendChild(processorCard);
  });
}

// Функция для отображения видеокарт
function displayGraphicsCards() {
  const graphicsCardsList = document.getElementById("graphics-cards-list");
  graphicsCards.forEach(card => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card");
    cardItem.innerHTML = `
      <img src="${card.image}" alt="${card.name}">
      <h3>${card.name}</h3>
      <p>Память: ${card.memory}</p>
      <p>Ядра: ${card.cores}</p>
    `;
    graphicsCardsList.appendChild(cardItem);
  });
}

// Вызовы функций для загрузки данных на страницы
if (document.getElementById("processors-list")) {
  displayProcessors();
}

if (document.getElementById("graphics-cards-list")) {
  displayGraphicsCards();
}
