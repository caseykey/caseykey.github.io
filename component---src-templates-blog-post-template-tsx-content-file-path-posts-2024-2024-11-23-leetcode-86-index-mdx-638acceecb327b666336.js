"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[5184],{1913:function(e,t,n){n.r(t),n.d(t,{BlogPost:function(){return h},default:function(){return f}});var r=n(8453),l=n(6540);function a(e){const t=Object.assign({p:"p",h1:"h1",pre:"pre",code:"code"},(0,r.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"I had to read the comments to understand this problem. I didn't understand how they wanted the ordering until I read a few examples."),"\n",l.createElement(t.h1,null,"Solution"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-python"},"# Definition for singly-linked list.\r\n# class ListNode:\r\n#     def __init__(self, val=0, next=None):\r\n#         self.val = val\r\n#         self.next = next\r\nclass Solution:\r\n    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:\r\n        start = head\r\n        left, right = None, None\r\n\r\n        while head and not right:\r\n            if head.val < x:\r\n                left = head\r\n            else:\r\n                right = head\r\n            head = head.next\r\n        \r\n        prev = None\r\n        \r\n        while head:\r\n            if head.val < x:\r\n                if prev:\r\n                    prev.next = head.next\r\n                if left:\r\n                    left.next = head\r\n                    left = left.next\r\n                else:\r\n                    left = head\r\n                    start = left\r\n                if right.next == head:\r\n                    right.next = head.next\r\n                head.next = right\r\n\r\n            prev = head\r\n            head = head.next\r\n        \r\n        return start\n")),"\n",l.createElement(t.p,null,"Time complexity is O(n) = n and space complexity is O(1)."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.R)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},i=n(4810),c=n(4399),d=n(3614),s=n(1510),m=n(6409),p=n(572);const h=s.default.div.withConfig({displayName:"blogPostTemplate__BlogPost",componentId:"sc-6bdelx-0"})(["margin:0 auto;margin-top:6em;max-width:800px;padding:20px;"]);function u(e){let{data:t,pageContext:n,children:r}=e;const{frontmatter:a}=t.mdx,{previous:o,next:u,post:f}=n;return l.createElement(c.A,null,l.createElement(s.ThemeProvider,{theme:d.w4},l.createElement(d.nB,null,l.createElement(m.A,null),l.createElement(h,null,l.createElement(d.DZ,{className:"text-center"},a.title),l.createElement("p",{className:"text-center"},f.frontmatter.date),r,o&&l.createElement(l.Fragment,null,o&&l.createElement(i.N_,{to:o.fields.slug},l.createElement("p",null,o.frontmatter.title))),u&&l.createElement(l.Fragment,null,u&&l.createElement(i.N_,{to:u.fields.slug},l.createElement("p",null,u.frontmatter.title)))),l.createElement(p.A,null))))}function f(e){return l.createElement(u,e,l.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-tsx-content-file-path-posts-2024-2024-11-23-leetcode-86-index-mdx-638acceecb327b666336.js.map