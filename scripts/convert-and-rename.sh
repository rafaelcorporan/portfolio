#!/bin/bash

# Script to convert PDFs and rename them to match expected filenames
# PDFs are already in public/diplomas/{group}/ folders

set -e

BASE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DIPLOMAS_DIR="$BASE_DIR/public/diplomas"

echo "PDF to Image Conversion with Renaming"
echo "======================================"
echo ""

convert_group() {
    local group_dir=$1
    local group_name=$2
    shift 2
    local mappings=("$@")
    
    echo "Processing $group_name group..."
    echo "--------------------------------"
    
    cd "$group_dir"
    
    # Process mappings in pairs: PDF_NAME|JPG_NAME
    for mapping in "${mappings[@]}"; do
        pdf_file="${mapping%%|*}"
        expected_jpg="${mapping##*|}"
        
        if [ ! -f "$pdf_file" ]; then
            echo "  ⚠ PDF not found: $pdf_file"
            continue
        fi
        
        if [ -f "$expected_jpg" ]; then
            echo "  ⊙ Skipping $pdf_file (already converted: $expected_jpg)"
            continue
        fi
        
        echo "  Converting: $pdf_file -> $expected_jpg"
        
        # Convert PDF to JPG (first page only, 300 DPI)
        temp_output="${pdf_file%.pdf}"
        pdftoppm -jpeg -r 300 -f 1 -l 1 "$pdf_file" "$temp_output" 2>/dev/null
        
        # Rename the output file
        if [ -f "${temp_output}-1.jpg" ]; then
            mv "${temp_output}-1.jpg" "$expected_jpg"
            echo "    ✓ Success: $expected_jpg"
        else
            echo "    ✗ Failed to convert $pdf_file"
        fi
    done
    
    echo ""
}

# AI Group mappings: PDF_NAME|JPG_NAME
AI_MAPPINGS=(
    "AI Fluency- Framework & Foundations_certificate.pdf|ai-fluency-framework.jpg"
    "Claude Code in Action_certificate.pdf|claude-code-in-action.jpg"
    "Claude with Amazon Bedrock_certificate.pdf|claude-amazon-bedrock.jpg"
    "Claude with Google Cloud's Vertex AI_certificate.pdf|claude-vertex-ai.jpg"
    "Claude with the Anthropic API_certificate.pdf|claude-anthropic-api.jpg"
    "Introduction to Model Context Protocol_certificate.pdf|mcp-introduction.jpg"
    "Model Context Protocol- Advanced Topics_certificate.pdf|mcp-advanced.jpg"
    "Teaching AI Fluency_certificate.pdf|teaching-ai-fluency.jpg"
)

# Mix Group mappings
MIX_MAPPINGS=(
    "scan0003.pdf|scan0003.jpg"
    "scan0009.pdf|scan0009.jpg"
    "scan0012.pdf|scan0012.jpg"
    "scan0020.pdf|scan0020.jpg"
    "scan0034.pdf|scan0034.jpg"
    "scan0035.pdf|scan0035.jpg"
)

# IT Trainings Group mappings
IT_MAPPINGS=(
    "BMCC Grade Transcript.pdf|bmcc-transcript.jpg"
    "scan0006.pdf|scan0006.jpg"
    "scan0010.pdf|scan0010.jpg"
    "scan0011.pdf|scan0011.jpg"
    "scan0014.pdf|scan0014.jpg"
    "scan0015.pdf|scan0015.jpg"
    "scan0016.pdf|scan0016.jpg"
    "scan0017.pdf|scan0017.jpg"
    "scan0018.pdf|scan0018.jpg"
    "scan0019.pdf|scan0019.jpg"
)

# Industrial Mechanic Group mappings
MECHANIC_MAPPINGS=(
    "scan0026.pdf|scan0026.jpg"
    "scan0027.pdf|scan0027.jpg"
    "scan0028.pdf|scan0028.jpg"
    "scan0029.pdf|scan0029.jpg"
    "scan0030.pdf|scan0030.jpg"
)

# Convert each group
convert_group "$DIPLOMAS_DIR/ai" "AI" "${AI_MAPPINGS[@]}"
convert_group "$DIPLOMAS_DIR/mix" "Mix" "${MIX_MAPPINGS[@]}"
convert_group "$DIPLOMAS_DIR/it-trainings" "IT Trainings" "${IT_MAPPINGS[@]}"
convert_group "$DIPLOMAS_DIR/industrial-mechanic" "Industrial Mechanic" "${MECHANIC_MAPPINGS[@]}"

echo "======================================"
echo "Conversion complete!"
echo ""
echo "Verifying results..."
node "$BASE_DIR/scripts/download-and-convert.js"
