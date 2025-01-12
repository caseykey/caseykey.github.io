"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[6024],{6229:function(e,n,t){t.r(n),t.d(n,{BlogPost:function(){return u},default:function(){return E}});var r=t(8453),l=t(6540);function a(e){const n=Object.assign({p:"p",h1:"h1",pre:"pre",code:"code"},(0,r.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"Today I chose an easy problem since I had a late day at work and gym afterwards."),"\n",l.createElement(n.h1,null,"Solution"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"from collections import deque\r\n\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\r\n        pQ = deque([p])\r\n        qQ = deque([q])\r\n\r\n        while pQ and qQ:\r\n            nodeP = pQ.popleft()\r\n            nodeQ = qQ.popleft()\r\n            if nodeP and nodeQ and nodeP.val != nodeQ.val:\r\n                return False\r\n            elif (nodeP is None) != (nodeQ is None):\r\n                return False\r\n\r\n            if nodeP:\r\n                pQ.append(nodeP.left)\r\n                pQ.append(nodeP.right)\r\n            if nodeQ:\r\n                qQ.append(nodeQ.left)\r\n                qQ.append(nodeQ.right)\r\n\r\n        if not pQ and not qQ:\r\n            return True\r\n        \r\n        return False\n")),"\n",l.createElement(n.p,null,"Time complexity is O(n) = n and space complexity is O(n)."))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.R)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},c=t(4810),i=t(4399),p=t(3614),d=t(1510),s=t(6409),m=t(572);const u=d.default.div.withConfig({displayName:"blogPostTemplate__BlogPost",componentId:"sc-6bdelx-0"})(["margin:0 auto;margin-top:6em;max-width:800px;padding:20px;"]);function f(e){let{data:n,pageContext:t,children:r}=e;const{frontmatter:a}=n.mdx,{previous:o,next:f,post:E}=t;return l.createElement(i.A,null,l.createElement(d.ThemeProvider,{theme:p.w4},l.createElement(p.nB,null,l.createElement(s.A,null),l.createElement(u,null,l.createElement(p.DZ,{className:"text-center"},a.title),l.createElement("p",{className:"text-center"},E.frontmatter.date),r,o&&l.createElement(l.Fragment,null,o&&l.createElement(c.N_,{to:o.fields.slug},l.createElement("p",null,o.frontmatter.title))),f&&l.createElement(l.Fragment,null,f&&l.createElement(c.N_,{to:f.fields.slug},l.createElement("p",null,f.frontmatter.title)))),l.createElement(m.A,null))))}function E(e){return l.createElement(f,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-tsx-content-file-path-posts-2024-2024-11-20-leetcode-100-index-mdx-1fd76cd9a4062c5dd555.js.map