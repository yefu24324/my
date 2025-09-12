---
title: 'Alona Style'
description: '一个为了满足我个人风格的封装方式，简洁又类型安全的封装，方法名与类型定义又能于后端服务保持极致的相似度。极致的解决多语言和Api封装时零散无关联的问题'
publishDate: '2025/03/14'
isFeatured: true
---


## 项目背景

在做业务项目中经常会在页面中调用api请求，一种简单的方式那就是在页面中直接调用axios请求

```ts
import axios from "axios";
// 请求
const response = await axios.get("/api/user");
```