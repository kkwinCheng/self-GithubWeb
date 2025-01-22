import React from 'react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">欢迎来到我的个人网站</h1>
        <p className="text-xl text-gray-600">前端开发工程师 / 技术爱好者</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">关于我</h2>
        <p className="text-gray-600 leading-relaxed">
          你好！我是一名热爱技术的开发者。我专注于前端开发，擅长使用 React、TypeScript 等现代化技术栈构建用户友好的 Web 应用。
          在这里，你可以了解我的项目经历和技术积累。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">技能专长</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• React 和 现代前端框架</li>
            <li>• 响应式网页设计</li>
            <li>• JavaScript / TypeScript</li>
            <li>• UI/UX 设计原则</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">兴趣爱好</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• 技术博客写作</li>
            <li>• 开源项目贡献</li>
            <li>• 新技术探索</li>
            <li>• 持续学习</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home; 