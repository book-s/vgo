import{r as a,o as l,c as i,d as e,w as t,F as r,a as n,b as s}from"./app.1433cac3.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const m={},u=n("h1",{id:"git",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),s(" Git")],-1),b=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Git\u914D\u7F6E \u5E38\u7528\u547D\u4EE4"),s(`
`),n("span",{class:"token function"},"git"),s(" config -l "),n("span",{class:"token comment"},"# \u914D\u7F6E"),s(`
`),n("span",{class:"token function"},"git"),s(" config --system --list "),n("span",{class:"token comment"},"# Git\u7CFB\u7EDF\u914D\u7F6E"),s(`
`),n("span",{class:"token function"},"git"),s(" config --global --list "),n("span",{class:"token comment"},"# Git\u672C\u5730\u5168\u5C40\u914D\u7F6E"),s(`

`),n("span",{class:"token comment"},"# .Gitconfig\u6587\u4EF6\u5728Linux\u6216MacOSX\u7CFB\u7EDF\u7684\u7528\u6237\u76EE\u5F55\u4E0B"),s(`
`),n("span",{class:"token comment"},"# Git\u672C\u5730\u5FC5\u987B\u914D\u7F6E\u4FE1\u606F\u5982\u4E0B"),s(`
`),n("span",{class:"token function"},"git"),s(" config --global user.name "),n("span",{class:"token string"},'"name"'),s(),n("span",{class:"token comment"},"# \u7528\u6237\u540D\u79F0"),s(`
`),n("span",{class:"token function"},"git"),s(" config --global user.email "),n("span",{class:"token string"},'"xxx@xxx.com"'),s(),n("span",{class:"token comment"},"# \u7528\u6237\u90AE\u7BB1"),s(`

Git\u57FA\u672C\u7406\u8BBA\uFF08\u6838\u5FC3\uFF09

-- Git \u672C\u5730\u6709\u4E09\u4E2A\u5DE5\u4F5C\u533A\u57DF\u548C\u4E00\u4E2A\u8FDC\u7A0B\u4ED3\u5E93
-- \u5DE5\u4F5C\u76EE\u5F55`),n("span",{class:"token punctuation"},"("),s("Working Directory"),n("span",{class:"token punctuation"},")"),s(`
-- \u6682\u5B58\u533A`),n("span",{class:"token punctuation"},"("),s("Stage Index"),n("span",{class:"token punctuation"},")"),s(`
-- \u8D44\u6E90\u533A`),n("span",{class:"token punctuation"},"("),s("Repository\u6216Git Directory"),n("span",{class:"token punctuation"},")"),s(`
-- \u8FDC\u7A0BGit\u4ED3\u5E93`),n("span",{class:"token punctuation"},"("),s("Remote Directory"),n("span",{class:"token punctuation"},")"),s(`


`),n("span",{class:"token function"},"git"),s(" status                "),n("span",{class:"token comment"},"# \u67E5\u770B\u6240\u6709\u6587\u4EF6\u72B6\u6001"),s(`
`),n("span",{class:"token function"},"git"),s(" init                  "),n("span",{class:"token comment"},"# \u521D\u59CB\u5316"),s(`
`),n("span",{class:"token function"},"git"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token builtin class-name"},"."),s("                 "),n("span",{class:"token comment"},"# \u6DFB\u52A0\u6240\u6709\u5C4B\u5185\u6309\u5230\u6682\u5B58\u533A"),s(`
`),n("span",{class:"token function"},"git"),s(),n("span",{class:"token function"},"add"),s(" -A                "),n("span",{class:"token comment"},"# \u6DFB\u52A0git\u4ED3\u5E93\u6682\u5B58\u533A"),s(`
`),n("span",{class:"token function"},"git"),s(" commit -m "),n("span",{class:"token string"},'"\u6D88\u606F\u5185\u5BB9"'),s("   "),n("span",{class:"token comment"},"# \u63D0\u4EA4\u6682\u5B58\u533A\u5185\u5BB9\u5230\u672C\u5730\u4ED3\u5E93 -m \u63D0\u4EA4\u4FE1\u606F"),s(`
`),n("span",{class:"token function"},"git"),s(" checkout              "),n("span",{class:"token comment"},"# \u64A4\u9500\u63D0\u4EA4"),s(`
`),n("span",{class:"token function"},"git"),s(" reset                 "),n("span",{class:"token comment"},"# "),s(`
`),n("span",{class:"token function"},"git"),s(" push                  "),n("span",{class:"token comment"},"# \u63D0\u4EA4\u5230\u672C\u5730\u4ED3\u5E93\u6216\u8FDC\u7A0B\u4ED3\u5E93"),s(`
`),n("span",{class:"token function"},"git"),s(" pull                  "),n("span",{class:"token comment"},"# \u62C9\u53D6\u672C\u5730\u4ED3\u5E93\u6700\u65B0\u7248\u672C"),s(`

.gitignore                `),n("span",{class:"token comment"},"# \u5FFD\u7565\u4E0D\u9700\u8981\u7684\u4E0A\u4F20\u7684\u6587\u4EF6 "),s(`
*.txt                     `),n("span",{class:"token comment"},"# \u5FFD\u7565\u6240\u6709\u5E26txt\u6587\u4EF6\u5185\u5BB9"),s(`
node_modules/             `),n("span",{class:"token comment"},"# \u5FFD\u7565\u6587\u4EF6/\u76EE\u5F55\u5185\u6240\u6709\u5185\u5BB9"),s(`
.DS_Store                 `),n("span",{class:"token comment"},"# \u5FFD\u7565\u6587\u4EF6\u5185\u5BB9"),s(`
/abc                      `),n("span",{class:"token comment"},"# \u5FFD\u7565/\u6587\u4EF6\u524D\u76EE\u5F55\u6240\u6709\u5185\u5BB9"),s(`
`)])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br")])],-1);function k(g,d){const c=a("CodeGroupItem"),o=a("CodeGroup");return l(),i(r,null,[u,e(o,null,{default:t(()=>[e(c,{title:"Git",active:""},{default:t(()=>[b]),_:1})]),_:1})],64)}var x=p(m,[["render",k]]);export{x as default};
