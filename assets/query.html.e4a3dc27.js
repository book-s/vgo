import{e as s}from"./app.1433cac3.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=s(`<h1 id="\u589E\u5220\u6539\u67E5" tabindex="-1"><a class="header-anchor" href="#\u589E\u5220\u6539\u67E5" aria-hidden="true">#</a> \u589E\u5220\u6539\u67E5</h1><h2 id="\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> \u6DFB\u52A0\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u6DFB\u52A0\u6570\u636E</p><h3 id="insert-\u65B9\u6CD5\u4E00" tabindex="-1"><a class="header-anchor" href="#insert-\u65B9\u6CD5\u4E00" aria-hidden="true">#</a> insert \u65B9\u6CD5\u4E00</h3><ul><li>\u6DFB\u52A0\u5355\u6311\u6570\u636E</li><li>\u6DFB\u52A0\u591A\u6761\u6570\u636E</li><li>insert [into] table__name [(column_name_)] {values|value}</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u63D2\u5165\u5355\u6761\u6570\u636E</span>
mysql<span class="token operator">&gt;</span> insert into <span class="token builtin class-name">test</span> <span class="token punctuation">(</span>id,name<span class="token punctuation">)</span> value<span class="token punctuation">(</span><span class="token number">1</span>,<span class="token string">&#39;Rave&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>

<span class="token comment"># \u63D2\u5165\u591A\u6761\u6570\u636E</span>
mysql<span class="token operator">&gt;</span> insert into test<span class="token punctuation">(</span>id,name<span class="token punctuation">)</span> value<span class="token punctuation">(</span><span class="token number">2</span>,<span class="token string">&#39;leva&#39;</span><span class="token punctuation">)</span>,<span class="token punctuation">(</span><span class="token number">3</span>,<span class="token string">&#39;zlk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Query OK, <span class="token number">2</span> rows affected <span class="token punctuation">(</span><span class="token number">0.02</span> sec<span class="token punctuation">)</span>
Records: <span class="token number">2</span>  Duplicates: <span class="token number">0</span>  Warnings: <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="insert-\u65B9\u6CD5\u4E8C" tabindex="-1"><a class="header-anchor" href="#insert-\u65B9\u6CD5\u4E8C" aria-hidden="true">#</a> insert \u65B9\u6CD5\u4E8C</h3><ul><li>insert [into] table_name set col_name = {expr|default}</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> insert into <span class="token builtin class-name">test</span> <span class="token builtin class-name">set</span> <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">4</span>,name <span class="token operator">=</span> <span class="token string">&#39;akai&#39;</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h2 id="\u67E5\u8BE2\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6570\u636E" aria-hidden="true">#</a> \u67E5\u8BE2\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">select\u67E5\u8BE2\u6570\u636E</p><ul><li>*\u8868\u793A\u6240\u6709\u5185\u5BB9<code>select * from table_name [where];</code></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from <span class="token builtin class-name">test</span><span class="token punctuation">;</span>
+------+------+
<span class="token operator">|</span> <span class="token function">id</span>   <span class="token operator">|</span> name <span class="token operator">|</span>
+------+------+
<span class="token operator">|</span>    <span class="token number">1</span> <span class="token operator">|</span> Rave <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">2</span> <span class="token operator">|</span> leva <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">3</span> <span class="token operator">|</span> zlk  <span class="token operator">|</span>
<span class="token operator">|</span>    <span class="token number">4</span> <span class="token operator">|</span> akai <span class="token operator">|</span>
+------+------+
<span class="token number">4</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> name from <span class="token builtin class-name">test</span><span class="token punctuation">;</span>
+------+
<span class="token operator">|</span> name <span class="token operator">|</span>
+------+
<span class="token operator">|</span> Rave <span class="token operator">|</span>
<span class="token operator">|</span> leva <span class="token operator">|</span>
<span class="token operator">|</span> zlk  <span class="token operator">|</span>
<span class="token operator">|</span> akai <span class="token operator">|</span>
+------+
<span class="token number">4</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4E0E\u6761\u4EF6\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4E0E\u6761\u4EF6\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u8BE2\u6307\u5B9A\u5B57\u6BB5\u4E0E\u6761\u4EF6\u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> name from <span class="token builtin class-name">test</span> where <span class="token function">id</span> <span class="token operator">&gt;</span><span class="token number">2</span><span class="token punctuation">;</span>
+------+
<span class="token operator">|</span> name <span class="token operator">|</span>
+------+
<span class="token operator">|</span> zlk  <span class="token operator">|</span>
<span class="token operator">|</span> akai <span class="token operator">|</span>
+------+
<span class="token number">2</span> rows <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div><h2 id="\u66F4\u65B0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u6570\u636E" aria-hidden="true">#</a> \u66F4\u65B0\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u66F4\u65B0\u6570\u636E</p><ul><li>update table_name set col_name1={expr1|default} [where]</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F8B\u5B50\uFF1A\u5C06id = 3 \u7684name \u4FEE\u6539\u4E3A\u2018\u4E0D\u52A8\u2019</span>
mysql<span class="token operator">&gt;</span> update <span class="token builtin class-name">test</span> <span class="token builtin class-name">set</span> name <span class="token operator">=</span> <span class="token string">&#39;\u4E0D\u52A8&#39;</span> where <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.06</span> sec<span class="token punctuation">)</span>
Rows matched: <span class="token number">1</span>  Changed: <span class="token number">1</span>  Warnings: <span class="token number">0</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></div><h2 id="\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u5220\u9664\u6570\u636E</p><ul><li>delete from table_name where where_conditon;</li><li>\u6CE8\u610F\uFF1A\u4E00\u5B9A\u8981\u5199where\u6761\u4EF6\uFF0C\u4E0D\u7136\u4F1A\u5220\u9664\u5168\u90E8\u6570\u636E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F8B\u5B50\uFF1A\u5C06id = 1 \u7684\u6570\u636E\u5220\u9664</span>
mysql<span class="token operator">&gt;</span> delete from <span class="token builtin class-name">test</span> where <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
Query OK, <span class="token number">1</span> row affected <span class="token punctuation">(</span><span class="token number">0.04</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div><h2 id="\u7EC3\u4E60\u9898" tabindex="-1"><a class="header-anchor" href="#\u7EC3\u4E60\u9898" aria-hidden="true">#</a> \u7EC3\u4E60\u9898</h2><h3 id="_1-\u5EFA\u4E00\u5F20\u5B66\u751F\u8868\u5305\u542B-id\u3001\u59D3\u540D\u3001\u5E74\u9F84\u3001\u6027\u522B" tabindex="-1"><a class="header-anchor" href="#_1-\u5EFA\u4E00\u5F20\u5B66\u751F\u8868\u5305\u542B-id\u3001\u59D3\u540D\u3001\u5E74\u9F84\u3001\u6027\u522B" aria-hidden="true">#</a> 1. \u5EFA\u4E00\u5F20\u5B66\u751F\u8868\u5305\u542B\uFF08id\u3001\u59D3\u540D\u3001\u5E74\u9F84\u3001\u6027\u522B\uFF09</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; create table student(
    -&gt; id int,
    -&gt; name varchar(10),
    -&gt; age int,
    -&gt; sex varchar(10)
    -&gt; );
Query OK, 0 rows affected (0.09 sec)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-\u67E5\u770B\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u8868\u7ED3\u6784" aria-hidden="true">#</a> 2. \u67E5\u770B\u8868\u7ED3\u6784</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; desc student;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
| age   | int(11)     | YES  |     | NULL    |       |
| sex   | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_3-\u589E\u52A0\u56DB\u6761\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_3-\u589E\u52A0\u56DB\u6761\u6570\u636E" aria-hidden="true">#</a> 3. \u589E\u52A0\u56DB\u6761\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; insert into student values(1,&#39;zlk&#39;,25,&#39;\u7537&#39;),(2,&#39;rave&#39;,23,&#39;\u5973&#39;),(3,&#39;leva&#39;,29,&#39;\u5973&#39;),(4,&#39;one&#39;,25,&#39;\u5973&#39;);
Query OK, 4 rows affected (0.03 sec)
Records: 4  Duplicates: 0  Warnings: 0
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="_4-\u67E5\u8BE2\u6240\u6709\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_4-\u67E5\u8BE2\u6240\u6709\u6570\u636E" aria-hidden="true">#</a> 4. \u67E5\u8BE2\u6240\u6709\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | \u7537   |
|    2 | rave |   23 | \u5973   |
|    3 | leva |   29 | \u5973   |
|    4 | one  |   25 | \u5973   |
+------+------+------+------+
4 rows in set (0.00 sec)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="_5-\u5220\u9664id-3\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_5-\u5220\u9664id-3\u7684\u6570\u636E" aria-hidden="true">#</a> 5. \u5220\u9664id=3\u7684\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; delete from student where id = 3;
Query OK, 1 row affected (0.09 sec)mysql&gt; 

mysql&gt;select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | \u7537   |
|    2 | rave |   23 | \u5973   |
|    4 | one  |   25 | \u5973   |
+------+------+------+------+
3 rows in set (0.00 sec)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_6-\u5C06\u6027\u522B\u5973\u7684-\u4FEE\u6539\u4E3A\u7537" tabindex="-1"><a class="header-anchor" href="#_6-\u5C06\u6027\u522B\u5973\u7684-\u4FEE\u6539\u4E3A\u7537" aria-hidden="true">#</a> 6. \u5C06\u6027\u522B\u5973\u7684\uFF0C\u4FEE\u6539\u4E3A\u7537</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mysql&gt; update student set sex = &#39;\u7537&#39; where id = 2;
Query OK, 1 row affected (0.10 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql&gt; update student set sex = &#39;\u7537&#39; where id = 4;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql&gt; select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | \u7537   |
|    2 | rave |   23 | \u7537   |
|    4 | one  |   25 | \u7537   |
+------+------+------+------+
3 rows in set (0.01 sec)
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="_7-\u7B80\u5355\u8BF4\u660E\u7528\u6237-\u6570\u636E\u5E93-\u8868\u4E0E\u6570\u636E\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_7-\u7B80\u5355\u8BF4\u660E\u7528\u6237-\u6570\u636E\u5E93-\u8868\u4E0E\u6570\u636E\u7684\u5173\u7CFB" aria-hidden="true">#</a> 7. \u7B80\u5355\u8BF4\u660E\u7528\u6237\uFF0C\u6570\u636E\u5E93\uFF0C\u8868\u4E0E\u6570\u636E\u7684\u5173\u7CFB</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,24);function p(l,r){return e}var i=n(a,[["render",p]]);export{i as default};
