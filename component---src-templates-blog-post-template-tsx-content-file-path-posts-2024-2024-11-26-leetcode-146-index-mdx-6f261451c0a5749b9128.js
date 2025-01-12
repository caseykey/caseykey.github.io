"use strict";(self.webpackChunkportfolio_app=self.webpackChunkportfolio_app||[]).push([[3464],{8400:function(e,n,t){t.r(n),t.d(n,{BlogPost:function(){return m},default:function(){return v}});var r=t(8453),l=t(6540);function a(e){const n=Object.assign({p:"p",h1:"h1",pre:"pre",code:"code"},(0,r.R)(),e.components);return l.createElement(l.Fragment,null,l.createElement(n.p,null,"This took me a few days although it's only a medium! It is important to remember Python is pass-by-reference.\r\nI spent a lot of time debugging because I didn't mirror changes between previous and next nodes when moving a node between them.\r\nI was able to debug by creating a list of key-value pairs then printing the list after each operation."),"\n",l.createElement(n.h1,null,"Solution"),"\n",l.createElement(n.pre,null,l.createElement(n.code,{className:"language-python"},"class Node:\r\n    def __init__(self, key=0, val=0, prev=None, next=None):\r\n        self.key = key\r\n        self.val = val\r\n        self.prev = prev\r\n        self.next = next\r\n\r\nclass LRUCache:\r\n    def __init__(self, capacity: int):\r\n        self.capacity = capacity\r\n        self.size = 0\r\n        self.d = {}\r\n        self.l = None\r\n        self.start = None\r\n\r\n    def get(self, key: int) -> int:\r\n        if key in self.d:\r\n            node = self.d[key]\r\n            if node.prev and node.next:\r\n                node.prev.next = node.next\r\n                node.next.prev = node.prev\r\n            elif node.next:\r\n                self.start = node.next\r\n                self.start.prev = None\r\n            if self.l != node:\r\n                node.prev = self.l\r\n                self.l.next = node\r\n                self.l = self.l.next\r\n                self.l.next = None\r\n            return node.val\r\n        else:\r\n            return -1\r\n\r\n    def put(self, key: int, value: int) -> None:\r\n        if not key in self.d:\r\n            if self.size == self.capacity:\r\n                node = self.start\r\n                del self.d[node.key]\r\n                self.start = node.next\r\n                if self.start:\r\n                    self.start.prev = None\r\n                self.size -= 1\r\n            if self.l:\r\n                self.l.next = Node(key, value, self.l)\r\n                self.l = self.l.next\r\n            if not self.start:\r\n                self.start = Node(key, value)\r\n                self.l = self.start\r\n            self.d[key] = self.l\r\n            self.size += 1\r\n        else:\r\n            node = self.d[key]\r\n            if node == self.start and self.start.next:\r\n                self.start = self.start.next\r\n                self.start.prev = None\r\n            if node.prev and node.next:\r\n                node.prev.next = node.next\r\n                node.next.prev = node.prev\r\n            if node != self.l:\r\n                node.prev = self.l\r\n                self.l.next = node\r\n            node.val = value\r\n            node.next = None\r\n            self.l = node\r\n\r\n\r\n\r\n# Your LRUCache object will be instantiated and called as such:\r\n# obj = LRUCache(capacity)\r\n# param_1 = obj.get(key)\r\n# obj.put(key,value)\n")),"\n",l.createElement(n.p,null,"Time complexity for get and put operations are O(n) = 1 and space complexity is O(n) due to the dictionary holding each element."))}var s=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.R)(),e.components);return n?l.createElement(n,e,l.createElement(a,e)):a(e)},o=t(4810),f=t(4399),i=t(3614),d=t(1510),c=t(6409),p=t(572);const m=d.default.div.withConfig({displayName:"blogPostTemplate__BlogPost",componentId:"sc-6bdelx-0"})(["margin:0 auto;margin-top:6em;max-width:800px;padding:20px;"]);function u(e){let{data:n,pageContext:t,children:r}=e;const{frontmatter:a}=n.mdx,{previous:s,next:u,post:v}=t;return l.createElement(f.A,null,l.createElement(d.ThemeProvider,{theme:i.w4},l.createElement(i.nB,null,l.createElement(c.A,null),l.createElement(m,null,l.createElement(i.DZ,{className:"text-center"},a.title),l.createElement("p",{className:"text-center"},v.frontmatter.date),r,s&&l.createElement(l.Fragment,null,s&&l.createElement(o.N_,{to:s.fields.slug},l.createElement("p",null,s.frontmatter.title))),u&&l.createElement(l.Fragment,null,u&&l.createElement(o.N_,{to:u.fields.slug},l.createElement("p",null,u.frontmatter.title)))),l.createElement(p.A,null))))}function v(e){return l.createElement(u,e,l.createElement(s,e))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-tsx-content-file-path-posts-2024-2024-11-26-leetcode-146-index-mdx-6f261451c0a5749b9128.js.map