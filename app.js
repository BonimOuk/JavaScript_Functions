console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
  for (let i = 0; i < count.length; i++) {
    if (count % 2 !== 0) {
      console.log(count);
    } else {
      console.log("Odd");
    }
  }
}

printOdds(3);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  let aboveSixteen = `Congrats ${userName}, you can drive!`;
  let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  if (age < 16 || userName.length !== 0) {
    console.log(belowSixteen);
  } else {
    console.log(aboveSixteen);
  }
}

checkAge("Steve", 30);

// Exercise 3: Which Quadrant?
console.log("EXERCISE 3:\n==========\n");

function quadrant(x, y) {
  if (x > 0 && y > 0) console.log(`(${x}, ${y}) is in Quadrant 1`);
  else if (x < 0 && y > 0) console.log(`(${x}, ${y}) is in Quadrant 2`);
  else if (x < 0 && y < 0) console.log(`(${x}, ${y}) is in Quadrant 3`);
  else if (x > 0 && y < 0) console.log(`(${x}, ${y}) is in Quadrant 4`);
  else if (x == 0 && y != 0) console.log(`(${x}, ${y}) is on the x axis`);
  else if (x != 0 && y == 0) console.log(`(${x}, ${y}) is on the y axis`);
  else console.log(`(${x}, ${y}) is at origin`);
}
quadrant(0, 2);

// Exercise 4: What type of triangle?
console.log("EXERCISE 4:\n==========\n");
const validTriangle = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

const determineTriangle = (a, b, c) => {
  let valid = validTriangle(a, b, c);

  if (valid) {
    if (a == b && b == c) return `Equilateral`;
    else if (a == b || b == c || a == c) return `Isosceles`;
    else return `Not a valid triangle`;
  }
};
console.log(determineTriangle(2, 2, 1));

// Exercise 5: Data Plan Status
console.log("EXERCISE 5:\n==========\n");
function dataPlan(planLimit, day, usage) {
  console.log(`${day} days used, ${30 - day} days remaining`);
  const averageDailyLimit = planLimit / 30;
  console.log(`Average daily use: ${averageDailyLimit.toFixed(3)} GB/day`);
  const averageUsed = usage / day;
  let overOrUnder = "";
  if (averageUsed > averageDailyLimit) {
    overOrUnder = "EXCEEDING";
  } else if (averageUsed < averageDailyLimit) {
    overOrUnder = "UNDER";
  } else {
    overOrUnder = "AT";
  }

  console.log(
    `You are ${overOrUnder} your average daily use (${averageUsed.toFixed(
      2
    )} GB/day).`
  );
  if (averageUsed > averageDailyLimit) {
    let totalExpectedUsage = usage + averageUsed * (30 - day);
    const exceedingBy = totalExpectedUsage - planLimit;
    console.log(
      `Continuing this high usage, you'll exceed your data plan by ${exceedingBy.toFixed(
        1
      )} GB.`
    );

    const necessaryUsage = (planLimit - usage) / (30 - day);

    console.log(
      `To stay below your data plan, use no more than ${necessaryUsage.toFixed(
        2
      )} GB/day.\n\n\n\n`
    );
  }
}

dataPlan(100, 15, 56);
