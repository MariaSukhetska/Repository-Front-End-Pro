const currentYear = new Date().getFullYear();

let birthYear = prompt('Enter your year of birth: ');
if (birthYear === null) {
  console.log("It's a pity you didn't want to enter your year of birth.");
} else {
  let city = prompt('Enter your city: ');
  if (city === null) {
    console.log("It's a pity you didn't want to enter your city.");
  } else {
    let sport = prompt('Enter your favourite sport: ');
    if (sport === null) {
      console.log("It's a pity you didn't want to enter your favourite sport.");
    } else {
      const age = currentYear - parseInt(birthYear);

      console.log(`You entered year of birth: ${birthYear}`);
      console.log(`You are ${age} years old.`);
      if (city === 'Kiyv') {
        console.log('You live in the capital of Ukraine.');
      } else if (city === 'Washington') {
        console.log('You live in the capital of the USA.');
      } else if (city === 'London') {
        console.log('You live in the capital of the United Kingdom.');
      } else {
        console.log('You live in ' + city + '.');
      }

      console.log(`Your favourite sport is: ${sport}`);

      if (sport.toLowerCase() === 'football') {
        console.log('Cool! Do you want to become like Messi?');
      } else if (sport.toLowerCase() === 'box') {
        console.log('Cool! Do you want to become like Usyk?');
      } else if (sport.toLowerCase() === 'gymnastics') {
        console.log('Cool! Do you want to become like Podkopayeva?');
      }
    }
  }
}