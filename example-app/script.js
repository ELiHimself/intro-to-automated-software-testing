export const addTwoNumbers = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

export const myRobot = {
  sayHello: () => {
    console.log("Hello i am your math genius robot!");
  },
  add: (num1, num2) => {
    const result = addTwoNumbers(num1, num2);
    return num1 + " plus " + num2 + " equals " + result + "!";
  },
};

export const initRobot = () => {
  const btn = document.getElementById("submit");
  const robotText = document.getElementById("robot-speaks");

  btn.onclick = () => {
    const numberOne = parseInt(document.getElementById("number-one").value);
    const numberTwo = parseInt(document.getElementById("number-two").value);
    const answer = myRobot.add(numberOne, numberTwo);
    robotText.innerText = answer;
  };
};

initRobot();
