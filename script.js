// get your api key from cricketdata.org

async function getMatchData() {
  return await fetch(
    "https://api.cricapi.com/v1/currentMatches?apikey={your_api_key}&offset=0"
  )
    .then((data) => data.json())
    .then((data) => {
      if (data.status != "success") return;

      const matchesList = data.data;

      if (!matchesList) return [];

      const relevantData = matchesList
        .filter((match) => match.series_id == "{series_id}")
        .map((match) => `${match.name}, ${match.status}`);

      console.log({ relevantData });

      document.getElementById("matches").innerHTML = relevantData
        .map((match) => `<li>${match} </li>`)
        .join("");

      return relevantData;
    })
    .catch((e) => console.log(e));
}

getMatchData();
