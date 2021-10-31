let cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    //here we need to figure out if the city on state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

// 小数点できる
function numberWithCommas(x){
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  // console.log(matchArray);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `<li><span class="name">${cityName},${stateName}</span><span class="population">人口：${numberWithCommas(place.population)}人</span></li>`;
    })
    .join('');
  suggestions.innerHTML = html;
}

const serachInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

serachInput.addEventListener('change', displayMatches);
serachInput.addEventListener('keyup', displayMatches);
