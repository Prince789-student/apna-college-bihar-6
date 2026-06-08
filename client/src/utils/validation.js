/* src/utils/validation.js */

/**
 * Validation utilities for admin uploads.
 * Provides client‑side checks for PDF files before they are uploaded to Firebase Storage.
 *
 * - `isValidPDF(file)` returns a boolean indicating whether the file passes validation.
 * - `validatePDF(file)` returns an error message string when validation fails, otherwise null.
 */

// Maximum file size allowed for uploads (10 MiB).
export const MAX_PDF_SIZE = 10 * 1024 * 1024; // 10 MB in bytes

/**
 * Checks whether the given File object is a PDF and within the allowed size.
 * @param {File} file - The file selected by the user.
 * @returns {boolean} true if valid, false otherwise.
 */
export function isValidPDF(file) {
  if (!file) return false;
  const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
  const isSizeOk = file.size <= MAX_PDF_SIZE;
  return isPdf && isSizeOk;
}

/**
 * Validates a PDF file and returns an error message if invalid.
 * @param {File} file - The selected file.
 * @returns {string|null} Error message or null when the file is valid.
 */
export function validatePDF(file) {
  if (!file) return 'No file selected.';
  if (!file.type && !file.name.toLowerCase().endsWith('.pdf')) {
    return 'File must be a PDF.';
  }
  if (file.type && file.type !== 'application/pdf') {
    return 'Only PDF files are allowed.';
  }
  if (file.size > MAX_PDF_SIZE) {
    const mb = (MAX_PDF_SIZE / (1024 * 1024)).toFixed(1);
    return `File exceeds maximum size of ${mb} MB.`;
  }
  return null;
}
