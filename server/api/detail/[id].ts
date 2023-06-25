import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// 文章目录
const postDir = path.join(process.cwd(), 'content');

export default defineEventHandler(async event => {
  const fileName = getRouterParam(event, 'id') + '.md';

  // 获取 文章内容
  const fullPath = path.join(postDir, fileName);
  try {
    fs.accessSync(fullPath);
    const fileContent = fs.readFileSync(fullPath, 'utf8');

    // 解析页面
    const matterInfo = matter(fileContent);

    // 转 markdow 为 html
    const processedContent = await remark()
      .use(html)
      .process(matterInfo.content);

    const content = processedContent.toString();

    return {
      title: matterInfo.data.title as string,
      content
    };
  } catch (error) {
    // 第一种 粗暴处理
    // throw createError({ statusCode: 404, statusMessage: '文章未找到' });
    throw createError({
      statusCode: 404,
      statusMessage: 'no find page found'
    });

    // return sendError(
    //   event,
    //   createError({
    //     statusCode: 404,
    //     statusMessage: '文章未找到'
    //   })
    // );
  }
});
