# LESTRY website — free GitHub Pages edition

This is a static, mobile-friendly streetwear catalog with direct WhatsApp ordering. No payment gateway, database, or paid hosting is needed.

## Before publishing

1. In `script.js`, confirm the WhatsApp number. The supplied number `9326000197` has been assumed to be an Indian number, so the link uses `919326000197` (91 + mobile number).
2. In `script.js`, replace the three **example** products in `PRODUCTS` with your real product names, sizes, prices and available colors. Product prices are deliberately unset; the website displays "Price on request" until you add them.
3. Put your actual product photos in a new `images` folder, e.g. `images/tee-1.jpg`, then set each product's `image` field to the matching path. Until then, the site uses a typographic placeholder. Do not advertise the example products as actual stock.
4. The Instagram link is set to `https://www.instagram.com/lestryofficial/`.
5. Review the About text and details for accuracy.

## Publish free on GitHub Pages

1. Sign up or sign in at https://github.com/.
2. Create a new **public** repository named `lestry-website` (or another name).
3. Choose **Add file → Upload files**, then upload `index.html`, `style.css`, `script.js`, and any `images` folder contents. Commit changes.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, then choose branch `main` and folder `/(root)` and click **Save**.
6. After deployment, open `https://YOUR-USERNAME.github.io/lestry-website/` (replace YOUR-USERNAME with your GitHub username and use your actual repository name).
7. Test the site on a phone and click a product's **ORDER ON WHATSAPP** button to verify it opens a pre-filled chat to the right number.

GitHub Pages hosting is free for public repositories. The default `github.io` address is free; a custom domain is optional and typically costs money. This site does not process payments or store customer orders; WhatsApp handles the conversation.

## Updating later

Edit `script.js` to update your catalog. Upload and commit the updated files to the same GitHub repository; Pages will redeploy automatically.
