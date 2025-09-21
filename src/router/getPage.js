/**
 * 支持的页面文件扩展名，按优先级排序
 */
const PAGE_EXTENSIONS = ['.tsx', '.jsx'];

/**
 * 尝试导入页面，支持多种文件扩展名
 * @param {string} basePath - 基础路径，不包含扩展名
 * @returns {Promise<React.Component|null>}
 */
const tryImportPage = async (basePath) => {
  for (const ext of PAGE_EXTENSIONS) {
    try {
      const module = await import(`../app${basePath}/page${ext}`);
      return module.default;
    } catch (error) {
      // 如果是文件不存在的错误，继续尝试下一个扩展名
      if (error.code === 'ERR_MODULE_NOT_FOUND' || error.message.includes('Cannot resolve module')) {
        continue;
      }
      // 如果是其他错误（语法错误等），直接抛出
      throw error;
    }
  }
  return null;
};

/**
 *
 * @param {string} [path]
 */
export const getPage = async (path) => {
  const targetPath = typeof window === "undefined" 
    ? path  // 服务端使用传入的路径
    : window.location.pathname;  // 客户端使用当前路径
    
  return await tryImportPage(targetPath);
};
