#!/bin/bash

# Script to safely delete PDF files from public/diplomas folders
# This is safe because the diploma page only uses JPG images

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIPLOMAS_DIR="$BASE_DIR/public/diplomas"

echo "PDF Cleanup Script"
echo "=================="
echo ""
echo "This script will delete all PDF files from the diplomas folders."
echo "This is safe because:"
echo "  - All PDFs have been converted to JPG images"
echo "  - The diploma page only references JPG files"
echo "  - All 30+ JPG images are already in place"
echo ""

# Count PDFs
PDF_COUNT=$(find "$DIPLOMAS_DIR" -name "*.pdf" -type f | wc -l | tr -d ' ')

if [ "$PDF_COUNT" -eq 0 ]; then
    echo "No PDF files found. Nothing to delete."
    exit 0
fi

echo "Found $PDF_COUNT PDF files:"
find "$DIPLOMAS_DIR" -name "*.pdf" -type f | sed 's/^/  - /'
echo ""

read -p "Do you want to delete these PDF files? (y/N): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Deleting PDF files..."
    find "$DIPLOMAS_DIR" -name "*.pdf" -type f -delete
    echo "✓ Deleted $PDF_COUNT PDF files"
    echo ""
    echo "Remaining files:"
    find "$DIPLOMAS_DIR" -type f | wc -l | xargs echo "  Total files:"
    find "$DIPLOMAS_DIR" -name "*.jpg" -type f | wc -l | xargs echo "  JPG images:"
else
    echo "Cancelled. No files deleted."
fi

