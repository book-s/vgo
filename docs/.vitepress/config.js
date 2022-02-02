module.exports = {
    title: "vitePress Demo",// 网站标题
    description: 'Demo', //网站描述
    base: './', //  部署时的路径 默认 /  可以使用二级地址 /base/
    lang: 'CN', //语言
    // repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: 'img/logo.png',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
          // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
          repo: 'https://github.com/book-s/vgo',
          // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
          // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
          repoLabel: 'GitHub',      
          // 以下为可选的编辑链接选项      
          // 假如你的文档仓库和项目本身不在一个仓库：
          docsRepo: 'https://github.com/book-s/vgo',
          // 假如文档不是放在仓库的根目录下：
          docsDir: 'docs',
          // 假如文档放在一个特定的分支下：
          docsBranch: 'master',          
          editLinks: true,
          editLinkText: '帮助我们改善此页面！',
       lastUpdated: '上次更新',
        logo: '/img/logo.png',
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: '/pages/about/' },
            { text: 'Vue', 
            items:[
                {text:"vue基础", link: '/pages/vue/index'},
            ]
        },
            { text: 'Go', 
            items:[
                { text: 'Golang基础', link: '/pages/golang/0' },
                { text: 'Gin框架', link: '/pages/gin/index' },
            ]
        },
        ],
        //   侧边导航
            sidebar: {
            '/pages/vue': getpagesVue(), 
            '/pages/golang': getpagesGolang(), 
            '/pages/gin/': getpagesGin(),            
          }
    }
}

function getpagesVue() {
    return [
        {
            text:'Vue基础',
            children:[
                { text: '第一章', link: '/pages/vue/index' },        
        ]
        }
    ]
}

function getpagesGolang() {
    return [
        {
            text:'Golang基础',
            children:[
                { text: '第一章', link: '/pages/golang/0' },         
        ]
        }
    ]
}

function getpagesGin() {
    return [
        {
            text:'Gin框架',
            children:[
                { text: '第一章', link: '/pages/gin/index' },         
        ]
        }
    ]
}
