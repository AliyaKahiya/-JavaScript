var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
  guess = prompt("Это игра Морской бой. Твоя цель - потопить корабль врага, который расположен в 3-х ячейках из 7, используя минимальное количество попыток. Готовься, целься и стреляй! (введи число от 0 до 6):");
  if (guess < 0 || guess > 6) {
    alert ("Пожалуйста, введи число от 0 до 6");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
    alert("Попал!");
    hits = hits +1;
      if (hits == 3) {
        isSunk = true;
        alert("Поздравляю! Ты потопил корабль врага.");
      }
    } else {
      alert("В этот раз удача не на твоей стороне.");
    }
  }
}
var stats = "Ты выстрелил " + guesses + " раз и потопил корабль. " +
              "Точность твоей стрельбы " + (3/guesses);
alert(stats);

[

]