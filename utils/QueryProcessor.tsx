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

      // Extracting numbers from the query
      const match = query.match(regex);

      if (match) {
          const num1 = parseInt(match[1]);
          const num2 = parseInt(match[2]);

          // Performing addition
          const result = num1 + num2;
          return result.toString();
      } else {
          return 'Invalid query format';
      }
  } else if ((query.toLowerCase().includes("largest"))) {
    const regex = /Which of the following numbers is the largest: (\d+), (\d+), (\d+)\?/;
    const match = query.match(regex);
    if (match) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const num3 = parseInt(match[3]);

      // Performing addition
      const result = Math.max(num1,num2,num3);
      return result.toString();
  } else {
      return 'Invalid query format';
  }

  }

  return "";
}
