# Circular font (Supabase)

Supabase uses **Circular** by [Lineto](https://www.lineto.com/) as their main sans-serif font.

## Option 1: Use Flow Circular from CDN (default)

The app already loads **Flow Circular** from Google Fonts (free, similar geometric style). No action needed.

## Option 2: Use the real Circular font (download)

To match Supabase exactly:

1. **Get the font**  
   Purchase or obtain Circular (or Circular Std) from [Lineto](https://www.lineto.com/) or your design team.

2. **Export .woff2 files**  
   You need at least:
   - `Circular-Book.woff2` (400)
   - `Circular-Medium.woff2` (500)
   - `Circular-Bold.woff2` (700)

3. **Place files here**  
   Put the `.woff2` files in this folder:  
   `public/fonts/circular/`

4. **Enable @font-face**  
   In `src/app/circular-font.css`, uncomment the `@font-face` blocks so the app loads Circular from these files.

After that, the app will use Circular instead of Flow Circular.
