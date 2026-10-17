# Eco Biodigesters Kenya - Official Multi-Page Website

**Business:** Eco Biodigesters  
**Physical Office:** Ruai Off Kangundo Road, Nairobi, Kenya  
**Phone & WhatsApp:** 0724 582 615 (+254 724 582 615)  
**Custom Domain:** `ecobiodigesters.com`  
**GitHub Repository:** `https://github.com/KimJon/ecobiodigesters.git`  

---

## 📂 Multi-Page Website Structure

Each page is an independent, dedicated `.html` page with clean navigation, solid standard colors, and zero gradients:

1. **`index.html`** - Homepage (Hero, Problem vs Solution, Popular Systems, Proof Preview, Reviews, Site Visit Booking).
2. **`about.html`** - About Us (Story, Why hire us, Ruai Office details, 50+ year build quality).
3. **`products.html`** - Products & Sizes (Compact 1-8 users, Standard 9-20 users, Plus rentals, Commercial, Kitchen Grease Traps, Bio Enzymes).
4. **`how-it-works.html`** - How It Works (3-step natural biological digestion, Septic vs Biodigester comparison, exhauster cost savings math, septic tank conversions).
5. **`portfolio.html`** - Real Jobs Done (Showcases all 27 authentic project photos with categories and full-screen lightbox).
6. **`pricing.html`** - Pricing & Cost Calculator (Interactive tank sizer, price packages, stage payment terms).
7. **`contact.html`** - Contact Us (Ruai office location, Call 0724 582 615, WhatsApp +254 724 582 615, Google Map).

---

## 🌐 Connecting Your Custom Domain (`ecobiodigesters.com`)

### METHOD 1: Free Hosting on GitHub Pages (Recommended)
The repository already contains the required `CNAME` file pointing to `ecobiodigesters.com`.

#### Step 1: Add DNS Records at your Domain Registrar
Log in where you bought `ecobiodigesters.com` (e.g. Truehost, HostPinnacle, Namecheap, GoDaddy, Safaricom) and add:

| Record Type | Host / Name | Target / Points To |
|-------------|-------------|--------------------|
| **A** | `@` *(or leave blank)* | `185.199.108.153` |
| **A** | `@` *(or leave blank)* | `185.199.109.153` |
| **A** | `@` *(or leave blank)* | `185.199.110.153` |
| **A** | `@` *(or leave blank)* | `185.199.111.153` |
| **CNAME** | `www` | `KimJon.github.io` |

#### Step 2: Enable in GitHub Repository Settings
1. Go to: `https://github.com/KimJon/ecobiodigesters/settings/pages`
2. Under **Build and deployment**: Branch `main` / `/(root)`. Click **Save**.
3. Under **Custom domain**: Ensure `ecobiodigesters.com` is saved.
4. Check **Enforce HTTPS**.

---

### METHOD 2: If using cPanel / Shared Hosting
If you have a cPanel account (e.g. Truehost, HostPinnacle):
1. Copy and paste this to your hosting support:
   > "Hello Support, please ensure my domain ecobiodigesters.com points to public_html and install a free AutoSSL / Let's Encrypt certificate."
2. Upload all files (`index.html`, `about.html`, `products.html`, `how-it-works.html`, `portfolio.html`, `pricing.html`, `contact.html`, `css/`, `js/`, `images/`) into `public_html`.
