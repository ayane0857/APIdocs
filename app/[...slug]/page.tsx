import remarkGfm from "remark-gfm";
import ReactMarkdown, { Components } from "react-markdown";
import type { HTMLAttributes, ReactNode } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
export const dynamic = "force-static";
import { Metadata } from "next";
import { notFound } from "next/navigation";
type DocData = {
  data: {
    title?: string;
    description?: string;
    [key: string]: unknown;
  };
  content: string;
};

function getDocs(slug: string[]): DocData {
  const slugPath = slug.join("/");
  const postsDirectory = path.join(process.cwd(), "api_docs");
  const filePath = path.join(postsDirectory, `${slugPath}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return { data, content };
}

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

type GenerateMetadataProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const { data } = getDocs(slug);

  return {
    title: data.title ?? "タイトルが取得できませんでした",
    description: data.description ?? "説明が取得できませんでした",
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const { content } = getDocs(slug);
  const components: Components = {
    h1: ({ ...props }) => (
      <h1 className="text-3xl font-bold mt-6 mb-4 border-b pb-2" {...props} />
    ),
    h2: ({ ...props }) => (
      <h2
        className="text-2xl font-semibold mt-5 mb-3 border-b pb-1"
        {...props}
      />
    ),
    h3: ({ ...props }) => (
      <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
    ),
    p: ({ ...props }) => (
      <p className="text-base leading-relaxed mb-3" {...props} />
    ),
    a: ({ ...props }) => (
      <a
        className="text-blue-600 hover:underline"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    ul: ({ ...props }) => (
      <ul className="list-disc list-inside mb-3" {...props} />
    ),
    ol: ({ ...props }) => (
      <ol className="list-decimal list-inside mb-3" {...props} />
    ),
    table: ({ ...props }) => (
      <div className="overflow-x-auto my-4">
        <table
          className="min-w-full border-collapse border border-gray-300"
          {...props}
        />
      </div>
    ),
    thead: ({ ...props }) => <thead className="bg-gray-100" {...props} />,
    tbody: ({ ...props }) => <tbody {...props} />,
    tr: ({ ...props }) => (
      <tr className="border-b border-gray-300" {...props} />
    ),
    th: ({ ...props }) => (
      <th
        className="px-4 py-2 text-left font-semibold border border-gray-300"
        {...props}
      />
    ),
    td: ({ ...props }) => (
      <td className="px-4 py-2 border border-gray-300" {...props} />
    ),
    code: ({
      inline,
      ...props
    }: {
      inline?: boolean;
      children?: ReactNode;
    } & HTMLAttributes<HTMLElement>) =>
      inline ? (
        <code className="bg-gray-100 text-sm px-1 py-0.5 rounded" {...props} />
      ) : (
        <pre className="bg-gray-800 text-white text-sm p-3 rounded-md overflow-x-auto">
          <code {...props} />
        </pre>
      ),
  };
  return (
    <div className="prose-lg prose-slate w-full max-w-4xl p-6 lg:prose-xl">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
