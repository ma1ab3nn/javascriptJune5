
  function calculatePercentage (number, percentage){
        return (number * (percentage/100));
  }

  console.log(calculatePercentage (200, 5));



  function drinkOrder (size, buttonName) {
    
    switch (buttonName) {
        case "cola":
          console.log(`You have ordered a ${size} cola`);
          break;
        case "lemon":
            console.log(`You have ordered a ${size} lemonade`);
            break;
        case "orange":
            console.log(`You have ordered a ${size} orangeade`);
            break;
        default:
            console.log(`Please make your choice again`);
            break;
      }

  }

  console.log(drinkOrder (`small`, `oranges`));



  function calculator (number1, number2, operator) {

    switch (operator) {
        case "+":
          console.log(number1 + number2);
          break;
        case "-":
            console.log(number1 - number2);
            break;
        case "*":
            console.log(number1 * number2);
            break;
        case "/":
            console.log(number1 / number2);
            break;
        default:
            console.log(number1 % number2);
            break;
      }

  }

  console.log(calculator (100, 1, "/"));
