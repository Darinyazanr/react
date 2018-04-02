webpackJsonp([0xb8f1009143fc],{726:function(n,s){n.exports={data:{markdownRemark:{html:'<p>The upcoming React 0.12 tweaks some APIs to get us close to the final 1.0 API. This release is all about setting us up for making the <code class="gatsby-code-text">ReactElement</code> type really FAST, <a href="https://facebook.github.io/jest/">jest unit testing</a> easier, making classes simpler (in preparation for ES6 classes) and better integration with third-party languages!</p>\n<p>If you currently use JSX everywhere, you don’t really have to do anything to get these benefits! The updated transformer will do it for you.</p>\n<p>If you can’t or don’t want to use JSX, then please insert some hints for us. Add a <code class="gatsby-code-text">React.createFactory</code> call around your imported class when you require it:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'MyComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Everything is backwards compatible for now, and as always React will provide you with descriptive console messaging to help you upgrade.</p>\n<p><code class="gatsby-code-text">ReactElement</code> is the primary API of React. Making it faster has shown to give us several times faster renders on common benchmarks. The API tweaks in this release helps us get there.</p>\n<p>Continue reading if you want all the nitty gritty details…</p>\n<h2 id="new-terminology"><a href="#new-terminology" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Terminology</h2>\n<p>We wanted to make it easier for new users to see the parallel with the DOM (and why React is different). To align our terminology we now use the term <code class="gatsby-code-text">ReactElement</code> instead of <em>descriptor</em>. Likewise, we use the term <code class="gatsby-code-text">ReactNode</code> instead of <em>renderable</em>.</p>\n<p><a href="https://gist.github.com/sebmarkbage/fcb1b6ab493b0c77d589">See the full React terminology guide.</a></p>\n<h2 id="creating-a-reactelement"><a href="#creating-a-reactelement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Creating a ReactElement</h2>\n<p>We now expose an external API for programmatically creating a <code class="gatsby-code-text">ReactElement</code> object.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> reactElement <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The <code class="gatsby-code-text">type</code> argument is either a string (HTML tag) or a class. It’s a description of what tag/class is going to be rendered and what props it will contain. You can also create factory functions for specific types. This basically just provides the type argument for you:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> div <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> reactDivElement <span class="token operator">=</span> <span class="token function">div</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> children<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="deprecated-auto-generated-factories"><a href="#deprecated-auto-generated-factories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deprecated: Auto-generated Factories</h2>\n<p>Imagine if <code class="gatsby-code-text">React.createClass</code> was just a plain JavaScript class. If you call a class as a plain function you would call the component’s constructor to create a Component instance, not a <code class="gatsby-code-text">ReactElement</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">new</span> <span class="token class-name">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Component, not ReactElement</span>\n</code></pre>\n      </div>\n<p>React 0.11 gave you a factory function for free when you called <code class="gatsby-code-text">React.createClass</code>. This wrapped your internal class and then returned a <code class="gatsby-code-text">ReactElement</code> factory function for you.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span>\n  <span class="token keyword">class</span> <span class="token punctuation">{</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In future versions of React, we want to be able to support pure classes without any special React dependencies. To prepare for that we’re <a href="https://gist.github.com/sebmarkbage/d7bce729f38730399d28">deprecating the auto-generated factory</a>.</p>\n<p>This is the biggest change to 0.12. Don’t worry though. This functionality continues to work the same for this release, it just warns you if you’re using a deprecated API. That way you can upgrade piece-by-piece instead of everything at once.</p>\n<h2 id="upgrading-to-012"><a href="#upgrading-to-012" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Upgrading to 0.12</h2>\n<h3 id="react-with-jsx"><a href="#react-with-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React With JSX</h3>\n<p>If you use the React specific <a href="https://facebook.github.io/jsx/">JSX</a> transform, the upgrade path is simple. Just make sure you have React in scope.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// If you use node/browserify modules make sure</span>\n<span class="token comment">// that you require React into scope.</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>React’s JSX will create the <code class="gatsby-code-text">ReactElement</code> for you. You can continue to use JSX with regular classes:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyOtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>value<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><em>NOTE: React’s JSX will not call arbitrary functions in future releases. This restriction is introduced so that it’s easier to reason about the output of JSX by both the reader of your code and optimizing compilers. The JSX syntax is not tied to React. Just the transpiler. You can still use <a href="https://facebook.github.io/jsx/">the JSX spec</a> with a different transpiler for custom purposes.</em></p>\n<h3 id="react-without-jsx"><a href="#react-without-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Without JSX</h3>\n<p>If you don’t use JSX and just call components as functions, you will need to explicitly create a factory before calling it:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyComponentClass <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span>MyComponentClass<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// New step</span>\n\n<span class="token keyword">var</span> MyOtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prop<span class="token punctuation">:</span> <span class="token string">\'value\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>If you’re using a module system, the recommended solution is to export the class and create the factory on the requiring side.</p>\n<p>Your class creation is done just like before:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// MyComponent.js</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyComponent<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The other side uses <code class="gatsby-code-text">React.createFactory</code> after <code class="gatsby-code-text">require</code>ing the component class:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// MyOtherComponent.js</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// All you have to do to upgrade is wrap your requires like this:</span>\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'MyComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyOtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> prop<span class="token punctuation">:</span> <span class="token string">\'value\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyOtherComponent<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You ONLY have to do this for custom classes. React still has built-in factories for common HTML elements.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyDOMComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> React<span class="token punctuation">.</span>DOM<span class="token punctuation">.</span><span class="token function">div</span><span class="token punctuation">(</span><span class="token punctuation">{</span> className<span class="token punctuation">:</span> <span class="token string">\'foo\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// still ok</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>We realize that this is noisy. At least it’s on the top of the file (out of sight, out of mind). This a tradeoff we had to make to get <a href="https://gist.github.com/sebmarkbage/d7bce729f38730399d28">the other benefits</a> that this model unlocks.</p>\n<h3 id="anti-pattern-exporting-factories"><a href="#anti-pattern-exporting-factories" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Anti-Pattern: Exporting Factories</h3>\n<p>If you have an isolated project that only you use, then you could create a helper that creates both the class and the factory at once:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// Anti-pattern - Please, don\'t use</span>\n<span class="token keyword">function</span> <span class="token function">createClass</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createFactory</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span>spec<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This makes your components incompatible with jest testing, consumers using JSX, third-party languages that implement their own optimized <code class="gatsby-code-text">ReactElement</code> creation, etc.</p>\n<p>It also encourages you to put more logic into these helper functions. Something that another language, a compiler or a reader of your code couldn’t reason about.</p>\n<p>To fit into the React ecosystem we recommend that you always export pure classes from your shared modules and let the consumer decide the best strategy for generating <code class="gatsby-code-text">ReactElement</code>s.</p>\n<h2 id="third-party-languages"><a href="#third-party-languages" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Third-party Languages</h2>\n<p>The signature of a <code class="gatsby-code-text">ReactElement</code> is something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n  type <span class="token punctuation">:</span> string <span class="token operator">|</span> <span class="token keyword">class</span><span class="token punctuation">,</span>\n  props <span class="token punctuation">:</span> <span class="token punctuation">{</span> children<span class="token punctuation">,</span> className<span class="token punctuation">,</span> etc<span class="token punctuation">.</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  key <span class="token punctuation">:</span> string <span class="token operator">|</span> boolean <span class="token operator">|</span> number <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  ref <span class="token punctuation">:</span> string <span class="token operator">|</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Languages with static typing that don’t need validation (e.g. <a href="https://github.com/swannodette/om">Om in ClojureScript</a>), and production level compilers will be able to generate these objects inline instead of going through the validation step. This optimization will allow significant performance improvements in React.</p>\n<h2 id="your-thoughts-and-ideas"><a href="#your-thoughts-and-ideas" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Your Thoughts and Ideas</h2>\n<p>We’d love to hear your feedback on this API and your preferred style. A plausible alternative could be to directly inline objects instead of creating factory functions:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// MyOtherComponent.js</span>\n<span class="token keyword">var</span> React <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'react\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> MyComponent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'MyComponent\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> MyOtherComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> type<span class="token punctuation">:</span> MyComponent<span class="token punctuation">,</span> props<span class="token punctuation">:</span> <span class="token punctuation">{</span> prop<span class="token punctuation">:</span> <span class="token string">\'value\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyOtherComponent<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This moves the noise down into the render method though. It also doesn’t provide a hook for dynamic validation/type checking so you’ll need some other way to verify that it’s safe.</p>\n<p><em>NOTE: This won’t work in this version of React because it’s conflicting with other legacy APIs that we’re deprecating. (We temporarily add a <code class="gatsby-code-text">element._isReactElement = true</code> marker on the object.)</em></p>\n<h2 id="the-next-step-es6-classes"><a href="#the-next-step-es6-classes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The Next Step: ES6 Classes</h2>\n<p>After 0.12 we’ll begin work on moving to ES6 classes. We will still support <code class="gatsby-code-text">React.createClass</code> as a backwards compatible API. If you use an ES6 transpiler you will be able to declare your components like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This upcoming release is a stepping stone to make it as easy as this. Thanks for your support.</p>',excerpt:"The upcoming React 0.12 tweaks some APIs to get us close to the final 1.0 API. This release is all about setting us up for making the   type really FAST,  jest unit testing  easier, making classes simpler (in preparation for ES6 classes) and better integration with third-party languages! If you currently use JSX everywhere, you don’t really have to do anything to get these benefits! The updated transformer will do it for you. If you can’t or don’t want to use JSX, then please insert some hints…",frontmatter:{title:"Introducing React Elements",next:null,prev:null,author:[{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"October 14, 2014",path:"blog/2014-10-14-introducing-react-elements.md",slug:"/blog/2014/10/14/introducing-react-elements.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/10/14/introducing-react-elements.html"}}}});
//# sourceMappingURL=path---blog-2014-10-14-introducing-react-elements-html-4ced75b08f5f052724f5.js.map