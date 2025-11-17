# CV/Resume PDF Folder

## ✅ How to Add Your CV

**Simply place your CV PDF file in this folder:**

1. Copy your CV PDF file here: `public/pdf/`
2. Name it: `resume.pdf`
3. That's it! Your CV is ready to download.

## 📁 File Requirements
- **Format:** PDF (.pdf)
- **File name:** `resume.pdf` (exactly as shown)
- **Location:** This folder (`public/pdf/resume.pdf`)

## 🔗 Current Configuration
The download button is configured in: `src/data/header-data.js`

```javascript
resumePdf: '/pdf/resume.pdf'
```

## 💡 Using a Different Filename?
If your CV has a different name (e.g., `my-cv.pdf`):
1. Place it in this folder
2. Update `src/data/header-data.js`:
   ```javascript
   resumePdf: '/pdf/my-cv.pdf'
   ```

## 🌐 Using an Online Link?
If you prefer to use a hosted CV (Google Drive, Dropbox, etc.):
1. Update `src/data/header-data.js`:
   ```javascript
   resumePdf: 'YOUR_FULL_URL_HERE'
   ```

---

**Note:** Files in the `public` folder are served directly at the root path of your website.



