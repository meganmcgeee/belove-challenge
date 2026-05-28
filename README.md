# Be LOVE™ — Growth Engineer Take-Home Assignment

## Overview

This is a take-home exercise designed to give you the space to do your best work without the pressure of live coding. There are no trick questions — we want to see how you think, how you build, and how you communicate your decisions.

- **Time expectation:** 1–2 hours
- **Deliverable:** GitHub repo (preferred) or zip file

---

## The Scenario

Be LOVE wants a reusable carousel section that the marketing team can manage without touching code. It needs to work across product pages and standalone landing pages, and should be flexible enough to be populated either from metaobjects or blocks. Feel free to use whatever carousel library you prefer. See the image in the repo as an example for design (something along those lines, not looking for pixel perfect). Doesn't have to look exactly like the example image in this repo, just giving you a design resource. 

---

## What to Build

### Data & Architecture

The section must support **two content modes**, switchable via a section schema setting:

- **Metaobject mode** — testimonials are pulled dynamically from a product metafield that references a list of `testimonial` metaobjects
- **Block mode** — testimonials are added manually as blocks directly in the theme editor

**Metaobject schema to define (`testimonial`):**

| Field | Type |
|---|---|
| `image` | File reference |
| `name` | Single line text |
| `title` | Single line text |
| `body` | Multi-line text |
| `rating` | Integer (1–5) |

---

### Section Schema Settings

The following should be configurable in the Shopify theme editor:

- Section title and subtitle (text fields)
- Content mode toggle — metaobject or block
- Number of slides visible on **desktop**
- Number of slides visible on **mobile**

---

### Testimonial Card

Each card should display:

- Testimonial image (optional)
- Name
- Title
- Body copy
- Star rating

---

## What We Are Looking For
- Clean code & object architecture - client friendly editor settings
- Responsive design
- Meet acceptance criteria 
- Ability to explain what you built

---

## Submission

Please send one of the following:

- A link to a **GitHub repo** (public or shared access)
- A **zip file** containing your project files

Include your README at the root of the project.

---

## Questions

If anything is unclear, feel free to reach out. We'd rather you ask than guess. Email: chris@yosoymilk.com
