const btn = document.getElementById('submit-input');
const BASE_URL = `https://breaking-bad-quotes.herokuapp.com/v1/quotes`;
const outputDiv = document.getElementById('output');
const loader = document.getElementById('loader');
function showLoader() {
  loader.classList.add('show');
}

function hideLoader() {
  loader.classList.remove('show');
}

async function fetchData() {
  showLoader();
  const res = await fetch(`${BASE_URL}`);
  const data = await res.json();
  showDataDOM(data);
}

function showDataDOM(data) {
  hideLoader();
  let output = '';
  data.forEach((quote) => {
    output += `
    <div class="card">
    <p><span class="char-highlight">Character:</span>${quote.author}</p>
    <p><span class="quote-hightlight">Quote:</span>${quote.quote}</p>
  </div>
    `;
  });
  outputDiv.innerHTML = output;
}

// EVENT LISTENERS
btn.addEventListener('click', fetchData);
