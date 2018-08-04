const RobotFactory = require("./robotFactory.js");

//DRIVER CODE (TIDAK BOLEH DIUBAH!!)
let wall_e = RobotFactory.produceRobot('wall-e', 6);
let baymax = RobotFactory.produceRobot('baymax', 5);
let autobot = RobotFactory.produceRobot('autobot', 3);

wall_e.forEach(w => {
  w.work();
});

baymax.forEach(b => {
  b.heal();
});

autobot.forEach(a => {
  a.defend();
});

// ============output yang diharapkan:
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Wall-E cleans the planet
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// Hi, I am BayMax, how may I help you?
// AutoBot, let's roll!
// AutoBot, let's roll!
// AutoBot, let's roll!
