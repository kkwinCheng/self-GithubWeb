import React from 'react';

function Projects() {
  const projects = [
    {
      title: '个人博客系统',
      description: '使用 React 和 Node.js 开发的个人博客系统，支持文章发布、评论和用户管理等功能。',
      tech: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: '在线笔记应用',
      description: '一个简洁的在线笔记应用，支持 Markdown 编辑、笔记分类和云端同步。',
      tech: ['Vue.js', 'Express', 'MySQL'],
      link: '#'
    },
    {
      title: '天气预报应用',
      description: '基于公开 API 开发的天气预报应用，支持多城市天气查询和预报。',
      tech: ['React Native', 'Redux', 'Weather API'],
      link: '#'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">我的项目</h1>
      
      <div className="grid gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <a
              href={project.link}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              查看项目
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects; 