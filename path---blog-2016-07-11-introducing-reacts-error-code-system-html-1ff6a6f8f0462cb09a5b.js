webpackJsonp([49116090766744],{778:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire.</p>\n<p>Prior to this release, we stripped out error messages at build-time and this is why you might have seen this message in production:</p>\n<blockquote>\n<p>Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.</p>\n</blockquote>\n<p>In order to make debugging in production easier, we’re introducing an Error Code System in <a href="https://github.com/facebook/react/releases/tag/v15.2.0">15.2.0</a>. We developed a <a href="https://github.com/facebook/react/blob/master/scripts/error-codes/gulp-extract-errors.js">gulp script</a> that collects all of our <code class="gatsby-code-text">invariant</code> error messages and folds them to a <a href="https://github.com/facebook/react/blob/master/scripts/error-codes/codes.json">JSON file</a>, and at build-time Babel uses the JSON to <a href="https://github.com/facebook/react/blob/master/scripts/error-codes/replace-invariant-error-codes.js">rewrite</a> our <code class="gatsby-code-text">invariant</code> calls in production to reference the corresponding error IDs. Now when things go wrong in production, the error that React throws will contain a URL with an error ID and relevant information. The URL will point you to a page in our documentation where the original error message gets reassembled.</p>\n<p>While we hope you don’t see errors often, you can see how it works <a href="/docs/error-decoder.html?invariant=109&#x26;args%5B%5D=Foo">here</a>. This is what the same error from above will look like:</p>\n<blockquote>\n<p>Minified React error #109; visit <a href="https://reactjs.org/docs/error-decoder.html?invariant=109&#x26;args%5B%5D=Foo">https://reactjs.org/docs/error-decoder.html?invariant=109&#x26;args[]=Foo</a> for the full message or use the non-minified dev environment for full errors and additional helpful warnings.</p>\n</blockquote>\n<p>We do this so that the developer experience is as good as possible, while also keeping the production bundle size as small as possible. This feature shouldn’t require any changes on your side — use the <code class="gatsby-code-text">min.js</code> files in production or bundle your application code with <code class="gatsby-code-text">process.env.NODE_ENV === &#39;production&#39;</code> and you should be good to go!</p>',excerpt:"Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire. Prior to this release, we stripped out error messages at…",frontmatter:{title:"Introducing React's Error Code System",next:null,prev:null,author:[{frontmatter:{name:"Keyan Zhang",url:"https://twitter.com/keyanzhang"}}]},fields:{date:"July 11, 2016",path:"blog/2016-07-11-introducing-reacts-error-code-system.md",slug:"/blog/2016/07/11/introducing-reacts-error-code-system.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2016/07/11/introducing-reacts-error-code-system.html"}}}});
//# sourceMappingURL=path---blog-2016-07-11-introducing-reacts-error-code-system-html-1ff6a6f8f0462cb09a5b.js.map