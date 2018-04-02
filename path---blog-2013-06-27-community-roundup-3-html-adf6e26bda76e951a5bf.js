webpackJsonp([17898382143142],{680:function(t,e){t.exports={data:{markdownRemark:{html:'<p>The highlight of this week is that an interaction-heavy app has been ported to React. React components are solving issues they had with nested views.</p>\n<h2 id="moving-from-backbone-to-react"><a href="#moving-from-backbone-to-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Moving From Backbone To React</h2>\n<p><a href="https://twitter.com/clayallsopp">Clay Allsopp</a> successfully ported <a href="http://usepropeller.com/blog/posts/from-backbone-to-react/">Propeller</a>, a fairly big, interaction-heavy JavaScript app, to React.</p>\n<blockquote>\n<p><a href="http://usepropeller.com/blog/posts/from-backbone-to-react/">\n  <a class="gatsby-resp-image-link" href="/static/propeller-logo-0dc638d3c8982f1168970d0e17ab2fc7-e80e7.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 100px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACK0lEQVQ4y42Uv2tUQRDH38tdKo0gmloLQfC837/vLMXGWgRTWUWstFMbC4WA/0IsJE1axSpoGyKoIKiVIkKsgiCxSGIuyfMzj++cm5c7k4UvMzs7+92dmd2JohGjVqtF9Xrd9Qn0CbPJnrO5rZmP+40dIZlvHOMXu/+RBmS+oYW+CN6BZTAPLoQ+2Y3hjdJbgbzml0DSarWSRqORot1uJxzyA/vUSNIMWZwJ65mRYd8Eu2Cj2Wza/COY9H2e3wOk0sssnpX+1AiYD9AHIvsFCp5jz/Mw91I8X3MWFvPf6OeRVyxE5JaI36Afk+9pv0S1Wk1Ji8Xiv0riUBJZos3f0U8gXyhvq0YGbqJ/QK4irVCdkDSqVCp5ybsKaRvHbZEuMb+DtBy+BUuWU/mlxWJtrVAoTIs0jsrlshM+UAH+mLMRm+x2u7bpMvpsv99PfA3bnqcC+3XjKJVKufQnKOSGPw30XZM64DPz18gv4DZ4FRbK/Hq93jXlMBdhGL56HG6hr+sWa+iPkMfB106nY7aH9lzAT/nsWHogOjcM2QY3sZD92ZzC6aL+7BR4qWLtKHdnwIwVSocseFGwRWET2Pd30W+APYVnj3qgFNyT/2P058iTB36Mv3K9eu8kn3SjDf2STRHO/effj+w0TvjEQvJCGblCb2t9Uq0tznapcX87BvfBe/ANrLDpavDl9kV2GFnWnh/VBw/theFJ2pAL5nGmaEdurNmWNkQY4rjxF7USESOu3TEeAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="propeller logo" title="" src="/static/propeller-logo-0dc638d3c8982f1168970d0e17ab2fc7-e80e7.png" srcset="/static/propeller-logo-0dc638d3c8982f1168970d0e17ab2fc7-e80e7.png 100w" sizes="(max-width: 100px) 100vw, 100px">\n    </span>\n  </span>\n  \n  </a>\n    </a>Subviews involve a lot of easy-to-forget boilerplate that Backbone (by design) doesn’t automate. Libraries like Backbone.Marionette offer more abstractions to make view nesting easier, but they’re all limited by the fact that Backbone delegates how and went view-document attachment occurs to the application code.</p>\n<p>React, on the other hand, manages the DOM and only exposes real nodes at select points in its API. The “elements” you code in React are actually objects which wrap DOM nodes, not the actual objects which get inserted into the DOM. Internally, React converts those abstractions into actual DOMElements and fills out the document accordingly. […]</p>\n<p>We moved about 20 different Backbone view classes to React over the past few weeks, including the live-preview pane that you see in our little iOS demo. Most importantly, it’s allowed us to put energy into making each component work great on its own, instead of spending extra cycles to ensure they function in unison. For that reason, we think React is a more scalable way to build view-intensive apps than Backbone alone, and it doesn’t require you to drop-everything-and-refactor like a move to Ember or Angular would demand.</p>\n<p><a href="http://usepropeller.com/blog/posts/from-backbone-to-react/">Read the full post…</a></p>\n</blockquote>\n<h2 id="grunt-task-for-jsx"><a href="#grunt-task-for-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Grunt Task for JSX</h2>\n<p><a href="https://ericclemmons.github.io/">Eric Clemmons</a> wrote a task for <a href="http://gruntjs.com/">Grunt</a> that applies the JSX transformation to your JavaScript files. It also works with <a href="http://browserify.org/">Browserify</a> if you want all your files to be concatenated and minified together.</p>\n<blockquote>\n<p>Grunt task for compiling Facebook React’s .jsx templates into .js</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">grunt<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  react<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      options<span class="token punctuation">:</span> <span class="token punctuation">{</span> extension<span class="token punctuation">:</span> <span class="token string">\'js\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      files<span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token string">\'path/to/output/dir\'</span><span class="token punctuation">:</span> <span class="token string">\'path/to/jsx/templates/dir\'</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>It also works great with <code class="gatsby-code-text">grunt-browserify</code>!</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">browserify<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n  options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    transform<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'grunt-react\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>browserify <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  app<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    src<span class="token punctuation">:</span> <span class="token string">\'path/to/source/main.js\'</span><span class="token punctuation">,</span>\n    dest<span class="token punctuation">:</span> <span class="token string">\'path/to/target/output.js\'</span>\n</code></pre>\n      </div>\n<p><a href="https://github.com/ericclemmons/grunt-react">Check out the project …</a></p>\n</blockquote>\n<h2 id="backbonehandlebars-nested-views"><a href="#backbonehandlebars-nested-views" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Backbone/Handlebars Nested Views</h2>\n<p><a href="http://joelburget.com/">Joel Burget</a> wrote a blog post talking about the way we would write React-like components in Backbone and Handlebars.</p>\n<blockquote>\n<p>The problem here is that we’re trying to maniplate a tree, but there’s a textual layer we have to go through. Our views are represented as a tree - the subviews are children of CommentCollectionView - and they end up as part of a tree in the DOM. But there’s a Handlebars layer in the middle (which deals in flat strings), so the hierarchy must be destructed and rebuilt when we render.</p>\n<p>What does it take to render a collection view? In the Backbone/Handlebars view of the world you have to render the template (with stubs), render each subview which replaces a stub, and keep a reference to each subview (or anything within the view that could change in the future).</p>\n<p>So while our view is conceptually hierarchical, due to the fact that it has to go through a flat textual representation, we need to do a lot of extra work to reassemble that structure after rendering.</p>\n<p><a href="http://joelburget.com/react/">Read the full post…</a></p>\n</blockquote>\n<h2 id="jsromandie-meetup"><a href="#jsromandie-meetup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSRomandie Meetup</h2>\n<p><a href="https://twitter.com/renajohn/">Renault John Lecoultre</a> from <a href="http://www.bugbuster.com">BugBuster</a> did a React introduction talk at a JS meetup called <a href="https://twitter.com/jsromandie">JS Romandie</a> last week.</p>\n<script async class="speakerdeck-embed" data-id="888a9d50c01b01300df36658d0894ac1" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>\n<h2 id="coffeescript-integration"><a href="#coffeescript-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>CoffeeScript integration</h2>\n<p><a href="http://blog.vjeux.com/">Vjeux</a> used the fact that JSX is just a syntactic sugar on-top of regular JS to rewrite the React front-page examples in CoffeeScript.</p>\n<blockquote>\n<p>Multiple people asked what’s the story about JSX and CoffeeScript. There is no JSX pre-processor for CoffeeScript and I’m not aware of anyone working on it. Fortunately, CoffeeScript is pretty expressive and we can play around the syntax to come up with something that is usable.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>div<span class="token punctuation">,</span> h3<span class="token punctuation">,</span> textarea<span class="token punctuation">}</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">DOM</span>\n<span class="token punctuation">(</span>div <span class="token punctuation">{</span>className<span class="token punctuation">:</span> <span class="token string">\'MarkdownEditor\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">(</span>h3 <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">\'Input\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">(</span>textarea <span class="token punctuation">{</span>onKeyUp<span class="token punctuation">:</span> @handleKeyUp<span class="token punctuation">,</span> ref<span class="token punctuation">:</span> <span class="token string">\'textarea\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    @state<span class="token punctuation">.</span>value\n  <span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><a href="http://blog.vjeux.com/2013/javascript/react-coffeescript.html">Read the full post…</a></p>\n</blockquote>\n<h2 id="tutorial-in-plain-javascript"><a href="#tutorial-in-plain-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tutorial in Plain JavaScript</h2>\n<p>We’ve seen a lot of people comparing React with various frameworks. <a href="http://ricardo.cc/">Ricardo Tomasi</a> decided to re-implement the tutorial without any framework, just plain JavaScript.</p>\n<blockquote>\n<p>Facebook &#x26; Instagram launched the React framework and an accompanying tutorial. Developer Vlad Yazhbin decided to rewrite that using AngularJS. The end result is pretty neat, but if you’re like me you will not actually appreciate the HTML speaking for itself and doing all the hard work. So let’s see what that looks like in plain javascript.</p>\n<p><a href="http://ricardo.cc/2013/06/07/react-tutorial-rewritten-in-plain-javascript.html">Read the full post…</a></p>\n</blockquote>',excerpt:"The highlight of this week is that an interaction-heavy app has been ported to React. React components are solving issues they had with nested views. Moving From Backbone To React Clay Allsopp  successfully ported  Propeller , a fairly big, interaction-heavy JavaScript app, to React. Subviews involve a lot of easy-to-forget boilerplate that Backbone (by design) doesn’t automate. Libraries like Backbone.Marionette offer more abstractions to make view nesting easier, but they’re all limited by the…",frontmatter:{title:"Community Round-up #3",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"June 27, 2013",path:"blog/2013-06-27-community-roundup-3.md",slug:"/blog/2013/06/27/community-roundup-3.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/06/27/community-roundup-3.html"}}}});
//# sourceMappingURL=path---blog-2013-06-27-community-roundup-3-html-adf6e26bda76e951a5bf.js.map