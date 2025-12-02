#!/usr/bin/env python3
"""
Batch PDF to Image Converter
Converts all PDFs in a directory to JPG images with proper naming
"""

import os
import sys
from pathlib import Path

try:
    from pdf2image import convert_from_path
except ImportError:
    print("Error: pdf2image not installed. Install with: pip install pdf2image")
    print("Also install poppler: brew install poppler (macOS) or apt-get install poppler-utils (Linux)")
    sys.exit(1)

# Base directories
BASE_DIR = Path(__file__).parent.parent
DIPLOMAS_DIR = BASE_DIR / "public" / "diplomas"

# File mappings: {group: {pdf_filename: image_filename}}
FILE_MAPPINGS = {
    "ai": {
        "AI Fluency- Framework & Foundations_certificate.pdf": "ai-fluency-framework.jpg",
        "Claude Code in Action_certificate.pdf": "claude-code-in-action.jpg",
        "Claude with Amazon Bedrock_certificate.pdf": "claude-amazon-bedrock.jpg",
        "Claude with Google Cloud's Vertex AI_certificate.pdf": "claude-vertex-ai.jpg",
        "Claude with the Anthropic API_certificate.pdf": "claude-anthropic-api.jpg",
        "Introduction to Model Context Protocol_certificate.pdf": "mcp-introduction.jpg",
        "Model Context Protocol- Advanced Topics_certificate.pdf": "mcp-advanced.jpg",
        "Teaching AI Fluency_certificate.pdf": "teaching-ai-fluency.jpg",
    },
    "mix": {
        "scan0003.pdf": "scan0003.jpg",
        "scan0009.pdf": "scan0009.jpg",
        "scan0012.pdf": "scan0012.jpg",
        "scan0020.pdf": "scan0020.jpg",
        "scan0034.pdf": "scan0034.jpg",
        "scan0035.pdf": "scan0035.jpg",
    },
    "it-trainings": {
        "BMCC Grade Transcript.pdf": "bmcc-transcript.jpg",
        "scan0006.pdf": "scan0006.jpg",
        "scan0010.pdf": "scan0010.jpg",
        "scan0011.pdf": "scan0011.jpg",
        "scan0014.pdf": "scan0014.jpg",
        "scan0015.pdf": "scan0015.jpg",
        "scan0016.pdf": "scan0016.jpg",
        "scan0017.pdf": "scan0017.jpg",
        "scan0018.pdf": "scan0018.jpg",
        "scan0019.pdf": "scan0019.jpg",
    },
    "industrial-mechanic": {
        "scan0026.pdf": "scan0026.jpg",
        "scan0027.pdf": "scan0027.jpg",
        "scan0028.pdf": "scan0028.jpg",
        "scan0029.pdf": "scan0029.jpg",
        "scan0030.pdf": "scan0030.jpg",
    }
}

def convert_pdf_to_image(pdf_path: Path, output_path: Path, dpi: int = 300):
    """Convert PDF to JPG image"""
    try:
        print(f"Converting: {pdf_path.name} -> {output_path.name}")
        images = convert_from_path(str(pdf_path), dpi=dpi, first_page=1, last_page=1)
        if images:
            images[0].save(str(output_path), 'JPEG', quality=95)
            print(f"  ✓ Success: {output_path}")
            return True
        else:
            print(f"  ✗ Error: No pages found in PDF")
            return False
    except Exception as e:
        print(f"  ✗ Error converting {pdf_path.name}: {e}")
        return False

def main():
    print("PDF to Image Batch Converter")
    print("=" * 50)
    print()
    
    # Check if downloads directory exists
    downloads_dir = BASE_DIR / "downloads"
    if not downloads_dir.exists():
        print(f"Downloads directory not found: {downloads_dir}")
        print("\nPlease:")
        print("1. Create a 'downloads' folder in the project root")
        print("2. Download PDFs from Google Drive into subfolders:")
        print("   downloads/ai/")
        print("   downloads/mix/")
        print("   downloads/it-trainings/")
        print("   downloads/industrial-mechanic/")
        print("3. Run this script again")
        return
    
    converted = 0
    skipped = 0
    errors = 0
    
    for group, mappings in FILE_MAPPINGS.items():
        print(f"\n{group.upper()} Group:")
        print("-" * 30)
        
        group_downloads = downloads_dir / group
        group_output = DIPLOMAS_DIR / group
        
        # Ensure output directory exists
        group_output.mkdir(parents=True, exist_ok=True)
        
        if not group_downloads.exists():
            print(f"  ⚠ Downloads folder not found: {group_downloads}")
            skipped += len(mappings)
            continue
        
        for pdf_name, image_name in mappings.items():
            pdf_path = group_downloads / pdf_name
            image_path = group_output / image_name
            
            # Skip if image already exists
            if image_path.exists():
                print(f"  ⊙ Skipping {image_name} (already exists)")
                skipped += 1
                continue
            
            if pdf_path.exists():
                if convert_pdf_to_image(pdf_path, image_path):
                    converted += 1
                else:
                    errors += 1
            else:
                print(f"  ✗ PDF not found: {pdf_name}")
                errors += 1
    
    print("\n" + "=" * 50)
    print(f"Summary: {converted} converted, {skipped} skipped, {errors} errors")
    print(f"\nConverted images are in: {DIPLOMAS_DIR}")

if __name__ == "__main__":
    main()

