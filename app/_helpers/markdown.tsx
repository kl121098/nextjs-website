import matter from "gray-matter";
import {remark} from "remark";
import gfm from "remark-gfm";
import stringify from "remark-stringify";
import rehype from "remark-rehype";
import html from "rehype-stringify";

/*
* Type definitions based on the following:
author : Kunjan Dalal
date   : 2020-10-01 17:00:00 +0000
title  : Awesome Post 1
slug   : awesome-post-1
tags  : [awesome]
*/

export type FrontMatter = {
    content: string;
    author: string;
    date: string;
    title: string;
    slug: string;
    tags: string[];
    image: string;
}

export  const extractMarkdownData = (markdownData: string) => {
    const { content, data } = matter(markdownData);
    return {
        content,
        data: data as FrontMatter
    };
}


const extractMarkdownContent = (data: string) => {
    const { content: markdownContent } = matter(data);
    return markdownContent;
}

type MarkdownToHtmlProps = {
    data: string;
}
export const MarkdownToHtml = async (props : MarkdownToHtmlProps) => {
    const content = extractMarkdownContent(props.data);
    const file = await remark()
        .use(gfm)
        .use(stringify)
        .use(rehype)
        .use(html)
        .process(content);

    const htmlContent = String(file);
    return <article dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose lg:prose-xl" />
}