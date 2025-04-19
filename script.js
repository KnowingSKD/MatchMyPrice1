// script.js
function comparePrices() {
  const product = document.getElementById('productInput').value.trim();
  const category = document.getElementById('category').value;
  const resultsDiv = document.getElementById('results');

  if (!product) {
    alert("Please enter a product name.");
    return;
  }

  const query = `${category ? category + " " : ""}${product}`;

  const stores = [
    {
      name: "Amazon",
      url: `https://www.amazon.in/s?k=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/aboutamazon.com"
    },
    {
      name: "Flipkart",
      url: `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/flipkart.com"
    },
    {
      name: "Jio Mart",
      url: `https://www.jiomart.com/search?q=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/jiomart.com"
    },
    {
      name: "Shopsy",
      url: `https://www.shopsy.in/search?q=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/shopsy.ru"
    },
    {
      name: "Meesho",
      url: `https://www.meesho.com/search?q=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/meesho.io"
    },
    {
      name: "Myntra",
      url: `https://www.myntra.com/search?q=${encodeURIComponent(query)}`,
      logo: "https://img.logo.dev/myntra.com"
    },
    {
      name: "Official Site",
      url: `https://www.google.com/search?q=${encodeURIComponent(query + ' official site')}`,
      logo: "https://img.logo.dev/official-server.com"
    }
  ];

  resultsDiv.innerHTML = "";
  stores.forEach(store => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = `
      ${store.logo ? `<img src="${store.logo}" alt="${store.name} logo" style="height:40px; margin-bottom:10px;">` : ""}
      <h2>${store.name}</h2>
      <p>Click below to view real-time prices:</p>
      <a href="${store.url}" target="_blank">Search on ${store.name}</a>
    `;
    resultsDiv.appendChild(div);
  });
}