# Sarathchandra Shop - Modern Clothing E-Commerce Website

A modern, responsive clothing e-commerce website built with **Bootstrap 5** and **JavaScript**. Features a dynamic product catalog loaded from JSON, sleek carousel, and category-based product sections.

## Features

- **Modern Design**: Clean, contemporary interface with glassmorphism effects and smooth animations
- **Responsive Layout**: Mobile-first design that works seamlessly on all devices
- **Dynamic Product Loading**: Products loaded from JSON file with category filtering
- **Product Showcase**:
  - New Arrivals section
  - Women's Collection
  - Men's Collection
  - Kids' Collection
  - Accessories
- **Interactive Carousel**: Beautiful banner carousel with smooth transitions
- **Product Cards**: Feature-rich product cards with:
  - Product images with zoom effect on hover
  - Star ratings with review counts
  - Price display with discount badges
  - Add to Cart button
  - Wishlist and Quick View buttons
- **Sticky Navbar**: Navigation bar stays visible while scrolling
- **Search & Cart Icons**: Quick access to search and shopping cart

## Project Structure

```
SarathchandraShop/
├── index.html              # Main landing page
├── components/
│   ├── home/
│   │   └── home.html       # Home page with carousel and products
│   ├── cart/
│   │   └── cart.html       # Shopping cart page
│   ├── login/
│   │   ├── login.html      # Login page
│   │   └── register.html   # Registration page
│   └── profile/
│       └── profile.html    # User profile page
├── css/
│   ├── navBar.css          # Navbar, carousel, and product card styles
│   └── login.css           # Login page styles
├── js/
│   └── app.js              # Main JavaScript logic
├── json/
│   └── newArrivals.json    # Product database
└── README.md               # Project documentation
```

## Technologies Used

- **Frontend Framework**: Bootstrap 5.3.2
- **Icons**: Bootstrap Icons 1.11.1
- **Styling**: Custom CSS with Bootstrap utilities
- **JavaScript**: Vanilla JavaScript for dynamic content
- **Data Format**: JSON for product catalog

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend or database required - all data is in JSON

### Installation

1. Clone or download this project
2. Open `index.html` in your web browser
3. The page will automatically load the home content with carousel and products

### File Descriptions

#### HTML Files
- **index.html**: Main landing page with navbar and product sections
- **home.html**: Contains carousel banner and product sections
- **login.html**: User login form with split-screen design
- **register.html**: User registration form
- **cart.html**: Shopping cart display
- **profile.html**: User profile management

#### CSS Files
- **navBar.css**: 
  - Navbar styling with sticky positioning (z-index: 1030)
  - Carousel styles (500px height, gradient overlay)
  - Product card hover effects and animations
  - Image zoom on hover
  - Responsive breakpoints for mobile/tablet/desktop

- **login.css**: Login page styling with split-screen layout

#### JavaScript Files
- **app.js**:
  - `home()`: Loads home.html and product data
  - `generateProductCard(item)`: Creates product card HTML
  - `loadNewArrivals()`: Filters and displays products with "New" badge
  - `loadWomenProducts()`: Filters and displays women's category products

#### Data Files
- **newArrivals.json**: Product database containing:
  - Product ID
  - Category (Women, Men, Kids, Accessories)
  - Title
  - Image URL
  - Badge (Sale, New, Hot badges with discount %)
  - Rating (stars and review count)
  - Price (current and original with discount %)

## Product Data Structure

```json
{
  "id": 1,
  "category": "Men",
  "title": "Black Hoodie",
  "image": "https://images.unsplash.com/...",
  "badge": { "text": "-30%", "type": "danger" },
  "rating": { "stars": 4.5, "reviews": 156 },
  "price": { "current": 44.99, "old": 64.99, "discountPercent": 30 }
}
```

## Key CSS Classes & Features

### Navbar
- `.navbar` with `z-index: 1030` to stay on top
- Sticky positioning for always-visible navigation
- Responsive mobile menu with hamburger toggle

### Carousel
- `.carousel-item` with 500px height
- Gradient overlay for text readability
- Smooth fade transitions
- Centered content with flexbox

### Product Cards
- `.product-card` with hover effects and box-shadow
- `.product-image` (350px on desktop, 280px on tablet)
- `.product-icons` hidden by default, visible on hover
- Star ratings using Bootstrap Icons
- Responsive grid (col-md-6 col-lg-3)

### Responsive Breakpoints
- **Mobile**: < 576px (single column)
- **Tablet**: 576px - 768px (2 columns)
- **Desktop**: > 768px (4 columns)

## How to Add New Products

1. Open `json/newArrivals.json`
2. Add a new product object to the array:
```json
{
  "id": 13,
  "category": "Men",
  "title": "Your Product Name",
  "image": "image-url-here",
  "badge": { "text": "Sale", "type": "danger" },
  "rating": { "stars": 4.8, "reviews": 120 },
  "price": { "current": 49.99, "old": 79.99, "discountPercent": 37 }
}
```
3. The product will automatically appear in the relevant sections

## How to Add New Categories

1. Update `app.js` with a new filter function:
```javascript
async function loadMenProducts() {
  // Similar to loadWomenProducts but filter for "Men"
}
```
2. Add a new section in `home.html`:
```html
<section class="py-5">
  <div class="container">
    <h2>Men's Collection</h2>
    <div class="row g-4" id="menCardSection"></div>
  </div>
</section>
```
3. Call the function on page load

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add shopping cart functionality
- [ ] Implement user authentication
- [ ] Add product filtering by price range
- [ ] Implement search functionality
- [ ] Add product details page
- [ ] Integrate payment gateway
- [ ] Add customer reviews system
- [ ] Implement wishlist persistence
- [ ] Add product comparison feature
- [ ] Backend API integration

## Color Scheme

- **Primary**: Bootstrap default (blue)
- **Accent**: Red (#dc3545) for sale badges
- **Green**: #198754 for "New" badges
- **Background**: Light gray (#f8f9fa) for alternating sections
- **Text**: Dark gray (#6c757d) for muted text

## Performance Tips

- Images are loaded from Unsplash CDN for optimal performance
- Bootstrap and Bootstrap Icons are loaded from CDN
- Minimal custom CSS for faster loading
- JSON data is lightweight and fast to parse

## Support & Contact

For questions or issues, please contact the development team.

## License

This project is created for educational purposes.

---

**Last Updated**: December 2025
**Version**: 1.0.0
