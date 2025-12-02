#!/bin/bash

# Script to convert PDFs already in public/diplomas folders to JPG images
# This script works with PDFs that are already in the correct location

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIPLOMAS_DIR="$BASE_DIR/public/diplomas"

echo "PDF to Image Conversion Script"
echo "=============================="
echo ""

# Check if pdftoppm is available
if ! command -v pdftoppm &> /dev/null; then
    echo "ERROR: pdftoppm not found!"
    echo ""
    echo "Please install poppler-utils:"
    echo "  macOS: brew install poppler"
    echo "  Linux: sudo apt-get install poppler-utils"
    exit 1
fi

echo "✓ pdftoppm found"
echo ""

# Function to convert PDFs in a directory
convert_group() {
    local group_dir=$1
    local group_name=$2
    
    echo "Processing $group_name group..."
    echo "--------------------------------"
    
    cd "$group_dir"
    
    for pdf in *.pdf; do
        if [ -f "$pdf" ]; then
            # Generate output filename (remove .pdf, add .jpg)
            output_name="${pdf%.pdf}.jpg"
            
            # Skip if image already exists
            if [ -f "$output_name" ]; then
                echo "  ⊙ Skipping $pdf (already converted: $output_name)"
                continue
            fi
            
            echo "  Converting: $pdf -> $output_name"
            
            # Convert PDF to JPG (first page only, 300 DPI)
            pdftoppm -jpeg -r 300 -f 1 -l 1 "$pdf" "${pdf%.pdf}" 2>/dev/null
            
            # Rename the output file
            if [ -f "${pdf%.pdf}-1.jpg" ]; then
                mv "${pdf%.pdf}-1.jpg" "$output_name"
                echo "    ✓ Success: $output_name"
            else
                echo "    ✗ Failed to convert $pdf"
            fi
        fi
    done
    
    echo ""
}

# Convert each group
convert_group "$DIPLOMAS_DIR/ai" "AI"
convert_group "$DIPLOMAS_DIR/mix" "Mix"
convert_group "$DIPLOMAS_DIR/it-trainings" "IT Trainings"
convert_group "$DIPLOMAS_DIR/industrial-mechanic" "Industrial Mechanic"

echo "Conversion complete!"
echo ""
echo "Note: You may need to rename some files to match the expected names in diplomas-data.ts"
echo "Run: node scripts/download-and-convert.js to check which files need renaming"

