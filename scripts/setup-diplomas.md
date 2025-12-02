# Diploma Setup Instructions

## Overview
The diploma page is set up with 4 groups:
- **AI**: 8 certificates
- **Mix**: 7 documents (1 image + 6 PDFs)
- **IT Trainings**: 10 documents
- **Industrial Mechanic**: 5 documents

## Current Status
- ✅ Page structure created with groups
- ✅ Data structure created
- ⏳ Images need to be downloaded and converted from PDFs

## Steps to Complete Setup

### Option 1: Manual Download (Recommended)
1. Open each Google Drive folder
2. Download all PDFs and images
3. Convert PDFs to images (JPG/PNG) using:
   - Online tools: https://www.ilovepdf.com/pdf_to_jpg
   - Command line: `pdftoppm input.pdf output -jpeg -r 300`
4. Save images to:
   - `public/diplomas/ai/` - AI certificates
   - `public/diplomas/mix/` - Mix documents
   - `public/diplomas/it-trainings/` - IT Training certificates
   - `public/diplomas/industrial-mechanic/` - Industrial Mechanic certificates

### Option 2: Using Google Drive API
1. Set up Google Drive API credentials
2. Run the download script (to be created)
3. Images will be automatically downloaded and converted

### Option 3: Using gdown (Python)
```bash
pip install gdown
gdown --folder https://drive.google.com/drive/folders/1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I -O public/diplomas/ai
```

## File Naming Convention
Update `app/diploma/diplomas-data.ts` with actual image filenames once downloaded.

## Google Drive Folder Links
- AI: https://drive.google.com/drive/folders/1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I
- Mix: https://drive.google.com/drive/folders/1HEre65apUwp2ygr54bfKQ4RA-Qapzeek
- IT Trainings: https://drive.google.com/drive/folders/1iaJlUiQHeiDn52AX8KXXr4Hy_kRVX7Tk
- Industrial Mechanic: https://drive.google.com/drive/folders/1aQVts8LMBXyf7NwXausa9Q-5e63O1xsd

