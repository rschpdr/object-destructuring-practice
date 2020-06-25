function capitalize(word) {
  if (word[0] && typeof word === 'string') {
    if (word.includes(' ')) {
      const wordArr = word.split(' ');
      return wordArr.map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ');
    }
    return word[0].toUpperCase() + word.substring(1);
  }

  return word;
}

const data = {
  arr: [1, 2],
  name: {
    firstName: 'ana',
    lastName: 'marino',
  },
  isStudent: true,
  favoriteFootballTeam: 'fc barcelona',
  hometown: {
    city: 'buenos aires',
    country: 'argentina',
  },
};

// const {name, hometown} = data;

// console.log(`Meu nome é ${name.firstName + ' ' + name.lastName} e eu moro em ${hometown.city}, ${hometown.country}`)

const { name: {firstName, lastName}, favoriteFootballTeam, hometown: {city, country} } = data;

console.log(`Student ${capitalize(firstName)} ${capitalize(lastName)}, from ${capitalize(city)} (${capitalize(country)}) loves ${favoriteFootballTeam.split(' ')[0].toUpperCase()} ${capitalize(favoriteFootballTeam.split(' ')[1])}.`);

// Iterar as proriedades de um objeto
for (let key in data) {
  // Verificar tipo das propriedades do objeto
  console.log(typeof data[key])
  // CUIDADO! typeof retorna 'object' para arrays. Para checar se a propriedade é uma array, use:
  console.log(Array.isArray(data[key]))
}
