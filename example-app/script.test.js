import { addTwoNumbers, myRobot } from "./script";

test("returns sum of two numbers", () => {
  expect(addTwoNumbers(1, 2)).toBe(3);
  expect(addTwoNumbers(5, 5)).toBe(10);
});

// integration
test("robot can speak math", () => {
  expect(myRobot.add(10, 5)).toBe("10 plus 5 equals 20!");
  expect(myRobot.add(1, 3)).toBe("1 plus 3 equals 4!");
});
