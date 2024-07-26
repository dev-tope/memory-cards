
const url = "https://premier-league-players1.p.rapidapi.com/players";
const headers =  {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'db6fae8450mshace61034411bbc7p16602cjsn2d0f979d1b8a',
    'x-rapidapi-host': 'premier-league-players1.p.rapidapi.com'
  }
};

// async function getPlayers() {
//   const res = await fetch(url, headers);
//   const data = await res.json();
//   return data.filter(item => item.pid <= 12)
// }

export { url, headers }