# Diploma Page Setup - Summary

## ✅ Completed Tasks

1. **Page Structure Created**
   - Updated `app/diploma/page.tsx` with 4 groups (AI, Mix, IT Trainings, Industrial Mechanic)
   - Added group filtering functionality
   - Implemented lightbox modal for viewing diplomas
   - Added navigation between diplomas in lightbox

2. **Google Drive Folders Accessed**
   - ✅ AI Folder: Found 8 PDF certificates
   - ✅ Mix Folder: Found 1 image (BMCC_DIPLOMA.jpg) + 6 PDFs
   - ✅ IT Trainings Folder: Found 10 PDFs
   - ✅ Industrial Mechanic Folder: Found 5 PDFs

3. **Data Structure Created**
   - Created `app/diploma/diplomas-data.ts` with all diploma entries
   - Organized by groups with proper typing
   - Includes titles, descriptions, image paths, and PDF URLs

4. **Files Identified**

   **AI Group (8 certificates):**
   - AI Fluency: Framework & Foundations
   - Claude Code in Action
   - Claude with Amazon Bedrock
   - Claude with Google Cloud's Vertex AI
   - Claude with the Anthropic API
   - Introduction to Model Context Protocol
   - Model Context Protocol: Advanced Topics
   - Teaching AI Fluency

   **Mix Group (7 documents):**
   - BMCC_DIPLOMA.jpg (image)
   - scan0003.pdf
   - scan0009.pdf
   - scan0012.pdf
   - scan0020.pdf
   - scan0034.pdf
   - scan0035.pdf

   **IT Trainings Group (10 documents):**
   - BMCC Grade Transcript.pdf
   - scan0006.pdf through scan0019.pdf

   **Industrial Mechanic Group (5 documents):**
   - scan0026.pdf through scan0030.pdf

## ⏳ Remaining Task

### Download and Convert Images

The PDFs need to be:
1. Downloaded from Google Drive
2. Converted to images (JPG/PNG format)
3. Saved to the appropriate folders:
   - `public/diplomas/ai/`
   - `public/diplomas/mix/`
   - `public/diplomas/it-trainings/`
   - `public/diplomas/industrial-mechanic/`

### Options for Completion

**Option 1: Manual Download (Easiest)**
1. Open each Google Drive folder
2. Download all files
3. Convert PDFs to images using online tools or command line
4. Save images with the filenames specified in `diplomas-data.ts`

**Option 2: Using gdown (Python)**
```bash
pip install gdown
# For each folder:
gdown --folder https://drive.google.com/drive/folders/FOLDER_ID -O public/diplomas/GROUP_NAME
```

**Option 3: Google Drive API**
- Set up OAuth2 credentials
- Use the API to download files programmatically
- Convert PDFs to images using a library like `pdf2image`

## 📁 File Structure

```
public/diplomas/
├── ai/
│   ├── ai-fluency-framework.jpg
│   ├── claude-code-in-action.jpg
│   ├── claude-amazon-bedrock.jpg
│   ├── claude-vertex-ai.jpg
│   ├── claude-anthropic-api.jpg
│   ├── mcp-introduction.jpg
│   ├── mcp-advanced.jpg
│   └── teaching-ai-fluency.jpg
├── mix/
│   ├── bmcc-diploma.jpg
│   ├── scan0003.jpg
│   ├── scan0009.jpg
│   ├── scan0012.jpg
│   ├── scan0020.jpg
│   ├── scan0034.jpg
│   └── scan0035.jpg
├── it-trainings/
│   ├── bmcc-transcript.jpg
│   ├── scan0006.jpg
│   ├── scan0010.jpg
│   ├── scan0011.jpg
│   ├── scan0014.jpg
│   ├── scan0015.jpg
│   ├── scan0016.jpg
│   ├── scan0017.jpg
│   ├── scan0018.jpg
│   └── scan0019.jpg
└── industrial-mechanic/
    ├── scan0026.jpg
    ├── scan0027.jpg
    ├── scan0028.jpg
    ├── scan0029.jpg
    └── scan0030.jpg
```

## 🔗 Google Drive Links

- **AI**: https://drive.google.com/drive/folders/1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I
- **Mix**: https://drive.google.com/drive/folders/1HEre65apUwp2ygr54bfKQ4RA-Qapzeek
- **IT Trainings**: https://drive.google.com/drive/folders/1iaJlUiQHeiDn52AX8KXXr4Hy_kRVX7Tk
- **Industrial Mechanic**: https://drive.google.com/drive/folders/1aQVts8LMBXyf7NwXausa9Q-5e63O1xsd

## 📝 Notes

- The Mix folder link provided had "dsds" at the end which was incorrect. The correct link is without "dsds".
- All PDFs need to be converted to images for optimal display on the website.
- The page includes fallback handling for missing images (shows placeholder).
- Once images are added, the page will automatically display them in the organized groups.

