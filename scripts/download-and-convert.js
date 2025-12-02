/**
 * Script to download PDFs from Google Drive and convert to images
 * 
 * This script requires:
 * 1. Google Drive API credentials OR
 * 2. Public folder access OR
 * 3. Manual download and conversion
 * 
 * For manual process:
 * 1. Download PDFs from Google Drive
 * 2. Convert using: pdftoppm input.pdf output -jpeg -r 300
 * 3. Rename output files to match expected names in diplomas-data.ts
 */

const fs = require('fs');
const path = require('path');

const BASE_DIR = path.join(__dirname, '..', 'public', 'diplomas');

// Expected file mappings based on diplomas-data.ts
const fileMappings = {
    ai: [
        { pdf: 'AI Fluency- Framework & Foundations_certificate.pdf', image: 'ai-fluency-framework.jpg' },
        { pdf: 'Claude Code in Action_certificate.pdf', image: 'claude-code-in-action.jpg' },
        { pdf: 'Claude with Amazon Bedrock_certificate.pdf', image: 'claude-amazon-bedrock.jpg' },
        { pdf: "Claude with Google Cloud's Vertex AI_certificate.pdf", image: 'claude-vertex-ai.jpg' },
        { pdf: 'Claude with the Anthropic API_certificate.pdf', image: 'claude-anthropic-api.jpg' },
        { pdf: 'Introduction to Model Context Protocol_certificate.pdf', image: 'mcp-introduction.jpg' },
        { pdf: 'Model Context Protocol- Advanced Topics_certificate.pdf', image: 'mcp-advanced.jpg' },
        { pdf: 'Teaching AI Fluency_certificate.pdf', image: 'teaching-ai-fluency.jpg' }
    ],
    mix: [
        { pdf: 'scan0003.pdf', image: 'scan0003.jpg' },
        { pdf: 'scan0009.pdf', image: 'scan0009.jpg' },
        { pdf: 'scan0012.pdf', image: 'scan0012.jpg' },
        { pdf: 'scan0020.pdf', image: 'scan0020.jpg' },
        { pdf: 'scan0034.pdf', image: 'scan0034.jpg' },
        { pdf: 'scan0035.pdf', image: 'scan0035.jpg' }
    ],
    'it-trainings': [
        { pdf: 'BMCC Grade Transcript.pdf', image: 'bmcc-transcript.jpg' },
        { pdf: 'scan0006.pdf', image: 'scan0006.jpg' },
        { pdf: 'scan0010.pdf', image: 'scan0010.jpg' },
        { pdf: 'scan0011.pdf', image: 'scan0011.jpg' },
        { pdf: 'scan0014.pdf', image: 'scan0014.jpg' },
        { pdf: 'scan0015.pdf', image: 'scan0015.jpg' },
        { pdf: 'scan0016.pdf', image: 'scan0016.jpg' },
        { pdf: 'scan0017.pdf', image: 'scan0017.jpg' },
        { pdf: 'scan0018.pdf', image: 'scan0018.jpg' },
        { pdf: 'scan0019.pdf', image: 'scan0019.jpg' }
    ],
    'industrial-mechanic': [
        { pdf: 'scan0026.pdf', image: 'scan0026.jpg' },
        { pdf: 'scan0027.pdf', image: 'scan0027.jpg' },
        { pdf: 'scan0028.pdf', image: 'scan0028.jpg' },
        { pdf: 'scan0029.pdf', image: 'scan0029.jpg' },
        { pdf: 'scan0030.pdf', image: 'scan0030.jpg' }
    ]
};

function checkFiles() {
    console.log('Checking for existing image files...\n');
    
    let found = 0;
    let missing = 0;
    
    Object.keys(fileMappings).forEach(group => {
        const groupDir = path.join(BASE_DIR, group);
        console.log(`\n${group.toUpperCase()} Group:`);
        
        fileMappings[group].forEach(({ pdf, image }) => {
            const imagePath = path.join(groupDir, image);
            if (fs.existsSync(imagePath)) {
                console.log(`  ✓ ${image}`);
                found++;
            } else {
                console.log(`  ✗ ${image} (missing - needs conversion from ${pdf})`);
                missing++;
            }
        });
    });
    
    console.log(`\n\nSummary: ${found} images found, ${missing} images missing`);
    console.log('\nTo convert PDFs to images:');
    console.log('1. Download PDFs from Google Drive');
    console.log('2. Use: pdftoppm input.pdf output -jpeg -r 300');
    console.log('3. Or use ImageMagick: convert input.pdf output.jpg');
    console.log('4. Save images to the appropriate public/diplomas/{group}/ folder');
}

checkFiles();

