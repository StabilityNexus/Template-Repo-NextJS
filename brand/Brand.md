# AOSSIE Brand Guidelines

This document details the visual identity guidelines for **AOSSIE** (Australian Open Source Software Innovation and Education).

---

## 🎨 Color Palette

The AOSSIE color scheme is inspired by Australia's national colors and reflects the organization's roots.

| Color Name | Color Sample | HEX Code | RGB Code | Role |
| :--- | :--- | :--- | :--- | :--- |
| **Golden Wallet** | 🟡 | `#FFCD00` | `rgb(255, 205, 0)` | Primary Brand Color |
| **Baggy Green** | 🟢 | `#00843D` | `rgb(0, 132, 61)` | Secondary Brand Color |
| **Neutral Dark** | ⬛ | `#121212` | `rgb(18, 18, 18)` | Dark Layouts & Text |
| **Neutral Light** | ⬜ | `#FFFFFF` | `rgb(255, 255, 255)` | Light Layouts & Text |
| **Neutral Muted** | 🔘 | `#7A7A7A` | `rgb(122, 122, 122)` | Borders & Muted Text |

---

## 👁️ Visual Assets

### 1. Brand Logo
The official vector logo is stored in the repository in **SVG** format:
- **Project Folder:** [logo.svg](brand/logo.svg)
- **Web App Asset:** [aossie_logo.svg](public/assets/icons/aossie_logo.svg)

### 2. Favicons & Icons
The standard web browser tab icon is stored as a multi-resolution ICO file:
- **Project Folder:** [favicon.ico](brand/favicon.ico)
- **Web App Asset:** [favicon.ico](public/assets/icons/favicon.ico)

---

## ✍️ Typography

- **Default Font Family:** **Inter**
- **Fallback Stack:** `ui-sans-serif, system-ui, sans-serif`
- **Configuration:** Set globally via Tailwind CSS v4 custom theme bindings inside [`globals.css`](src/app/[locale]/globals.css) and loaded asynchronously in the root layout via Next.js Google Font optimizer.

