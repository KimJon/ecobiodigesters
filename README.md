# Eco Biodigesters Kenya - Official Website & Custom Domain Setup

Website for **Eco Biodigesters** (`ecobiodigesters.com`).
Direct Phone & WhatsApp: **0724 582 615** (+254 724 582 615).

---

## 📋 What to Send / Configure for Your Hosting & Custom Domain (`ecobiodigesters.com`)

You have two very simple options to make `ecobiodigesters.com` live:

### OPTION 1: Free Hosting via GitHub Pages (Recommended)
Because all project files are stored on GitHub (`https://github.com/KimJon/ecobiodigesters.git`), you can host the website completely free with global CDN speed and automatic free SSL (HTTPS) certificate via **GitHub Pages**.

#### 1. Configure DNS Records with your Domain Registrar
Log in to where you purchased `ecobiodigesters.com` (e.g. Truehost, HostPinnacle, Namecheap, GoDaddy, Safaricom Domains, Kenya Web Experts, etc.) and go to **DNS Management / DNS Zone Editor**:

Add the following **4 A Records** (for the root domain):
| Record Type | Name / Host | Target / Points To | TTL |
|-------------|-------------|---------------------|-----|
| **A** | `@` (or leave blank) | `185.199.108.153` | Automatic / 3600 |
| **A** | `@` (or leave blank) | `185.199.109.153` | Automatic / 3600 |
| **A** | `@` (or leave blank) | `185.199.110.153` | Automatic / 3600 |
| **A** | `@` (or leave blank) | `185.199.111.153` | Automatic / 3600 |

Add the following **1 CNAME Record** (for `www`):
| Record Type | Name / Host | Target / Points To | TTL |
|-------------|-------------|---------------------|-----|
| **CNAME** | `www` | `KimJon.github.io` | Automatic / 3600 |

#### 2. Enable GitHub Pages
1. Go to your repo on GitHub: `https://github.com/KimJon/ecobiodigesters`
2. Click **Settings** (tab at the top) -> **Pages** (on the left menu).
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/(root)**
   - Click **Save**.
4. Under **Custom domain**:
   - Type: `ecobiodigesters.com`
   - Click **Save**. (The repository already includes the `CNAME` file for you).
5. Check **Enforce HTTPS** (this generates your free SSL lock icon).

---

### OPTION 2: If you have existing cPanel / Web Hosting (e.g., Truehost, HostPinnacle)

If you already bought hosting with cPanel:

#### What to send to your hosting provider's support team:
Copy and paste this message to your hosting company support ticket or WhatsApp:

> **Subject:** Setup custom domain ecobiodigesters.com and point to website files  
> **Message:**  
> "Hello Support,  
> I have the website files for my domain **ecobiodigesters.com**.  
> 1. Please ensure the domain **ecobiodigesters.com** and **www.ecobiodigesters.com** are pointing to the `public_html` directory of my hosting account.  
> 2. Please issue a free AutoSSL / Let's Encrypt SSL certificate for HTTPS.  
> 3. Thank you!"

#### If you want to upload the files yourself via cPanel:
1. Log into your cPanel dashboard.
2. Open **File Manager** -> navigate to `public_html`.
3. Upload `index.html`, the `css/` folder, the `js/` folder, and the `images/` folder.
4. Your website will be live immediately at `https://ecobiodigesters.com`.

---

## 🌟 Website Features Included

1. **Inspiration Aligned with BioTank**:
   - Clean, modern green eco palette with conversion-focused Kenyan sanitation theme.
   - 3-chamber biological digestion breakdown explaining why biodigesters outperform traditional septic tanks.
2. **27 Authentic Portfolio Job Photos**:
   - Filterable gallery (Residential, Soakaway & Drainage, Chamber Construction, Completed Manholes).
   - High-resolution modal Lightbox with previous/next keyboard arrows and captions.
3. **Interactive Sizing & Cost Calculator**:
   - Allows prospective clients to select property category (bungalows, apartments, schools, hotels) and number of occupants.
   - Calculates estimated tank model and price in KSh, with an instant button to request an official quote on WhatsApp (+254 724 582 615).
4. **Direct Click-to-Call & Click-to-WhatsApp**:
   - Phone: `0724 582 615`
   - WhatsApp floating button with pulsing animation.
5. **SEO & Mobile Optimized**:
   - Fast loading, clean responsive layout, and Google Local Business schema structure.
