webpackJsonp([0x8e6ad563aa2e],{728:function(a,e){a.exports={data:{markdownRemark:{html:'<p>This round-up is a special edition on <a href="https://facebook.github.io/flux/">Flux</a>. If you expect to see diagrams showing arrows that all point in the same direction, you won’t be disappointed!</p>\n<h2 id="react-and-flux-at-forwardjs"><a href="#react-and-flux-at-forwardjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React And Flux at ForwardJS</h2>\n<p>Facebook engineers <a href="https://github.com/jingc">Jing Chen</a> and <a href="https://github.com/fisherwebdev">Bill Fisher</a> gave a talk about Flux and React at <a href="http://forwardjs.com/">ForwardJS</a>, and how using an application architecture with a unidirectional data flow helped solve recurring bugs.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/i__969noyAM" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h1 id="yahoo"><a href="#yahoo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Yahoo</h1>\n<p>Yahoo is converting Yahoo Mail to React and Flux and in the process, they open sourced several components. This will help you get an isomorphic application up and running.</p>\n<ul>\n<li><a href="https://github.com/yahoo/flux-router-component">Flux Router Component</a></li>\n<li><a href="https://github.com/yahoo/dispatchr">Dispatchr</a></li>\n<li><a href="https://github.com/yahoo/fetchr">Fetchr</a></li>\n<li><a href="https://github.com/yahoo/flux-examples">Flux Examples</a></li>\n</ul>\n<h2 id="reflux"><a href="#reflux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reflux</h2>\n<p><a href="https://spoike.ghost.io/">Mikael Brassman</a> wrote <a href="https://github.com/spoike/refluxjs">Reflux</a>, a library that implements Flux concepts. Note that it diverges significantly from the way we use Flux at Facebook. He explains <a href="https://spoike.ghost.io/deconstructing-reactjss-flux/">the reasons why in a blog post</a>.</p>\n<center>\n<a href="https://spoike.ghost.io/deconstructing-reactjss-flux/">\n  <a class="gatsby-resp-image-link" href="/static/reflux-flux-d3e5d0171e6314fdff557935cd5529ae-401d0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 442px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 27.14932126696833%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAuUlEQVQY002P2w6EIAxE/f9P3F3BAopGVO4Xn3aC2WRPQlNmpkk7lFK89yEE1JRSrQ1K6EDJubRWc85P5p9cyuDsMQkhpRKC1lVj0tmLjZNSEuz7BmVbNRGpeZZSyA5J8iFi2HASnHHGmF6Uc86YHcMMj0jrBcoyy4lzIoHM6/UePyMJcj4OOaXzPI8D5Ywx3vdda72AtShYGArO6YI1xlwdhGENpdTWGk567MezP64fzxdL4YraQfMFk08WaJLxFDMAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="reflux flux" title="" src="/static/reflux-flux-d3e5d0171e6314fdff557935cd5529ae-401d0.png" srcset="/static/reflux-flux-d3e5d0171e6314fdff557935cd5529ae-db912.png 210w,\n/static/reflux-flux-d3e5d0171e6314fdff557935cd5529ae-67e8a.png 420w,\n/static/reflux-flux-d3e5d0171e6314fdff557935cd5529ae-401d0.png 442w" sizes="(max-width: 442px) 100vw, 442px">\n    </span>\n  </span>\n  \n  </a>\n    </a>\n</center>\n<h2 id="react-and-flux-interview"><a href="#react-and-flux-interview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React and Flux Interview</h2>\n<p><a href="http://ianobermiller.com/">Ian Obermiller</a>, engineer at Facebook, <a href="http://ianobermiller.com/blog/2014/09/15/react-and-flux-interview/">made a lengthy interview</a> on the experience of using React and Flux in order to build probably the biggest React application ever written so far.</p>\n<blockquote>\n<p>I’ve actually said this many times to my team too, I love React. It’s really great for making these complex applications. One thing that really surprised me with it is that React combined with a sane module system like CommonJS, and making sure that you actually modulize your stuff properly has scaled really well to a team of almost 10 developers working on hundreds of files and tens of thousands of lines of code.</p>\n<p>Really, a fairly large code base… stuff just works. You don’t have to worry about mutating, and the state of the DOM just really makes stuff easy. Just conceptually it’s easier just to think about here’s what I have, here’s my data, here’s how it renders, I don’t care about anything else. For most cases that is really simplifying and makes it really fast to do stuff.</p>\n<p><a href="http://ianobermiller.com/blog/2014/09/15/react-and-flux-interview/">Read the full interview…</a></p>\n</blockquote>\n<h2 id="adobes-brackets-project-tree"><a href="#adobes-brackets-project-tree" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Adobe’s Brackets Project Tree</h2>\n<p><a href="http://www.kevindangoor.com/">Kevin Dangoor</a> is converting the project tree of <a href="http://brackets.io/">Adobe’s Bracket text editor</a> to React and Flux. He wrote about his experience <a href="http://www.kevindangoor.com/2014/09/intro-to-the-new-brackets-project-tree/">using Flux</a>.</p>\n<center>\n<a href="http://www.kevindangoor.com/2014/09/intro-to-the-new-brackets-project-tree/">\n  <a class="gatsby-resp-image-link" href="/static/flux-diagram-b4643456a3de61c8352415a6fc171876-a0938.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 49.77293369663942%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/0lEQVQoz3VSzU8TQRzdP8A/wavxYvBk4s14bDzSpCRGmwAx5eTFG+EgidGooSLBIKFRDK2CLdtdFRJYQ8siphXb+rFuu1u3H+viwmJLLfs5s7NO24tGfXmT+c3lvXlvhrD/BwBsCDEdx2FZliRJKkkxDGOaJnQ9ADFdwrIsswvLtjuzYZq6YUPX+CY3pqcaC0/2tf2RUOiCz4c5EAgoqlpYn04vXC3nVwkIodcF7KI3u65rtttaodAUBQOAbCbDdPFma0vXDUXK8/k1bVciymUpvkw/T1BSvVYTd6nIa3J2XfgiA1X5QSdbFKkLpY4eQnjhHacQd6jsSlitfiTiy1T/QNAfCCZXVzaSO1fOXR86OxaPbRpZ9mB48GAw2KCTlueZ2NEwLMvWj1rkrfNzoWMZ+jbxmeNnI/MP5x5zpWJFUKKTL6JhushVdaUux2Lqs6fNUhF0kkAPQQAcXAuXimwvjcn89h+ZXQh6dwMA4NhO74DQzyNdrO+JdfWw1cYCFe17ripqreZvbfdgWoZhYp/3fG105tW1KfodV1nL8GeG7/cFJx69fOshp//mxRMjp+8m7hF/PzDWwXbpnHBpPOofnWcyHJn+cOryRF8wPLmUgtDyjfuPD528sXiH+OcHwcVAHAFBhHAo9FXem0mwD+KbXFn2kMvkNhZT8U8S9wtiXfBWu20/6QAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="flux diagram" title="" src="/static/flux-diagram-b4643456a3de61c8352415a6fc171876-acf85.png" srcset="/static/flux-diagram-b4643456a3de61c8352415a6fc171876-c1418.png 210w,\n/static/flux-diagram-b4643456a3de61c8352415a6fc171876-5d5d8.png 420w,\n/static/flux-diagram-b4643456a3de61c8352415a6fc171876-acf85.png 840w,\n/static/flux-diagram-b4643456a3de61c8352415a6fc171876-de0cd.png 1260w,\n/static/flux-diagram-b4643456a3de61c8352415a6fc171876-bd6c2.png 1680w,\n/static/flux-diagram-b4643456a3de61c8352415a6fc171876-a0938.png 2202w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    </a>\n</center>\n<h2 id="async-requests-with-flux-revisited"><a href="#async-requests-with-flux-revisited" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Async Requests with Flux Revisited</h2>\n<p><a href="http://www.code-experience.com/the-code-experience/">Reto Schläpfer</a> came back to a Flux project he hasn’t worked on for a month and <a href="http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/">saw many ways to improve the way he implemented Flux</a>. He summarized his learnings in a blog post.</p>\n<blockquote>\n<p>The smarter way is to call the Web Api directly from an Action Creator and then make the Api dispatch an event with the request result as a payload. The Store(s) can choose to listen on those request actions and change their state accordingly.</p>\n<p>Before I show some updated code snippets, let me explain why this is superior:</p>\n<ul>\n<li>\n<p>There should be only one channel for all state changes: The Dispatcher. This makes debugging easy because it just requires a single console.log in the dispatcher to observe every single state change trigger.</p>\n</li>\n<li>\n<p>Asynchronously executed callbacks should not leak into Stores. The consequences of it are just too hard to fully foresee. This leads to elusive bugs. Stores should only execute synchronous code. Otherwise they are too hard to understand.</p>\n</li>\n<li>\n<p>Avoiding actions firing other actions makes your app simple. We use the newest Dispatcher implementation from Facebook that does not allow a new dispatch while dispatching. It forces you to do things right.</p>\n</li>\n</ul>\n<p><a href="http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited/">Read the full article…</a></p>\n</blockquote>\n<h2 id="undo-redo-with-immutable-data-structures"><a href="#undo-redo-with-immutable-data-structures" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Undo-Redo with Immutable Data Structures</h2>\n<p><a href="https://github.com/ameyakarve">Ameya Karve</a> explained how to use <a href="https://github.com/swannodette/mori">Mori</a>, a library that provides immutable data structures, in order to <a href="http://ameyakarve.com/jekyll/update/2014/02/06/Undo-React-Flux-Mori.html">implement undo-redo</a>. This usually very challenging feature only takes a few lines of code with Flux!</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">undo<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>redoStates <span class="token operator">=</span> Mori<span class="token punctuation">.</span><span class="token function">conj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>redoStates<span class="token punctuation">,</span> Mori<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>undoStates<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>undoStates <span class="token operator">=</span> Mori<span class="token punctuation">.</span><span class="token function">drop</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>undoStates<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>todosState <span class="token operator">=</span> Mori<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>undoStates<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>canUndo <span class="token operator">=</span> Mori<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>undoStates<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>canRedo <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Mori<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>undoStates<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>todos <span class="token operator">=</span> JSON<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>todosState<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>todos <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre>\n      </div>\n<h2 id="flux-in-practice"><a href="#flux-in-practice" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flux in practice</h2>\n<p><a href="https://twitter.com/garychambers108">Gary Chambers</a> wrote a <a href="https://medium.com/@garychambers108/flux-in-practice-ec08daa9041a">guide to get started with Flux</a>. This is a very practical introduction to Flux.</p>\n<blockquote>\n<p>So, what does it actually mean to write an application in the Flux way? At that moment of inspiration, when faced with an empty text editor, how should you begin? This post follows the process of building a Flux-compliant application from scratch.</p>\n<p><a href="https://medium.com/@garychambers108/flux-in-practice-ec08daa9041a">Read the full guide…</a></p>\n</blockquote>\n<h2 id="components-react-and-flux"><a href="#components-react-and-flux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components, React and Flux</h2>\n<p><a href="https://twitter.com/dan_abramov">Dan Abramov</a> working at Stampsy made a talk about React and Flux. It’s a very good overview of the concepts at play.</p>\n<iframe src="//slides.com/danabramov/components-react-flux-wip/embed"  width="100%" height="315" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<h2 id="react-and-flux"><a href="#react-and-flux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React and Flux</h2>\n<p><a href="https://github.com/christianalfoni">Christian Alfoni</a> wrote an article where <a href="https://christianalfoni.github.io/javascript/2014/08/20/react-js-and-flux.html">he compares Backbone, Angular and Flux</a> on a simple example that’s representative of a real project he worked on.</p>\n<blockquote>\n<p>Wow, that was a bit more code! Well, try to think of it like this. In the above examples, if we were to do any changes to the application we would probably have to move things around. In the FLUX example we have considered that from the start.</p>\n<p>Any changes to the application is adding, not moving things around. If you need a new store, just add it and make components dependant of it. If you need more views, create a component and use it inside any other component without affecting their current “parent controller or models”.</p>\n<p><a href="https://christianalfoni.github.io/javascript/2014/08/20/react-js-and-flux.html">Read the full article…</a></p>\n</blockquote>\n<h2 id="flux-step-by-step-approach"><a href="#flux-step-by-step-approach" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Flux: Step by Step approach</h2>\n<p><a href="https://github.com/durdn">Nicola Paolucci</a> from Atlassian wrote a great guide to help your getting understand <a href="https://blogs.atlassian.com/2014/08/flux-architecture-step-by-step/">Flux step by step</a>.</p>\n<center>\n<a href="https://blogs.atlassian.com/2014/08/flux-architecture-step-by-step/">\n  <a class="gatsby-resp-image-link" href="/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-e1efa.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 840px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 56.227758007117444%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAACZklEQVQoz2NQDW5UDmrUCGsGMhQDG9RDm4Fc1ZAmtZBmleBGpcAGzbAWtVCgbJNKUKN2RCtQVjGgAUgCEYNiQL1qSHNB/9r8vrWRtQtrZmzN6VmT3rmqbMqm1LblxRPX5/euKZywrnzqpqSWZQX964DKMjpXqQQ3yfvXAzU3SPvUgW1rBiKt8DbdqHaNsFYgWyWkWSOsRSmwUSO8FcgAsYMagS5SD2uR8qmV9a1jALrHKrXfLmOibfpEi6Q+paAmOf96leBmIBeI7NInWib3Ac2ySZtgENsFNBcoCGTbZ04yjOtisE7uuf/w0ZlLNy5evf3g0eOI6rlWKf0pzYtOX7h+9vKN81duHT931SlzYnD5HPOknvkbDz558vTo2auPHz9ZtOkwg2FM2+J1O6cv3TRl0YYFa7ZbJHZJ+9a550wEcifMXzd1ycZJCzfoRbYBQ07Cu6awe8mitdt756xZuGZb5YRlDEB/G8Z2AANW1rdWyrtG1q9Owqua37lM2K1CxK0CSAq5lvM7lwM9CVQJUuBbC1QD9KxOZCtIs1Fcp01qv3lSr2PWJM3w1qCy2X1L97TO29E6fweQbJu/o2vRLofMicpBTUDfAj1lnthrENOhF9XOoBBQrx3ZZp7YY5rQZZXSCwzk9jkb79+9denylbPnL167du3ipcu3b91Ib10EjG0zoLL4buO4LsPYTmDgMwA9I+tXL+NbB0ESXrUWCZ2R5VNDSyYDUVjZlNDSyWElU/QiW6V86mRhyoAulw+oB2lWCGhQhCEgFxjtIu7VIh41oh5AshpCAlUrwdQoAOMypEk9shUAMz8Ye47r2rwAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="flux chart" title="" src="/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-acf85.png" srcset="/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-c1418.png 210w,\n/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-5d5d8.png 420w,\n/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-acf85.png 840w,\n/static/flux-chart-2d495afb05a28c237d0dfc5c9133f4be-e1efa.png 843w" sizes="(max-width: 840px) 100vw, 840px">\n    </span>\n  </span>\n  \n  </a>\n    </a>\n</center>\n<h2 id="delorean-back-to-the-future"><a href="#delorean-back-to-the-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>DeLorean: Back to the future!</h2>\n<p><a href="https://github.com/deloreanjs/delorean">DeLorean</a> is a tiny Flux pattern implementation developed by <a href="https://github.com/f">Fatih Kadir Akin</a>.</p>\n<blockquote>\n<ul>\n<li>Unidirectional data flow, it makes your app logic simpler than MVC</li>\n<li>Automatically listens to data changes and keeps your data updated</li>\n<li>Makes data more consistent across your whole application</li>\n<li>It’s framework agnostic, completely. There’s no view framework dependency</li>\n<li>Very small, just 4K gzipped</li>\n<li>Built-in React.js integration, easy to use with Flight.js and Ractive.js and probably all others</li>\n<li>Improve your UI/data consistency using rollbacks</li>\n</ul>\n</blockquote>\n<h2 id="facebooks-ios-infrastructure"><a href="#facebooks-ios-infrastructure" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Facebook’s iOS Infrastructure</h2>\n<p>Last but not least, Flux and React ideas are not limited to JavaScript inside of the browser. The iOS team at Facebook re-implemented Newsfeed using very similar patterns.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/XhXC4SKOGfQ" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2 id="random-tweet"><a href="#random-tweet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Random Tweet</h2>\n<blockquote class="twitter-tweet" lang="en"><p>If you build your app with flux, you can swap out React for a canvas or svg view layer and keep 85% of your code. (or the thing after React)</p>&mdash; Ryan Florence (@ryanflorence) <a href="https://twitter.com/ryanflorence/status/507309645372076034">September 3, 2014</a></blockquote>',excerpt:"This round-up is a special edition on  Flux . If you expect to see diagrams showing arrows that all point in the same direction, you won’t be disappointed! React And Flux at ForwardJS Facebook engineers  Jing Chen  and  Bill Fisher  gave a talk about Flux and React at  ForwardJS , and how using an application architecture with a unidirectional data flow helped solve recurring bugs. Yahoo Yahoo is converting Yahoo Mail to React and Flux and in the process, they open sourced several components…",frontmatter:{title:"Community Round-up #23",next:null,prev:null,author:[{frontmatter:{name:"Lou Husson",url:"https://twitter.com/loukan42"}}]},fields:{date:"October 17, 2014",path:"blog/2014-10-17-community-roundup-23.md",slug:"/blog/2014/10/17/community-roundup-23.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/10/17/community-roundup-23.html"}}}});
//# sourceMappingURL=path---blog-2014-10-17-community-roundup-23-html-098706cecb2e74741576.js.map