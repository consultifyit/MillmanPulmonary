# Enterprise Google Reviews Architecture

This document outlines the strategy for capturing and displaying Google Reviews from multiple locations without relying on expensive, branded, and rate-limited third-party widgets (like Elfsight or Trustmary). 

This is the standard approach used by enterprise web agencies to maintain 100% control over the UI, support infinite page views, and keep costs at $0.

## Core Strategy

Instead of the website making a live request to Google (or a third-party widget) every time a user visits the page, we decouple the fetching process from the user. We will pull the data behind the scenes on a schedule, save it, and let the frontend read from the saved static data.

**Benefits:**
1. **Zero Frontend Limits:** 1 million visitors = 0 Google API calls.
2. **No Branding:** You own the UI completely in React.
3. **Multi-Location Merging:** Merge 2 or 50 locations seamlessly into one feed.
4. **Always Free:** Stays well within the $200/month free tier of Google Maps Platform.

---

## Cloudflare Implementation Architectures

If you are hosting your website on **Cloudflare Pages**, you have two incredibly elegant ways to trigger and store this data.

### Option 1: The Cloudflare Worker + KV Storage (Recommended)

This approach uses Cloudflare's serverless backend to fetch the reviews and store them globally on Cloudflare's Edge network.

**How it works:**
1. **Cron Trigger:** You create a Cloudflare Worker and set up a **Cron Trigger** in the Cloudflare Dashboard to run the worker once every 24 hours.
2. **Fetch & Merge:** The Worker wakes up, uses your secret Google API key, makes a request to the Google Places API for Location A (Clawson) and Location B (West Bloomfield).
3. **Process:** The Worker merges the two arrays, filters for 5-star reviews, and sorts them by date.
4. **Save to KV:** The Worker saves this final JSON array into a **Cloudflare KV Namespace** (a lightning-fast global database).
5. **Frontend Delivery:** When your React site loads, it makes a fetch request to the Worker. Instead of hitting Google, the Worker instantly returns the JSON string from KV.

**Why this is great:** No redeployments necessary. The reviews update dynamically every day, but page load times are near zero because KV is cached globally.

### Option 2: The GitHub Actions "Static Build" Approach

If your site is completely static (SSG) and connected to GitHub, you can bake the reviews directly into the HTML at build time.

**How it works:**
1. **Write a Node Script:** Create a file called `fetchReviews.js` in your repository.
2. **GitHub Action Cron:** Create a GitHub Action `.yml` file that runs `node fetchReviews.js` every day at midnight.
3. **Save Locally:** The script fetches the reviews from Google and overwrites a local file `src/data/reviews.json`.
4. **Trigger Cloudflare Deploy:** The GitHub action commits the new `reviews.json` file to the repository. Cloudflare Pages detects the commit and automatically triggers a new site build.
5. **Frontend Delivery:** The React app imports `reviews.json` locally. There is absolutely no external fetching required by the browser.

---

## Step-by-Step API Details

When you are ready to build the script, you will use the **Google Places API (New)**.

**1. Get your Place IDs**
Use the Google Maps Place ID Finder to get the unique string for your locations.
* Example: `ChI...`

**2. The API Endpoint**
You will hit the `Place Details` endpoint, specifically requesting the `reviews` field to save payload size.

```http
GET https://maps.googleapis.com/maps/api/place/details/json
  ?place_id=YOUR_PLACE_ID
  &fields=reviews
  &reviews_sort=newest
  &key=YOUR_API_KEY
```

**3. Data Structure to Map**
Your fetcher script will extract these fields to pass to the React UI:
* `author_name`
* `rating`
* `text`
* `relative_time_description`
* `profile_photo_url`

By utilizing Cloudflare Workers or GitHub Actions, you bypass all third-party limitations, securely hide your Google API keys, and deliver an enterprise-grade digital experience.
