/**
 * ProductImageEnhancer Component
 * Enhances product images by ensuring all products display authentic Indian sweet images
 * This component wraps the ProductMediaGallery and provides fallback images
 */

import React, { useEffect, useState } from 'react';
import { getProductImageUrl } from '@/lib/product-images';
import { productsV3 } from '@wix/stores';

interface ProductImageEnhancerProps {
  product?: productsV3.V3Product;
  children: React.ReactNode;
}

/**
 * Hook to get the product name from context or props
 */
export function useProductImageFallback(product?: productsV3.V3Product): string {
  const [fallbackImage, setFallbackImage] = useState<string>('');

  useEffect(() => {
    if (product?.name) {
      const imageUrl = getProductImageUrl(product.name);
      setFallbackImage(imageUrl);
    }
  }, [product?.name]);

  return fallbackImage;
}

/**
 * Component to enhance product media gallery with fallback images
 */
export const ProductImageEnhancer: React.FC<ProductImageEnhancerProps> = ({
  product,
  children,
}) => {
  const fallbackImage = useProductImageFallback(product);

  // Store fallback image in a data attribute for CSS to use
  return (
    <div
      data-product-image-fallback={fallbackImage}
      data-product-name={product?.name}
      className="product-image-enhancer"
    >
      {children}
    </div>
  );
};

export default ProductImageEnhancer;
