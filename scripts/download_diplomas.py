#!/usr/bin/env python3
"""
Script to download diploma images from Google Drive folders.

Requirements:
    pip install gdown requests beautifulsoup4

Usage:
    python scripts/download_diplomas.py

Note: Google Drive folders must be set to "Anyone with the link can view"
"""

import os
import sys
import json
import requests
from pathlib import Path
from typing import Dict, List
import re

# Google Drive folder IDs
FOLDERS = {
    'ai': '1n483qGcW25D68p5G2Yz_Y5Ii-Lsm-59I',
    'mix': '1HEre65apUwp2ygr54bfKQ4RA-Qapzeekdsds',
    'it-trainings': '1iaJlUiQHeiDn52AX8KXXr4Hy_kRVX7Tk',
    'industrial-mechanic': '1aQVts8LMBXyf7NwXausa9Q-5e63O1xsd'
}

BASE_DIR = Path(__file__).parent.parent / 'public' / 'diplomas'

def ensure_directories():
    """Create directory structure if it doesn't exist."""
    for group in FOLDERS.keys():
        dir_path = BASE_DIR / group
        dir_path.mkdir(parents=True, exist_ok=True)
        print(f"✓ Directory ready: {dir_path}")

def get_folder_files(folder_id: str) -> List[Dict]:
    """
    Attempt to get files from a Google Drive folder.
    This requires the folder to be publicly accessible.
    """
    # Google Drive folder view URL
    url = f"https://drive.google.com/drive/folders/{folder_id}"
    
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            # Try to extract file IDs from the page
            # This is a simplified approach - full implementation would use Google Drive API
            file_ids = re.findall(r'https://drive\.google\.com/file/d/([a-zA-Z0-9_-]+)', response.text)
            return [{'id': fid} for fid in set(file_ids)]
    except Exception as e:
        print(f"Error accessing folder {folder_id}: {e}")
    
    return []

def download_image(file_id: str, output_path: Path) -> bool:
    """Download an image from Google Drive using direct download link."""
    url = f"https://drive.google.com/uc?export=download&id={file_id}"
    
    try:
        response = requests.get(url, stream=True, timeout=30)
        if response.status_code == 200:
            with open(output_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            return True
    except Exception as e:
        print(f"Error downloading {file_id}: {e}")
    
    return False

def main():
    print("Diploma Download Script")
    print("=" * 50)
    
    ensure_directories()
    
    print("\nNote: This script requires Google Drive folders to be publicly accessible.")
    print("To make folders public:")
    print("1. Open each folder in Google Drive")
    print("2. Click 'Share' → 'Change to anyone with the link'")
    print("3. Set permission to 'Viewer'")
    print("\nAlternatively, you can manually download images and place them in:")
    for group in FOLDERS.keys():
        print(f"  - public/diplomas/{group}/")
    
    print("\n" + "=" * 50)
    print("For automated download, use Google Drive API with OAuth2.")
    print("Or use gdown library: pip install gdown")
    print("Then: gdown --folder https://drive.google.com/drive/folders/{FOLDER_ID}")

if __name__ == "__main__":
    main()

