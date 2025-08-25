# TENKI-JAPAN Keyword Advertisement Dashboard

A web application that helps Rakuten sellers analyze and optimize their product keywords for better search visibility.

## 📋 What This Project Does

This is an interactive dashboard that:
- Shows keyword rankings for Rakuten products (both RPP ads and organic search)
- Displays performance data in easy-to-read tables and charts
- Provides AI-powered recommendations for improving product titles and keywords
- Offers a sample report that can be customized for different shops
- Supports both Japanese and English languages

## 🗂️ Project Structure

```
├── index.html          # Main webpage structure
├── styles.css          # All visual styling and layout
├── script.js           # Interactive functionality and data handling
├── old/                # Original combined file (reference only)
│   └── index_best_working.html
└── README.md           # This documentation file
```

## 🚀 How to Use

### Opening the Application
1. Open `index.html` in any web browser
2. The page will load with sample data from a demo shop
3. You can switch between Japanese and English using the language toggle

### Features Available

#### 🏪 Shop Branding
- Displays shop logo and name
- Shows customized content based on shop ID

#### 📊 Keyword Analysis
- **Product Selection**: Click different products to see their keyword data
- **Keyword Table**: Shows RPP rank, organic rank, and last update time
- **Statistics**: Summary of total keywords analyzed and RPP coverage

#### 🤖 AI Recommendations
- Automated suggestions for product title improvements
- Recommended keywords to add for better visibility
- Action plans specific to each product

#### 📱 Responsive Design
- Works on desktop, tablet, and mobile devices
- Auto-adjusting layout for different screen sizes

## ⚙️ Technical Details

### HTML Structure (`index.html`)
- **Header**: Navigation and branding
- **Hero Section**: Main value proposition and sample preview
- **Benefits**: Three key advantages of the service
- **Sample Demo**: Interactive product selection and keyword display
- **AI Section**: Automated recommendations display
- **Process**: Step-by-step service explanation
- **Contact Form**: HubSpot integration for lead capture
- **Footer**: Additional navigation and language toggle

### CSS Organization (`styles.css`)
The stylesheet is organized into logical sections:

1. **CSS Variables**: Color scheme and design tokens
2. **Base Styles**: Typography and reset styles
3. **Layout**: Grid systems and containers
4. **Components**: Reusable UI elements (buttons, cards, badges)
5. **Tables**: Data display formatting
6. **Forms**: Input and form styling
7. **Mobile Responsive**: Breakpoints and mobile optimizations

### JavaScript Functionality (`script.js`)
The JavaScript is divided into feature areas:

1. **Internationalization**: Japanese/English language switching
2. **Data Loading**: CSV and JSON data processing
3. **UI Rendering**: Dynamic content display
4. **Product Selection**: Interactive item switching
5. **Auto-advance**: Automatic product cycling for demos
6. **Form Handling**: Contact form submission
7. **Mobile Optimization**: Touch and responsive behaviors

## 🔧 Configuration Options

### URL Parameters
You can customize the application using URL parameters:

```
?lang=en              # Set language (ja/en)
?shop=Shop+Name       # Custom shop name
?shop_logo=logo.jpg   # Custom shop logo
?data=data.json       # Custom data source
?csv1=keywords.csv    # Custom keyword data
?csv2=items.csv       # Custom product data
?unlock=1             # Remove demo restrictions
```

### Data Sources
The application supports multiple data formats:
- **JSON**: Complete dataset with metadata
- **CSV**: Keyword and product data in spreadsheet format
- **Mixed**: CSV for data, JSON for configuration

## 📈 Data Format

### Keyword Data (CSV)
```csv
キーワード,RPP順位,自然順位,計測時刻,商品管理番号
keyword1,5,12,2025-01-15 10:30,item001
keyword2,,-,2025-01-15 10:30,item001
```

### Product Data (CSV)
```csv
商品管理番号,商品名,商品画像URL
item001,Sample Product,https://example.com/image.jpg
item002,Another Product,https://example.com/image2.jpg
```

## 🎨 Customization

### Branding
- Update logo URLs in the settings
- Modify color scheme in CSS variables
- Change shop name and description text

### Content
- Translate interface text in the I18N object
- Update sample data URLs
- Modify form fields and validation

### Styling
- Adjust responsive breakpoints
- Update component colors and spacing
- Modify animation timing and effects

## 🔒 Demo Mode Features

The application includes a demo mode that:
- Blurs sensitive keyword data after the first few rows
- Shows sample data instead of real shop information
- Displays a lock notice encouraging form submission
- Can be disabled with the `unlock=1` parameter

## 🌐 Browser Compatibility

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Android Chrome 90+
- **Features Used**: CSS Grid, Flexbox, ES6 JavaScript, Fetch API

## 📱 Mobile Optimization

- Touch-friendly interface with larger tap targets
- Responsive typography that scales appropriately
- Optimized table scrolling for keyword data
- Collapsible navigation for smaller screens
- Auto-sizing product list for mobile viewing

## 🔄 Auto-advance Feature

The product selection automatically cycles through items to showcase different datasets:
- 3-second intervals between products
- Stops when user manually selects a product
- Resumes after page reload
- Smooth scrolling to keep selected item visible

## 🎯 Performance Considerations

- **Lazy Loading**: Images load only when needed
- **Efficient Rendering**: DOM updates are batched
- **Memory Management**: Event listeners are properly cleaned up
- **Network Optimization**: CSV parsing handles large datasets efficiently

## 📞 Support and Integration

### HubSpot Integration
- Form submissions go to HubSpot CRM
- Auto-prefills shop information when available
- Supports custom form field mapping

### Analytics
- Page view tracking ready for Google Analytics
- Event tracking for user interactions
- Conversion tracking for form submissions

## 🚀 Deployment

1. Upload all files to your web server
2. Ensure CSV/JSON data files are accessible
3. Update data URLs in the configuration
4. Test responsive behavior on various devices
5. Configure HubSpot form integration if needed

## 🔍 Troubleshooting

### Common Issues
- **Blank data**: Check CSV file encoding (UTF-8 vs Shift-JIS)
- **Mobile layout**: Verify viewport meta tag is present
- **Form not working**: Confirm HubSpot integration settings
- **Images not loading**: Check image URLs and CORS policies

### Debug Mode
Add `?debug=1` to the URL to enable console logging for data loading and processing.

---

*This project provides a complete keyword analysis dashboard for Rakuten sellers, with professional presentation and easy customization options.*