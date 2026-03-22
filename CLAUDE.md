# Visiometrica Landing Page

Static landing page for **visiometrica.com**, hosted on GitHub Pages. Links to two self-hosted dashboard apps.

## Dashboards

- **University Dashboard** — https://uni-dashboard.visiometrica.com
- **Eurostat Economic Dashboard** — https://econdash.visiometrica.com

Both dashboards run on an Ubuntu laptop server via Cloudflare Tunnel. The landing page is the only thing on GitHub Pages.

## Tech

- Vanilla HTML/CSS, no build step, no frameworks
- Single `index.html` file
- `CNAME` file for GitHub Pages custom domain

## Deployment

**Repo:** `git@github.com:quantumjazz/visiometrica.com.git` (SSH)

### 1. Enable GitHub Pages

- Go to https://github.com/quantumjazz/visiometrica.com/settings/pages
- Source: "Deploy from a branch"
- Branch: `main`, folder: `/ (root)`
- Save

### 2. Cloudflare DNS

In Cloudflare dashboard for `visiometrica.com`, create/update these DNS records:

| Type  | Name | Content                  | Proxy              |
|-------|------|--------------------------|---------------------|
| CNAME | @    | quantumjazz.github.io    | DNS only (grey cloud) |
| CNAME | www  | quantumjazz.github.io    | DNS only (grey cloud) |

**Important:** Proxy must be "DNS only" (grey cloud, not orange) so GitHub can issue the SSL certificate via Let's Encrypt.

### 3. Verify custom domain in GitHub

- Go to https://github.com/settings/pages (account-level)
- Add and verify `visiometrica.com` if prompted
- GitHub will auto-provision HTTPS

### 4. Cloudflare Tunnel

The Cloudflare Tunnel config (`/etc/cloudflared/config.yml`) should **NOT** have entries for `visiometrica.com` or `www.visiometrica.com`. Those domains go through DNS to GitHub Pages, not through the tunnel. Remove any existing tunnel entries for them.

### 5. Verify

Visit https://visiometrica.com — the landing page should load with HTTPS.
