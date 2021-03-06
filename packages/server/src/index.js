const Api = require('@brother.bet/Api');
const RobotFifaArena = require('./Class/RobotFifaArena');
const UpdateFifaArena = require('./Class/UpdateFifaArena');

async function main() {
  const fifaArena = new UpdateFifaArena(Api, RobotFifaArena);
  await fifaArena.updateDaysAgo({ daysAgo: 7 });
  return fifaArena.loop({ secondsOfDelay: 600 });
}

const measure = async () => {
  console.time('Update Fifa Arena');
  await main();
  console.timeEnd('Update Fifa Arena');
};

measure();
