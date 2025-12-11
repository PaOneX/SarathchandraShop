home();
async function home() {
  let res = await fetch("components/home/home.html");
  let data = await res.text();
  document.getElementById("root").innerHTML = data;

  loadNewArrivals();
  loadWomenProducts();
}

// fetch("components/login/login.html").then(res=>res.text()).then(data=>{
//     document.getElementById("root").innerHTML=data;
// })

// navigator.geolocation.getCurrentPosition(getPosition)

// function getPosition(position){
// console.log(position)
// }

// Function to generate product card HTML
function generateProductCard(item) {
  const fullStars = Math.floor(item.rating.stars);
  const hasHalfStar = item.rating.stars % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="bi bi-star-fill"></i>';
  }
  if (hasHalfStar) {
    starsHTML += '<i class="bi bi-star-half"></i>';
  }
  for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsHTML += '<i class="bi bi-star"></i>';
  }

  let badgeHTML = "";
  if (item.badge) {
    const badgeClass =
      item.badge.type === "danger"
        ? "bg-danger"
        : item.badge.type === "primary"
        ? "bg-success"
        : "bg-warning";
    badgeHTML = `<span class="badge ${badgeClass} product-badge rounded-pill">${item.badge.text}</span>`;
  }

  let priceHTML = `<span class="h4 mb-0 fw-bold">$${item.price.current.toFixed(
    2
  )}</span>`;
  if (item.price.old) {
    priceHTML += `<span class="text-muted text-decoration-line-through">$${item.price.old.toFixed(
      2
    )}</span>`;
  }

  const html = `
    <div class="col-md-6 col-lg-3">
      <div class="card product-card border-0 rounded-3">
        <div class="product-image">
          <img src="${item.image}" class="card-img-top" alt="${item.title}">
          ${badgeHTML}
          <div class="product-icons">
            <button class="icon-btn"><i class="bi bi-heart"></i></button>
            <button class="icon-btn"><i class="bi bi-eye"></i></button>
          </div>
        </div>
        <div class="card-body p-3">
          <p class="text-muted text-uppercase small mb-2 fw-semibold">${item.category}</p>
          <h5 class="card-title fw-semibold mb-2">${item.title}</h5>
          <div class="d-flex align-items-center gap-2 mb-2">
            <span class="stars">${starsHTML}</span>
            <span class="text-muted small">(${item.rating.reviews})</span>
          </div>
          <div class="d-flex align-items-center gap-2 mb-3">
            ${priceHTML}
          </div>
          <button class="btn btn-dark w-100 rounded-2 fw-semibold">Add to Cart</button>
        </div>
      </div>
    </div>`;

  return html;
}

// Load women's products into cardsection1
async function loadWomenProducts() {
  try {
    let res = await fetch("json/newArrivals.json");
    let data = await res.json();

    if (!Array.isArray(data) || data.length === 0) return;

    const container = document.getElementById("womenCardSection");
    if (!container) return;

    // Filter only Women's products
    const womenProducts = data.filter((item) => item.category === "Women");

    container.innerHTML = "";

    womenProducts.forEach((item) => {
      const html = generateProductCard(item);
      container.innerHTML += html;
    });
  } catch (error) {
    console.error("Error loading women's products:", error);
  }
}

// Load new arrivals into cardsection0
async function loadNewArrivals() {
  try {
    let res = await fetch("json/newArrivals.json");
    let data = await res.json();

    if (!Array.isArray(data) || data.length === 0) return;

    const container = document.getElementById("NewArrivalcardSection");
    if (!container) return;

    // Filter products with "New" badge
    const newProducts = data.filter(
      (item) => item.badge && item.badge.text === "New"
    );

    container.innerHTML = "";

    newProducts.forEach((item) => {
      const html = generateProductCard(item);
      container.innerHTML += html;
    });
  } catch (error) {
    console.error("Error loading new arrivals:", error);
  }
}

// Call on page load
