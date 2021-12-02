const generateNumbers = () => {
  let numbers = [];
  while (numbers.length < 20) {
    let num = Math.floor(Math.random() * 100) + 1;
    if (numbers.indexOf(num) === -1) {
      numbers.push(num);
    }
  }
  return numbers
}

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const splitNumbersIntoColumns = (numbersArray) => {
  let dividedNumbers = {
    even: [],
    odd: []
  }

  for (let number of numbersArray) {
    if (isEven(number)) {
      dividedNumbers.even.push(number);
    } else {
      dividedNumbers.odd.push(number);
    }
  }

  dividedNumbers.odd.sort((a, b) => a - b);
  dividedNumbers.even.sort((a, b) => a - b);

  return dividedNumbers;
}

const displayNumbers = () => {

  const numbersContainer = document.querySelector(".numbers__container");
  numbersContainer.innerHTML = "";

  let numbers = generateNumbers();
  let dividedNumbers = splitNumbersIntoColumns(numbers);

  const oddColumn = document.createElement("div");
  oddColumn.classList.add("numbers__column");

  let oddTitle = document.createElement("p");
  oddTitle.innerText = "Odd";
  oddTitle.classList.add("numbers__column--title");
  oddColumn.appendChild(oddTitle);

  for (number of dividedNumbers.odd) {
    let para = document.createElement("p");
    para.innerText = number;
    oddColumn.appendChild(para);
  }
  numbersContainer.appendChild(oddColumn);


  const evenColumn = document.createElement("div");
  evenColumn.classList.add("numbers__column");

  let evenTitle = document.createElement("p");
  evenTitle.innerText = "Even";
  evenTitle.classList.add("numbers__column--title");
  evenColumn.appendChild(evenTitle);

  for (number of dividedNumbers.even) {
    let para = document.createElement("p");
    para.innerText = number;
    evenColumn.appendChild(para);
  }
  numbersContainer.appendChild(evenColumn);
}

const button = document.querySelector(".btn");
button.addEventListener("click", displayNumbers);