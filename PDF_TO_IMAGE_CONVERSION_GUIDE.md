# PDF to Image Conversion Guide

## Overview
All diploma PDFs need to be converted to JPG/PNG images and placed in the appropriate folders.

## Quick Conversion Methods

### Method 1: Using pdftoppm (Recommended - Fast & High Quality)

```bash
# Install poppler-utils (contains pdftoppm)
# macOS:
brew install poppler

# Linux:
sudo apt-get install poppler-utils

# Convert a single PDF:
pdftoppm -jpeg -r 300 input.pdf output

# This creates: output-1.jpg (first page)
# Rename to match expected filename
mv output-1.jpg ai-fluency-framework.jpg
```

### Method 2: Using ImageMagick

```bash
# Install ImageMagick
# macOS:
brew install imagemagick

# Linux:
sudo apt-get install imagemagick

# Convert PDF to JPG:
convert -density 300 input.pdf -quality 90 output.jpg
```

### Method 3: Online Tools
- https://www.ilovepdf.com/pdf_to_jpg
- https://www.adobe.com/acrobat/online/pdf-to-jpg.html
- https://convertio.co/pdf-jpg/

### Method 4: Python Script (Automated)

```python
from pdf2image import convert_from_path
import os

def convert_pdf_to_image(pdf_path, output_path, dpi=300):
    images = convert_from_path(pdf_path, dpi=dpi)
    if images:
        images[0].save(output_path, 'JPEG', quality=95)
        print(f"Converted: {pdf_path} -> {output_path}")

# Install: pip install pdf2image poppler
```

## File Mapping

### AI Group (`public/diplomas/ai/`)
- `AI Fluency- Framework & Foundations_certificate.pdf` → `ai-fluency-framework.jpg`
- `Claude Code in Action_certificate.pdf` → `claude-code-in-action.jpg`
- `Claude with Amazon Bedrock_certificate.pdf` → `claude-amazon-bedrock.jpg`
- `Claude with Google Cloud's Vertex AI_certificate.pdf` → `claude-vertex-ai.jpg`
- `Claude with the Anthropic API_certificate.pdf` → `claude-anthropic-api.jpg`
- `Introduction to Model Context Protocol_certificate.pdf` → `mcp-introduction.jpg`
- `Model Context Protocol- Advanced Topics_certificate.pdf` → `mcp-advanced.jpg`
- `Teaching AI Fluency_certificate.pdf` → `teaching-ai-fluency.jpg`

### Mix Group (`public/diplomas/mix/`)
- `scan0003.pdf` → `scan0003.jpg`
- `scan0009.pdf` → `scan0009.jpg`
- `scan0012.pdf` → `scan0012.jpg`
- `scan0020.pdf` → `scan0020.jpg`
- `scan0034.pdf` → `scan0034.jpg`
- `scan0035.pdf` → `scan0035.jpg`
- **Note:** `instituto-biblico-jorge-muller.jpg` should be added manually (already an image)

### IT Trainings Group (`public/diplomas/it-trainings/`)
- `BMCC_DIPLOMA.jpg` → Already an image, just copy/rename if needed
- `BMCC Grade Transcript.pdf` → `bmcc-transcript.jpg`
- `scan0006.pdf` → `scan0006.jpg`
- `scan0010.pdf` → `scan0010.jpg`
- `scan0011.pdf` → `scan0011.jpg`
- `scan0014.pdf` → `scan0014.jpg`
- `scan0015.pdf` → `scan0015.jpg`
- `scan0016.pdf` → `scan0016.jpg`
- `scan0017.pdf` → `scan0017.jpg`
- `scan0018.pdf` → `scan0018.jpg`
- `scan0019.pdf` → `scan0019.jpg`

### Industrial Mechanic Group (`public/diplomas/industrial-mechanic/`)
- `scan0026.pdf` → `scan0026.jpg`
- `scan0027.pdf` → `scan0027.jpg`
- `scan0028.pdf` → `scan0028.jpg`
- `scan0029.pdf` → `scan0029.jpg`
- `scan0030.pdf` → `scan0030.jpg`

## Batch Conversion Script

Create a script to convert all PDFs at once:

```bash
#!/bin/bash

# Set directories
PDF_DIR="./downloads"  # Where you downloaded PDFs from Google Drive
OUTPUT_BASE="./public/diplomas"

# AI Group
for pdf in "$PDF_DIR/ai"/*.pdf; do
    filename=$(basename "$pdf" .pdf)
    # Map to expected names (you'll need to adjust this)
    pdftoppm -jpeg -r 300 "$pdf" "$OUTPUT_BASE/ai/${filename}"
    # Rename output-1.jpg to expected name
done

# Repeat for other groups...
```

## Quality Settings

- **DPI:** 300 DPI recommended for high quality
- **Format:** JPEG (smaller file size) or PNG (better quality, larger files)
- **Quality:** 90-95 for JPEG

## Verification

After conversion, run:
```bash
node scripts/download-and-convert.js
```

This will check which images are present and which are still missing.

