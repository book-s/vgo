module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'VgoPress',
    description: '前端后端学习博客',
    base:"/vgo/",
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        navbar: [
            {
                text: '前端',
                children: [
                    {text: 'Vue',link: '/group/vue/vue'},
                    {text: 'Axios',link: '/group/axios/axios'},
                ],
            },
        ],

        sidebar: {
            '/group/': [
                {
                    text: 'Vue',
                    children: ['/group/vue/vue.md', '/group/axios/axios.md'],
                },
            ],
        },
    },
}