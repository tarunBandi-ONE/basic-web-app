function isSquareAndCube(num : number)
{
  let sqrt = Math.pow(num, 1/2);
  let crt = Math.pow(num, 1/3);
  console.log(num,sqrt,crt);
  return Number.isInteger(sqrt) && Number.isInteger(crt);
}

export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
      return (
          "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
          "English poet, playwright, and actor, widely regarded as the greatest " +
          "writer in the English language and the world's pre-eminent dramatist."
      );
  } else if (query.toLowerCase().includes("name?")) {
      return ("Tarun Bandi");
  } else if (query.toLowerCase().includes("plus")) {
      const regex = /What is (\d+) plus (\d+)\?/;

      const match = query.match(regex);

      if (match) {
          const num1 = parseInt(match[1]);
          const num2 = parseInt(match[2]);

          const result = num1 + num2;
          return result.toString();
      } else {
        const regex = /What is (\d+) plus (\d+) plus (\d+)\?/;
        const match = query.match(regex);
        if (match)
        {
          const num1 = parseInt(match[1]);
          const num2 = parseInt(match[2]);
          const num3 = parseInt(match[3]);     
          const result = num1 + num2 + num3;   
          return result.toString();
        }
      }
  } else if ((query.toLowerCase().includes("largest"))) {
    const regex = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
    const match = query.match(regex);
    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const num3 = parseInt(match[3]);
      const result = Math.max(num1,num2,num3);
      return result.toString();
  } 
  
  else {
      return 'Invalid query format';
  }

  } else if ((query.toLowerCase().includes("multiplied")))
  {
    const regex = /What is (\d+) multiplied by (\d+)\?/;
    const match = query.match(regex);

    if (match) {
        const num1 = parseInt(match[1]);
        const num2 = parseInt(match[2]);

        const result = num1 * num2;
        return result.toString();
    } else {
        return 'Invalid query format';
    }
  }else if ((query.toLowerCase().includes("minus")))
  {
    const regex = /What is (\d+) minus (\d+)\?/;
    const match = query.match(regex);

    if (match) {
        const num1 = parseInt(match[1]);
        const num2 = parseInt(match[2]);

        const result = num1 - num2;
        return result.toString();
    } else {
        return 'Invalid query format';
    }
  }else if ((query.toLowerCase().includes("power")))
  {
    const regex = /What is (\d+) to the power of (\d+)\?/;
    const match = query.match(regex);

    if (match) {
        const num1 = parseInt(match[1]);
        const num2 = parseInt(match[2]);

        const result = num1 ** num2;
        return result.toString();
    } else {
        return 'Invalid query format';
    }
  } 
  else if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    // Extracting numbers from the query
    const numbersRegex = /Which of the following numbers is both a square and a cube: ((?:\d+, )*\d+)\?/;
    const numbersMatch = query.match(numbersRegex);

    if (numbersMatch) {
        const numbersList = numbersMatch[1].split(', ').map(Number);

        // Find numbers which are both square and cube
        const resultNumbers = numbersList.filter(number => {
            const squareRoot = Math.sqrt(number);
            const cubeRoot = Math.cbrt(number);
            return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
        });

        if (resultNumbers.length > 0) {
            return resultNumbers.join(', ');
        } else {
            return 'None';
        }
    } else {
        return 'Invalid query format';
    }
}
  return "";
}
