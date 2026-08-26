import fs from "fs";
import path from "path";
import matter from "gray-matter";

import {
  ContentItem,
  ContentMetadata,
} from "@/types/content";

const CONTENT_PATH = path.join(
  process.cwd(),
  "content"
);

function getFiles(directory: string) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs.readdirSync(directory)
    .filter(
      (file) =>
        file.endsWith(".md") ||
        file.endsWith(".mdx")
    );
}

function getContentFromDirectory(
  directory: string,
  type: ContentMetadata["type"]
): ContentItem[] {
  const folderPath = path.join(
    CONTENT_PATH,
    directory
  );

  const files = getFiles(folderPath);

  return files.map((file) => {
    const filePath = path.join(
      folderPath,
      file
    );

    const fileContent = fs.readFileSync(
      filePath,
      "utf8"
    );

    const { data, content } =
      matter(fileContent);

    return {
      metadata: {
        ...data,
        type,
        slug:
          data.slug ??
          file
            .replace(".mdx", "")
            .replace(".md", ""),
      } as ContentMetadata,

      content,
    };
  });
}

export function getAllProjects() {
  return getContentFromDirectory(
    "projects",
    "project"
  ).sort(
    (a, b) =>
      new Date(
        b.metadata.date
      ).getTime() -
      new Date(
        a.metadata.date
      ).getTime()
  );
}

export function getAllPosts() {
  return getContentFromDirectory(
    "posts",
    "article"
  ).sort(
    (a, b) =>
      new Date(
        b.metadata.date
      ).getTime() -
      new Date(
        a.metadata.date
      ).getTime()
  );
}

export function getAllThoughts() {
  return getContentFromDirectory(
    "thoughts",
    "thought"
  ).sort(
    (a, b) =>
      new Date(
        b.metadata.date
      ).getTime() -
      new Date(
        a.metadata.date
      ).getTime()
  );
}

export function getFeaturedProjects() {
  return getAllProjects().filter(
    (project) =>
      project.metadata.featured
  );
}

export function getContentBySlug(
  type: ContentMetadata["type"],
  slug: string
) {
  let content: ContentItem[];

  switch (type) {
    case "project":
      content = getAllProjects();
      break;

    case "article":
      content = getAllPosts();
      break;

    case "thought":
      content = getAllThoughts();
      break;
  }

  return content.find(
    (item) =>
      item.metadata.slug === slug
  );
}