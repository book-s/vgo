import{r as c,o,c as p,d as e,w as a,F as r,a as n,b as s}from"./app.1433cac3.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=n("h1",{id:"node\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#node\u5B89\u88C5","aria-hidden":"true"},"#"),s(" Node\u5B89\u88C5")],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Linux_Ubuntu\u5B89\u88C5Node"),s(`
`),n("span",{class:"token comment"},"# \u67E5\u770B\u7CFB\u7EDF\u662F\u5426\u5B89\u88C5node\u8F6F\u4EF6,\u5982\u679C\u5B58\u5728\u4F1A\u663E\u793A\u8F6F\u4EF6\u7248\u672C\u53F7,\u4E0D\u5B58\u5728\u63D0\u793ACommand `node`not found"),s(`
`),n("span",{class:"token function"},"node"),s(` -v

`),n("span",{class:"token comment"},"# \u4F7F\u7528ubuntu\u547D\u4EE4\u5B89\u88C5nodejs"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt"),s(),n("span",{class:"token function"},"install"),s(` nodejs

`),n("span",{class:"token comment"},"# \u5982\u679C\u4F7F\u7528\u4EE5\u4E0A\u547D\u4EE4\u5B89\u88C5\u63D0\u793A\u672A\u5B89\u88C5,\u5219\u9700\u8981\u66F4\u65B0\u4E00\u4E0Bubuntu\u7CFB\u7EDF\u8F6F\u4EF6\u6E90\u4FE1\u606F\u547D\u4EE4\u5982\u4E0B"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(` update

`),n("span",{class:"token comment"},"# \u4ECE NodeSource \u4E2D\u5B89\u88C5 Node.js \u548C npm\u6700\u65B0\u7248\u672C, \u4E0B\u8F7D\u6700\u65B0\u7248\u672C\u4E3A16.x"),s(`
`),n("span",{class:"token function"},"curl"),s(" -sL https://deb.nodesource.com/setup_16.x "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"sudo"),s(" -E "),n("span",{class:"token function"},"bash"),s(` -

