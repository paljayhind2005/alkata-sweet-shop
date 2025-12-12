/**
 * Product Image Mapping
 * Maps product names/IDs to authentic Indian sweet images
 * This ensures all products display professional food photography
 */

export const INDIAN_SWEET_IMAGES: Record<string, string> = {
  // Primary sweets with generated images
  'rasgulla': 'https://static.wixstatic.com/media/b1c664_16f2c15541e745b6b1a8f522fccd1569~mv2.png?originWidth=576&originHeight=768',
  'kheer': 'https://static.wixstatic.com/media/b1c664_1c39759d044c4e229fe82c0c2b002e92~mv2.png?originWidth=576&originHeight=768',
  'laddu': 'https://static.wixstatic.com/media/b1c664_e84130862ea64c25ac31f7a6c0f0fba7~mv2.png?originWidth=576&originHeight=768',
  'halwa': 'https://static.wixstatic.com/media/b1c664_f2a6762b7f2b49c89192b22ce25932e5~mv2.png?originWidth=576&originHeight=768',
  'peda': 'https://static.wixstatic.com/media/b1c664_af4abade60e84c359265fbd4887add4b~mv2.png?originWidth=576&originHeight=768',
  
  // Additional sweets
  'gulab jamun': 'https://static.wixstatic.com/media/b1c664_b88770e9270c4485968c34cc8d115d92~mv2.png?originWidth=576&originHeight=768',
  'barfi': 'https://static.wixstatic.com/media/b1c664_588cd13a205c44d59a92626bece6cd29~mv2.png?originWidth=576&originHeight=768',
  'jalebi': 'https://static.wixstatic.com/media/b1c664_51171461fdff4092b31e57a3d804012d~mv2.png?originWidth=576&originHeight=768',
  'kaju katli': 'https://static.wixstatic.com/media/b1c664_3d03d455070a4ec683c91f642453a2ad~mv2.png?originWidth=576&originHeight=768',
  'burfi': 'https://static.wixstatic.com/media/b1c664_379121990acf479b8acfe1e1f71e50ab~mv2.png?originWidth=576&originHeight=768',
};

/**
 * Get image URL for a product by name
 * Falls back to a default image if product name doesn't match
 */
export function getProductImageUrl(productName?: string): string {
  if (!productName) {
    return INDIAN_SWEET_IMAGES['rasgulla']; // Default fallback
  }

  const normalizedName = productName.toLowerCase().trim();
  
  // Direct match
  if (INDIAN_SWEET_IMAGES[normalizedName]) {
    return INDIAN_SWEET_IMAGES[normalizedName];
  }

  // Partial match - check if product name contains any of our sweet names
  for (const [sweetName, imageUrl] of Object.entries(INDIAN_SWEET_IMAGES)) {
    if (normalizedName.includes(sweetName) || sweetName.includes(normalizedName)) {
      return imageUrl;
    }
  }

  // Fallback to a random sweet image for consistency
  const sweetNames = Object.keys(INDIAN_SWEET_IMAGES);
  const randomIndex = Math.abs(productName.charCodeAt(0)) % sweetNames.length;
  return INDIAN_SWEET_IMAGES[sweetNames[randomIndex]];
}

/**
 * Get all available sweet images
 */
export function getAllSweetImages(): string[] {
  return Object.values(INDIAN_SWEET_IMAGES);
}

/**
 * Get all sweet names
 */
export function getAllSweetNames(): string[] {
  return Object.keys(INDIAN_SWEET_IMAGES);
}
