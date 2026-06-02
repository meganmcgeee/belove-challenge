# Be LOVE™ — Testimonial Carousel Section

A premium, zero-dependency Shopify 2.0 testimonial slider powered by native **CSS Scroll-Snap** and a lightweight **HTML5 Web Component** (`<testimonial-carousel>`).

---

## Shopify Admin Setup

### 1. Create the Testimonial Metaobject
Go to **Settings > Custom data > Metaobjects > Add definition**:
* **Name**: `Testimonial` (Handle: `testimonial`)
* **Fields**:
  1. `image` (File - Images only, Optional)
  2. `reviewer_name` (Single line text, Required)
  3. `title` (Single line text, Required)
  4. `review_body` (Rich text, Required)
  5. `rating` (Integer, 1–5, Required)

### 2. Link to Products
Go to **Settings > Custom data > Products > Add definition**:
* **Name**: `Product Testimonials`
* **Namespace and key**: `custom.testimonials`
* **Type**: **Metaobject** (Check **List of entries** and select **Testimonial** as the reference)

*Note: If a product lacks metafield data, the section automatically displays realistic beverage-themed fallback reviews inside the editor.*

---

## Local Development Setup

> [!NOTE]
> You must have the [Shopify CLI](https://shopify.dev/docs/api/shopify-cli) installed on your system to run the commands below.

Run the following commands in your terminal to authenticate and run the preview:

```bash
# 1. Login to your store
shopify login --store your-sandbox-store.myshopify.com

# 2. Start preview server
shopify theme dev
```

---

## Key  Features
* **Core Web Vitals Optimized**: Utilizes CSS scroll-snapping and a light vanilla JS class for chevron clicks, avoiding heavy slider libraries to preserve page speed.
* **Mockup Card Style**: Light grey cards (`#f8f9fa` background, rounded borders, circular avatars, and bolded names).
* **Smart Arrow Visibility**: Arrow buttons automatically hide if there are less than 4 reviews.
* **ADA/WCAG Compliant**: Focusable slider track (`tabindex="0"` for keyboard scrolling), semantic ARIA regions, and visually-hidden text tags (`5 out of 5 stars`) replacing raw unicode star characters.

---

## Relevant Files
* `sections/testimonial-carousel.liquid` (Liquid template, fallbacks, schema controls)
* `assets/carousel.css` (Carousel & card layouts)
* `assets/carousel.js` (Web Component slide interactions)
* `assets/avatar-placeholder.svg` (Circular avatar silhouette fallback)
