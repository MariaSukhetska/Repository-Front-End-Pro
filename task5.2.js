let dollarRate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    let hryvnias = dollars * dollarRate;
    console.log(`${dollars} $ = ${hryvnias} hrn`);
}