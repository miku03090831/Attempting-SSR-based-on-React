import React from "react";

interface Props {
  title?: string;
}

const TestPage: React.FC<Props> = ({ title = "TypeScript 测试页面" }) => {
  const handleClick = (): void => {
    console.log("TypeScript 页面点击事件");
  };

  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: '#f0f8ff', 
      borderRadius: '8px',
      margin: '1rem'
    }}>
      <h1 style={{ color: '#2c3e50' }}>{title}</h1>
      <p>这是一个 TypeScript + React 页面！</p>
      
      <button 
        onClick={handleClick}
        style={{
          backgroundColor: '#3498db',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        点击测试 TypeScript
      </button>
      
      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p>✨ 这个页面演示了：</p>
        <ul>
          <li>TypeScript 接口定义</li>
          <li>React.FC 类型注解</li>
          <li>函数返回类型</li>
          <li>自动扩展名检测</li>
        </ul>
      </div>
    </div>
  );
};

export default TestPage;