`),n("span",{class:"token comment"},"# \u5B89\u88C5\u521A\u4E0B\u8F7D\u7684\u7248\u672C"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt-get"),s(),n("span",{class:"token function"},"install"),s(` -y
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br")])],-1),k=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# npm\u5B89\u88C5\u547D\u4EE4\u5982\u4E0B"),s(`

`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"apt"),s(" instll "),n("span",{class:"token function"},"npm"),s(`

`),n("span",{class:"token comment"},"# \u67E5\u770B\u6E90\u5730\u5740\u547D\u4EE4"),s(`
`),n("span",{class:"token function"},"npm"),s(` config get registry

`),n("span",{class:"token comment"},"# \u4E34\u65F6\u4F7F\u7528\u6DD8\u5B9D\u6E90"),s(`
`),n("span",{class:"token function"},"npm"),s(" --registry https://registry.npm.taobao.org "),n("span",{class:"token function"},"install"),s(` node-red-contrib-composer@latest

`),n("span",{class:"token comment"},"# \u5168\u5C40\u914D\u7F6E\u5207\u6362\u5230\u6DD8\u5B9D\u6E90"),s(`
`),n("span",{class:"token function"},"npm"),s(" config "),n("span",{class:"token builtin class-name"},"set"),s(` registry https://registry.npm.taobao.org

`),n("span",{class:"token comment"},"# npm\u6E05\u7A7A\u7F13\u5B58"),s(`
`),n("span",{class:"token function"},"npm"),s(` cache clean -f

`),n("span",{class:"token comment"},"# \u81EA\u52A8\u5168\u5C40\u66F4\u65B0\u5230\u6700\u65B0\u7248\u672C"),s(`
`),n("span",{class:"token function"},"sudo"),s(),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` npm@latest -g

`),n("span",{class:"token comment"},"# cnpm\u5168\u5C40\u5B89\u88C5"),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" -g cnpm --registry"),n("span",{class:"token operator"},"="),s(`https://registry.npm.taobao.org

`),n("span",{class:"token comment"},"# proxy\u4EE3\u7406"),s(`
`),n("span",{class:"token function"},"npm"),s(` config delete proxy
`),n("span",{class:"token function"},"npm"),s(" config "),n("span",{class:"token builtin class-name"},"set"),s(` https-proxy

`),n("span",{class:"token comment"},"# NPM\u5E38\u7528\u547D\u4EE4"),s(`

`),n("span",{class:"token function"},"npm"),s(" -v "),n("span",{class:"token comment"},"# \u901A\u8FC7\u67E5\u770B\u7248\u672C\uFF0C\u770Bnpm\u662F\u5426\u5B89\u88C5\u6210\u529F"),s(`

`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" Module Name "),n("span",{class:"token comment"},"# \u4F7F\u7528npm\u547D\u4EE4\u5B89\u88C5\u6A21\u5757"),s(`

`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" Module Name -g "),n("span",{class:"token comment"},"# \u53EF\u4EE5\u76F4\u63A5\u5728\u547D\u4EE4\u884C\u91CC\u4F7F\u7528"),s(`

`),n("span",{class:"token function"},"npm"),s(" list -g "),n("span",{class:"token comment"},"# \u67E5\u770B\u6240\u6709\u5168\u5C40\u5B89\u88C5\u7684\u6A21\u5757"),s(`

`),n("span",{class:"token function"},"npm"),s(" list vue "),n("span",{class:"token comment"},"# \u67E5\u770B\u67D0\u4E2A\u6A21\u5757\u7684\u7248\u672C\u53F7"),s(`

`),n("span",{class:"token function"},"npm"),s(" -g "),n("span",{class:"token function"},"install"),s(" npm@5.9.1 "),n("span",{class:"token comment"},"# \uFF08@\u540E\u8DDF\u7248\u672C\u53F7\uFF09\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u66F4\u65B0npm\u7248\u672C"),s(`

`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" -save moduleName -save "),n("span",{class:"token comment"},"# \u5728package\u6587\u4EF6\u7684dependencies\u8282\u70B9\u5199\u5165\u4F9D\u8D56"),s(`

`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(" -save-dev noduleName -save-dev "),n("span",{class:"token comment"},"# \u5728package\u6587\u4EF6\u7684devDependencies\u8282\u70B9\u5199\u5165\u4F9D\u8D56"),s(`

dependecies: `),n("span",{class:"token comment"},"# \u8FD0\u884C\u65F6\u7684\u4F9D\u8D56\uFF0C\u53D1\u5E03\u540E\uFF0C\u5373\u751F\u4EA7\u73AF\u5883\u4E0B\u8FD8\u9700\u8981\u7528\u7684\u6A21\u5757"),s(`

devDependencies `),n("span",{class:"token comment"},"# \u5F00\u53D1\u65F6\u5019\u7684\u4F9D\u8D56\uFF0C\u91CC\u9762\u7684\u6A21\u5757\u65F6\u5F00\u53D1\u65F6\u7528\u7684\uFF0C\u53D1\u5E03\u65F6\u7528\u4E0D\u5230\u5B83\uFF0C\u6BD4\u5982\u9879\u76EE\u4E2D\u4F7F\u7528\u7684gulp\u3001\u538B\u7F29css\u3001js\u7684\u6A21\u5757\u3002\u8FD9\u4E9B\u6A21\u5757\u5728\u6211\u4EEC\u7684\u9879\u76EE\u90E8\u7F72\u540E\u662F\u4E0D\u9700\u8981\u7684\u3002"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br")])],-1),d=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Ubuntu\u5B89\u88C5NVM, Node\u7248\u672C\u7BA1\u7406\u5668"),s(`
`),n("span",{class:"token function"},"curl"),s(" https://raw.githubusercontent.com/creationix/nvm/master/install.sh "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token function"},"bash"),s(` 

`),n("span",{class:"token comment"},"# \u4F7F\u7528nvm\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u7684Node"),s(`
`),n("span",{class:"token comment"},"# \u5982\u4E0B\u4E24\u4E2A\u547D\u4EE4\u5176\u4E00\u5217\u51FANode\u7248\u672C\u53F7,\u548C\u9ED8\u8BA4\u7248\u672C\u4FE1\u606F"),s(`
nvm `),n("span",{class:"token function"},"ls"),s(` 
nvm list 

`),n("span",{class:"token comment"},"# \u5B89\u88C5\u6307\u5B9A\u7248\u672CNode"),s(`
nvm `),n("span",{class:"token function"},"install"),s(),n("span",{class:"token function"},"node"),s(),n("span",{class:"token number"},"16.13"),s(`.2

`),n("span",{class:"token comment"},"# \u67E5\u627E\u53EF\u7528node.js\u7248\u672C"),s(`
nvm ls-remote

`),n("span",{class:"token comment"},"# \u8BBE\u7F6E\u9ED8\u8BA4\u7248\u672C"),s(`
nvm `),n("span",{class:"token builtin class-name"},"alias"),s(" default "),n("span",{class:"token number"},"16.13"),s(".2   "),n("span",{class:"token comment"},"# 16.13.2\u662F\u7248\u672C\u53F7"),s(`

`),n("span",{class:"token comment"},"# \u5220\u9664\u5DF2\u5B89\u88C5\u7684\u6307\u5B9A\u7248\u672C"),s(`
nvm uninstall `),n("span",{class:"token operator"},"<"),s("version"),n("span",{class:"token operator"},">"),s(` 
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br")])],-1);function f(g,h){const l=c("CodeGroupItem"),t=c("CodeGroup");return o(),p(r,null,[u,e(t,null,{default:a(()=>[e(l,{title:"Nodejs",active:""},{default:a(()=>[b]),_:1}),e(l,{title:"NPM"},{default:a(()=>[k]),_:1}),e(l,{title:"NVM"},{default:a(()=>[d]),_:1})]),_:1})],64)}var N=m(i,[["render",f]]);export{N as default};
