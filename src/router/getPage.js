/**
 *
 * @param {string} [path]
 */
export const getPage = async (path) => {
  let Page;
  if (typeof window === "undefined") {
    // in Node.js environment
    Page = (await import(`../app${path}/page.jsx`)).default;
  } else {
    // in browser environment
    Page = (await import(`../app${window.location.pathname}/page.jsx`)).default;
  }
  return Page;
};
