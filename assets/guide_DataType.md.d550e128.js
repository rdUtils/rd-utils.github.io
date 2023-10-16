import{_ as s,o as a,c as l,a as n}from"./app.58811f42.js";const u=JSON.parse('{"title":"类型判断","description":"","frontmatter":{},"headers":[{"level":2,"title":"isObject","slug":"isobject","link":"#isobject","children":[]},{"level":2,"title":"isDate","slug":"isdate","link":"#isdate","children":[]},{"level":2,"title":"isNotEmpty","slug":"isnotempty","link":"#isnotempty","children":[]},{"level":2,"title":"isEmpty","slug":"isempty","link":"#isempty","children":[]},{"level":2,"title":"isNumber","slug":"isnumber","link":"#isnumber","children":[]},{"level":2,"title":"isNull","slug":"isnull","link":"#isnull","children":[]},{"level":2,"title":"isUndefined","slug":"isundefined","link":"#isundefined","children":[]},{"level":2,"title":"isUndefinedOrNull","slug":"isundefinedornull","link":"#isundefinedornull","children":[]}],"relativePath":"guide/DataType.md","lastUpdated":1696675603000}'),e={name:"guide/DataType.md"},t=n(`<h1 id="类型判断" tabindex="-1">类型判断 <a class="header-anchor" href="#类型判断" aria-hidden="true">#</a></h1><h2 id="isobject" tabindex="-1">isObject <a class="header-anchor" href="#isobject" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否是对象</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isObject</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isdate" tabindex="-1">isDate <a class="header-anchor" href="#isdate" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否日期类型</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isDate</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isnotempty" tabindex="-1">isNotEmpty <a class="header-anchor" href="#isnotempty" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否不为空：包含[]，0，{}</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isNotEmpty</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isempty" tabindex="-1">isEmpty <a class="header-anchor" href="#isempty" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断非空，不包含[]，0，{}</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isEmpty</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isnumber" tabindex="-1">isNumber <a class="header-anchor" href="#isnumber" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否数字</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isNumber</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isnull" tabindex="-1">isNull <a class="header-anchor" href="#isnull" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否为 null</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isNull</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isundefined" tabindex="-1">isUndefined <a class="header-anchor" href="#isundefined" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否未定义</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isUndefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="isundefinedornull" tabindex="-1">isUndefinedOrNull <a class="header-anchor" href="#isundefinedornull" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断是否 null 或者 undefined</p></div><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isUndefinedOrNull</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,25),p=[t];function o(i,c,r,d,y,D){return a(),l("div",null,p)}const h=s(e,[["render",o]]);export{u as __pageData,h as default};