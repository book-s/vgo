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
                ],
            },
            {
                text: '后端',
                children: [
                    {text: 'Go',link: '/group/language/go/go'},
                    {text: 'Gin',link: '/group/language/gin/gin'},
                    {text: 'Gofiber',link: '/group/language/gofiber/gofiber'},
                ],
            },
        ],

        sidebar: {
            '/group/vue/': [
                {
                    text: 'Vue',
                    children: [
                        '/group/vue/vue.md',
                    ],
                },
            ],
            '/group/language/go': [
                {
                    text: 'Go',
                    children: [
                        '/group/language/go/go.md',
                    ],
                },
            ],
            '/group/language/gin': [
                {
                    text: 'Gin笔记',
                    children: [
                        '/group/language/gin/gin.md',
                        '/group/language/gin/gin1.md',
                    ],
                },
            ],
            '/group/language/gofiber': [
                {
                    text: 'Gofiber',
                    children: [
                        '/group/language/gofiber/gofiber.md',
                    ],
                },
            ],
        },
    },
}