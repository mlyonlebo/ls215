// The band countries are wrong: all the bands should have 'Canada' as the country.

// iterate through the bands array (forEach)
// set band['country'] = 'Canada'

// Remove dots from names:
  // regex = /\./
  // band['name'].replace(regex, '');

// capitalize names:
// band['name'].split(' ');
// iterate through words and replace word[0] = word[0].toUppercase();

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function sanitizeName(str) {
  return str.split(' ')
    .map((word) => {
      word = word.replace(/\./, '');
      let firstLetter = word[0].toUpperCase();
      return word.replace(/^[a-z]/, firstLetter);
  }).join(' ');
}

function processBands(data) {
  data.forEach((band) => {
    band['country'] = 'Canada';
    band['name'] = sanitizeName(band['name']);
  });
  return data;
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]