webpackJsonp([0xfc9fd7f0ef81],{735:function(n,s){n.exports={data:{markdownRemark:{html:'<p>React 0.13 has a lot of nice features but there is one particular feature that I’m really excited about. I couldn’t wait for React.js Conf to start tomorrow morning.</p>\n<p>Maybe you’re like me and staying up late excited about the conference, or maybe you weren’t one of the lucky ones to get a ticket. Either way I figured I’d give you all something to play with until then.</p>\n<p>We just published a beta version of React v0.13.0 to <a href="https://www.npmjs.com/package/react">npm</a>! You can install it with <code class="gatsby-code-text">npm install react@0.13.0-beta.1</code>. Since this is a pre-release, we don’t have proper release notes ready.</p>\n<p>So what is that one feature I’m so excited about that I just couldn’t wait to share?</p>\n<h2 id="plain-javascript-classes"><a href="#plain-javascript-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Plain JavaScript Classes!!</h2>\n<p>JavaScript originally didn’t have a built-in class system. Every popular framework built their own, and so did we. This means that you have a learn slightly different semantics for each framework.</p>\n<p>We figured that we’re not in the business of designing a class system. We just want to use whatever is the idiomatic JavaScript way of creating classes.</p>\n<p>In React 0.13.0 you no longer need to use <code class="gatsby-code-text">React.createClass</code> to create React components. If you have a transpiler you can use ES6 classes today. You can use the transpiler we ship with <code class="gatsby-code-text">react-tools</code> by making use of the harmony option: <code class="gatsby-code-text">jsx --harmony</code>.</p>\n<h3 id="es6-classes"><a href="#es6-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES6 Classes</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">HelloMessage</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReact<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloMessage</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Sebastian<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The API is mostly what you would expect, with the exception of <code class="gatsby-code-text">getInitialState</code>. We figured that the idiomatic way to specify class state is to just use a simple instance property. Likewise <code class="gatsby-code-text">getDefaultProps</code> and <code class="gatsby-code-text">propTypes</code> are really just properties on the constructor.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>count<span class="token punctuation">:</span> props<span class="token punctuation">.</span>initialCount<span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>tick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Clicks<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nCounter<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span> initialCount<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number <span class="token punctuation">}</span><span class="token punctuation">;</span>\nCounter<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span> initialCount<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="es7-property-initializers"><a href="#es7-property-initializers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ES7+ Property Initializers</h3>\n<p>Wait, assigning to properties seems like a very imperative way of defining classes! You’re right, however, we designed it this way because it’s idiomatic. We fully expect a more declarative syntax for property initialization to arrive in future version of JavaScript. It might look something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Future Version</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> <span class="token punctuation">{</span> initialCount<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span> initialCount<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>initialCount <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> count<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>tick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Clicks<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This was inspired by TypeScript’s property initializers.</p>\n<h3 id="autobinding"><a href="#autobinding" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Autobinding</h3>\n<p><code class="gatsby-code-text">React.createClass</code> has a built-in magic feature that bound all methods to <code class="gatsby-code-text">this</code> automatically for you. This can be a little confusing for JavaScript developers that are not used to this feature in other classes, or it can be confusing when they move from React to other classes.</p>\n<p>Therefore we decided not to have this built-in into React’s class model. You can still explicitly prebind methods in your constructor if you want.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>tick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>However, when we have the future property initializers, there is a neat trick that you can use to accomplish this syntactically:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">tick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="mixins"><a href="#mixins" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mixins</h3>\n<p>Unfortunately, we will not launch any mixin support for ES6 classes in React. That would defeat the purpose of only using idiomatic JavaScript concepts.</p>\n<p>There is no standard and universal way to define mixins in JavaScript. In fact, several features to support mixins were dropped from ES6 today. There are a lot of libraries with different semantics. We think that there should be one way of defining mixins that you can use for any JavaScript class. React just making another doesn’t help that effort.</p>\n<p>Therefore, we will keep working with the larger JS community to create a standard for mixins. We will also start designing a new compositional API that will help make common tasks easier to do without mixins. E.g. first-class subscriptions to any kind of Flux store.</p>\n<p>Luckily, if you want to keep using mixins, you can just keep using <code class="gatsby-code-text">React.createClass</code>.</p>\n<blockquote>\n<p><strong>Note:</strong></p>\n<p>The classic <code class="gatsby-code-text">React.createClass</code> style of creating classes will continue to work just fine.</p>\n</blockquote>\n<h2 id="other-languages"><a href="#other-languages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Other Languages!</h2>\n<p>Since these classes are just plain old JavaScript classes, you can use other languages that compile to JavaScript classes, such as TypeScript.</p>\n<p>You can also use CoffeeScript classes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-coffeescript"><code class="gatsby-code-coffeescript">div <span class="token operator">=</span> React<span class="token punctuation">.</span>createFactory <span class="token string">\'div\'</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Counter</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span>\n  <span class="token class-member variable">@propTypes</span> <span class="token operator">=</span> <span class="token property">initialCount</span><span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>number\n  <span class="token class-member variable">@defaultProps</span> <span class="token operator">=</span> <span class="token property">initialCount</span><span class="token punctuation">:</span> <span class="token number">0</span>\n\n  <span class="token property">constructor</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">></span>\n    <span class="token keyword">super</span> props\n    <span class="token class-member variable">@state</span> <span class="token operator">=</span> <span class="token property">count</span><span class="token punctuation">:</span> props<span class="token punctuation">.</span>initialCount\n\n  <span class="token property">tick</span><span class="token punctuation">:</span> <span class="token operator">=></span>\n    <span class="token class-member variable">@setState</span> <span class="token property">count</span><span class="token punctuation">:</span> <span class="token class-member variable">@state</span><span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token number">1</span>\n\n  <span class="token property">render</span><span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">></span>\n    div <span class="token property">onClick</span><span class="token punctuation">:</span> <span class="token class-member variable">@tick</span><span class="token punctuation">,</span>\n      <span class="token string">\'Clicks: \'</span>\n      <span class="token class-member variable">@state</span><span class="token punctuation">.</span>count\n</code></pre>\n      </div>\n<p>You can even use the old ES3 module pattern if you want:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span>initialProps<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">:</span> <span class="token punctuation">{</span> value<span class="token punctuation">:</span> initialProps<span class="token punctuation">.</span>initialValue <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',excerpt:"React 0.13 has a lot of nice features but there is one particular feature that I’m really excited about. I couldn’t wait for React.js Conf to start tomorrow morning. Maybe you’re like me and staying up late excited about the conference, or maybe you weren’t one of the lucky ones to get a ticket. Either way I figured I’d give you all something to play with until then. We just published a beta version of React v0.13.0 to  npm ! You can install it with  . Since this is a pre-release, we don’t have…",frontmatter:{title:"React v0.13.0 Beta 1",next:null,prev:null,author:[{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"January 27, 2015",path:"blog/2015-01-27-react-v0.13.0-beta-1.md",slug:"/blog/2015/01/27/react-v0.13.0-beta-1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2015/01/27/react-v0.13.0-beta-1.html"}}}});
//# sourceMappingURL=path---blog-2015-01-27-react-v-0-13-0-beta-1-html-2562824105ec0ac50546.js.map