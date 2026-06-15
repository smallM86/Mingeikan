/* ============================================================
   Mingei — Export Utilities (SVG → PNG)
   ============================================================ */

/**
 * Export an SVG element to a PNG data URL via Canvas.
 * @param svgElement - The SVG DOM element to export
 * @param scale - Scale factor for higher resolution (default 2)
 */
export async function svgToPngDataUrl(
  svgElement: SVGSVGElement,
  scale: number = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      // Clone the SVG to avoid modifying the original
      const clone = svgElement.cloneNode(true) as SVGSVGElement;

      // Get dimensions from viewBox or bounding box
      const viewBox = clone.getAttribute('viewBox');
      let width: number;
      let height: number;

      if (viewBox) {
        const parts = viewBox.split(' ').map(Number);
        width = parts[2];
        height = parts[3];
      } else {
        const bbox = svgElement.getBBox();
        width = bbox.width;
        height = bbox.height;
      }

      // Set explicit width/height on clone
      clone.setAttribute('width', String(width));
      clone.setAttribute('height', String(height));

      // Serialize the SVG to a string
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = width * scale;
        canvas.height = height * scale;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        // White background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, width, height);

        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL('image/png'));
      };

      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Failed to load SVG as image'));
      };

      img.src = url;
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Download a data URL as a file.
 */
export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generate a small thumbnail from an SVG element.
 */
export async function generateThumbnail(
  svgElement: SVGSVGElement,
  maxSize: number = 200
): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      const clone = svgElement.cloneNode(true) as SVGSVGElement;
      const viewBox = clone.getAttribute('viewBox');
      let width: number;
      let height: number;

      if (viewBox) {
        const parts = viewBox.split(' ').map(Number);
        width = parts[2];
        height = parts[3];
      } else {
        width = 400;
        height = 400;
      }

      const ratio = Math.min(maxSize / width, maxSize / height);
      const thumbW = Math.round(width * ratio);
      const thumbH = Math.round(height * ratio);

      clone.setAttribute('width', String(width));
      clone.setAttribute('height', String(height));

      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(clone);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = thumbW;
        canvas.height = thumbH;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, thumbW, thumbH);
        ctx.drawImage(img, 0, 0, thumbW, thumbH);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL('image/png', 0.7));
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error('Thumbnail generation failed'));
      };
      img.src = url;
    } catch (err) {
      reject(err);
    }
  });
}
