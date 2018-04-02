webpackJsonp([0xb021c9259123],{718:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing React v0.11.1 to address a few small issues. Thanks to everybody who has reported them as they’ve begun upgrading.</p>\n<p>The first of these is the most major and resulted in a regression with the use of <code class="gatsby-code-text">setState</code> inside <code class="gatsby-code-text">componentWillMount</code> when using React on the server. These <code class="gatsby-code-text">setState</code> calls are batched into the initial render. A change we made to our batching code resulted in this path hitting DOM specific code when run server-side, in turn throwing an error as <code class="gatsby-code-text">document</code> is not defined.</p>\n<p>There are several fixes we’re including in v0.11.1 that are focused around the newly supported <code class="gatsby-code-text">event.getModifierState()</code> function. We made some adjustments to improve this cross-browser standardization.</p>\n<p>The final fix we’re including is to better support a workaround for some IE8 behavior. The edge-case bug we’re fixing was also present in v0.9 and v0.10, so while it wasn’t a short-term regression, we wanted to make sure we support IE8 to the best of our abilities.</p>\n<p>We’d also like to call out a couple additional breaking changes that we failed to originally mention in the release notes for v0.11. We updated that blog post and the changelog, so we encourage you to go read about the changes around <a href="/blog/2014/07/17/react-v0.11.html#descriptors">Descriptors</a> and <a href="/blog/2014/07/17/react-v0.11.html#prop-type-validation">Prop Type Validation</a>.</p>\n<p>The release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.11.1.js">https://fb.me/react-0.11.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.11.1.min.js">https://fb.me/react-0.11.1.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.11.1.js">https://fb.me/react-with-addons-0.11.1.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.11.1.min.js">https://fb.me/react-with-addons-0.11.1.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.11.1.js">https://fb.me/JSXTransformer-0.11.1.js</a></li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.11.1</code> of the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-tools</code> packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<p>Please try these builds out and <a href="https://github.com/facebook/react/issues/new">file an issue on GitHub</a> if you see anything awry.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li><code class="gatsby-code-text">setState</code> can be called inside <code class="gatsby-code-text">componentWillMount</code> in non-DOM environments</li>\n<li><code class="gatsby-code-text">SyntheticMouseEvent.getEventModifierState</code> correctly renamed to <code class="gatsby-code-text">getModifierState</code></li>\n<li><code class="gatsby-code-text">getModifierState</code> correctly returns a <code class="gatsby-code-text">boolean</code></li>\n<li><code class="gatsby-code-text">getModifierState</code> is now correctly case sensitive</li>\n<li>Empty Text node used in IE8 <code class="gatsby-code-text">innerHTML</code> workaround is now removed, fixing rerendering in certain cases</li>\n</ul>\n<h3 id="jsxtransformer"><a href="#jsxtransformer" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSXTransformer</h3>\n<ul>\n<li>Fix duplicate variable declaration (caused issues in some browsers)</li>\n</ul>',excerpt:"Today we’re releasing React v0.11.1 to address a few small issues. Thanks to everybody who has reported them as they’ve begun upgrading. The first of these is the most major and resulted in a regression with the use of   inside   when using React on the server. These   calls are batched into the initial render. A change we made to our batching code resulted in this path hitting DOM specific code when run server-side, in turn throwing an error as   is not defined. There are several fixes we’re…",frontmatter:{title:"React v0.11.1",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 25, 2014",path:"blog/2014-07-25-react-v0.11.1.md",slug:"/blog/2014/07/25/react-v0.11.1.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/07/25/react-v0.11.1.html"}}}});
//# sourceMappingURL=path---blog-2014-07-25-react-v-0-11-1-html-621782831e72d13a009d.js.map