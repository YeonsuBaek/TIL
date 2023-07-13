document.querySelector('#app').innerHTML = `
    <h1>Hello Vite!</h1>
    <pre id='result'></pre>
  </div>
`;

async function fetchDataAndDisplay() {
  const response = await fetch(`/api/test`);
  const json = await response.json();

  document.querySelector('#result').innerHTML = JSON.stringify(json, null, 2);
}

fetchDataAndDisplay();
