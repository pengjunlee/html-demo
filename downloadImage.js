  function downloadImage(imageUrl) {
      const link = document.createElement('a'); // 创建一个链接元素
      link.href = imageUrl; // 设置链接的 href 为图片的 URL
      link.download = ''; // 设置 download 属性，建议使用文件名，例如 'image.png'
      document.body.appendChild(link); // 将链接添加到文档中
      link.click(); // 模拟点击链接
      document.body.removeChild(link); // 点击后移除链接
  }