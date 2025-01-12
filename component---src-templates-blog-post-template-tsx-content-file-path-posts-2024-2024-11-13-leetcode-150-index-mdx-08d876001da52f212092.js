"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[1961],{1379:function(e,t,n){n.r(t),n.d(t,{BlogPost:function(){return f},default:function(){return d}});var r=n(8453),l=n(6540);function a(e){const t=Object.assign({p:"p",h1:"h1",pre:"pre",code:"code"},(0,r.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"Now I'm on to stacks. I had to rethink my strategy of going from right to left, to left to right. I was overcomplicating it."),"\n",l.createElement(t.h1,null,"Solution"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-python"},"class Solution:\r\n    def evalRPN(self, tokens: List[str]) -> int:\r\n        stack = []\r\n        for token in tokens:\r\n            if token in ['+', '/', '+', '-', '*']:\r\n                right = int(stack.pop())\r\n                left = int(stack.pop())\r\n                match token:\r\n                    case '+':\r\n                        res = left + right\r\n                    case '/':\r\n                        res = left / right\r\n                    case '+':\r\n                        res = left + right\r\n                    case '-':\r\n                        res = left - right\r\n                    case '*':\r\n                        res = left * right\r\n                stack.append(res)\r\n            else:\r\n                stack.append(token)\r\n        return int(stack[-1])\r\n\r\n            \n")),"\n",l.createElement(t.p,null,"O(n) = n since we iterate over all elements once. Space complexity also O(n) = n for the stack."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.R)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},c=n(4810),s=n(4399),i=n(3614),m=n(1510),p=n(6409),u=n(572);const f=m.default.div.withConfig({displayName:"blogPostTemplate__BlogPost",componentId:"sc-6bdelx-0"})(["margin:0 auto;margin-top:6em;max-width:800px;padding:20px;"]);function g(e){let{data:t,pageContext:n,children:r}=e;const{frontmatter:a}=t.mdx,{previous:o,next:g,post:d}=n;return l.createElement(s.A,null,l.createElement(m.ThemeProvider,{theme:i.w4},l.createElement(i.nB,null,l.createElement(p.A,null),l.createElement(f,null,l.createElement(i.DZ,{className:"text-center"},a.title),l.createElement("p",{className:"text-center"},d.frontmatter.date),r,o&&l.createElement(l.Fragment,null,o&&l.createElement(c.N_,{to:o.fields.slug},l.createElement("p",null,o.frontmatter.title))),g&&l.createElement(l.Fragment,null,g&&l.createElement(c.N_,{to:g.fields.slug},l.createElement("p",null,g.frontmatter.title)))),l.createElement(u.A,null))))}function d(e){return l.createElement(g,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-tsx-content-file-path-posts-2024-2024-11-13-leetcode-150-index-mdx-08d876001da52f212092.js.map