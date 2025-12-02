#!/bin/bash

# Script to download PDFs from Google Drive and convert them to images
# Requires: gdown (pip install gdown) and ImageMagick or pdftoppm

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIPLOMAS_DIR="$BASE_DIR/public/diplomas"

# Create directories if they don't exist
mkdir -p "$DIPLOMAS_DIR/ai"
mkdir -p "$DIPLOMAS_DIR/mix"
mkdir -p "$DIPLOMAS_DIR/it-trainings"
mkdir -p "$DIPLOMAS_DIR/industrial-mechanic"

echo "PDF to Image Conversion Script"
echo "=============================="
echo ""
echo "This script will help convert PDFs to images."
echo ""
echo "Option 1: Manual Download and Conversion"
echo "1. Download all PDFs from Google Drive folders"
echo "2. Use ImageMagick: convert input.pdf output.jpg"
echo "3. Or use pdftoppm: pdftoppm input.pdf output -jpeg -r 300"
echo ""
echo "Option 2: Using gdown (if folders are public)"
echo "pip install gdown"
echo "gdown --folder <FOLDER_LINK> -O <OUTPUT_DIR>"
echo ""
echo "Google Drive Folder Links:"
echo "- AI: https://drive.google.com/drive/folders/1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I"
echo "- Mix: https://drive.google.com/drive/folders/1HEre65apUwp2ygr54bfKQ4RA-Qapzeek"
echo "- IT Trainings: https://drive.google.com/drive/folders/1iaJlUiQHeiDn52AX8KXXr4Hy_kRVX7Tk"
echo "- Industrial Mechanic: https://drive.google.com/drive/folders/1aQVts8LMBXyf7NwXausa9Q-5e63O1xsd"
echo ""
echo "Expected file structure:"
echo "$DIPLOMAS_DIR/"
echo "├── ai/"
echo "│   ├── ai-fluency-framework.jpg"
echo "│   ├── claude-code-in-action.jpg"
echo "│   └── ..."
echo "├── mix/"
echo "│   ├── instituto-biblico-jorge-muller.jpg"
echo "│   └── ..."
echo "├── it-trainings/"
echo "│   ├── bmcc-diploma.jpg"
echo "│   └── ..."
echo "└── industrial-mechanic/"
echo "    └── ..."

