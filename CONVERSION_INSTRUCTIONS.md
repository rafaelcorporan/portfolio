# PDF to Image Conversion - Complete Instructions

## Quick Start

Since I cannot directly download PDFs from Google Drive, here's the complete process:

### Step 1: Download PDFs from Google Drive

1. Open each Google Drive folder:
   - **AI**: https://drive.google.com/drive/folders/1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I
   - **Mix**: https://drive.google.com/drive/folders/1HEre65apUwp2ygr54bfKQ4RA-Qapzeek
   - **IT Trainings**: https://drive.google.com/drive/folders/1iaJlUiQHeiDn52AX8KXXr4Hy_kRVX7Tk
   - **Industrial Mechanic**: https://drive.google.com/drive/folders/1aQVts8LMBXyf7NwXausa9Q-5e63O1xsd

2. Download all PDFs to your computer

3. Organize them in a `downloads` folder:
   ```
   portfolio/
   └── downloads/
       ├── ai/
       │   ├── AI Fluency- Framework & Foundations_certificate.pdf
       │   ├── Claude Code in Action_certificate.pdf
       │   └── ... (all 8 PDFs)
       ├── mix/
       │   ├── scan0003.pdf
       │   └── ... (all 6 PDFs)
       ├── it-trainings/
       │   ├── BMCC Grade Transcript.pdf
       │   └── ... (all 10 PDFs)
       └── industrial-mechanic/
           ├── scan0026.pdf
           └── ... (all 5 PDFs)
   ```

### Step 2: Convert PDFs to Images

#### Option A: Automated Python Script (Recommended)

```bash
# Install dependencies
pip install pdf2image
brew install poppler  # macOS
# or: sudo apt-get install poppler-utils  # Linux

# Run conversion script
python3 scripts/batch-convert-pdfs.py
```

#### Option B: Manual Conversion (Command Line)

```bash
# Install poppler-utils
brew install poppler  # macOS

# Convert each PDF (example for AI group)
cd downloads/ai
pdftoppm -jpeg -r 300 "AI Fluency- Framework & Foundations_certificate.pdf" ai-fluency-framework
mv ai-fluency-framework-1.jpg ../../public/diplomas/ai/ai-fluency-framework.jpg

# Repeat for all PDFs...
```

#### Option C: Online Tools

1. Go to https://www.ilovepdf.com/pdf_to_jpg
2. Upload each PDF
3. Download the converted JPG
4. Rename and place in the correct folder

### Step 3: Verify Conversion

```bash
node scripts/download-and-convert.js
```

This will show which images are present and which are still missing.

## Expected File Structure After Conversion

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
│   ├── instituto-biblico-jorge-muller.jpg (manual - already an image)
│   ├── scan0003.jpg
│   ├── scan0009.jpg
│   ├── scan0012.jpg
│   ├── scan0020.jpg
│   ├── scan0034.jpg
│   └── scan0035.jpg
├── it-trainings/
│   ├── bmcc-diploma.jpg (copy BMCC_DIPLOMA.jpg from Google Drive)
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

## Notes

- **BMCC_DIPLOMA.jpg** is already an image file in the IT Trainings folder - just copy it to `public/diplomas/it-trainings/bmcc-diploma.jpg`
- **instituto-biblico-jorge-muller.jpg** needs to be added manually (the theological studies diploma image you sent)
- All other files need PDF to JPG conversion
- Use 300 DPI for high quality
- JPEG quality 90-95 recommended

