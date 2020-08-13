const ages = [10,13,15,25];
const ages1 = [15,18,90,45];
const ages3 = [45,76,98];

const allAges = [...ages,...ages1,69,96,...ages3];
// console.log(allAges);

const business = 568;
const socib = 789;
const bank = 876;

// const count = Math.max(business,socib,bank);

const tkpoisa = [678,875,983];
const count = Math.max(...tkpoisa);
console.log(count);