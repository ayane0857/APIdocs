import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import fs from "fs";
import path from "path";
export const dynamic = "force-static";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type PostPageProps = { params: Promise<{ slug: string }> };

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "api_docs");
  const filePath = path.join(postsDirectory, slug + ".md");
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  const markdownString = fs.readFileSync(filePath, "utf-8");
  return (
    <div className="prose-lg prose-slate w-full max-w-4xl p-6 lg:prose-xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="text-3xl font-bold mt-6 mb-4 border-b pb-2"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="text-2xl font-semibold mt-5 mb-3 border-b pb-1"
              {...props}
            />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-relaxed mb-3" {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-3" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-3" {...props} />
          ),
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code
                className="bg-gray-100 text-sm px-1 py-0.5 rounded"
                {...props}
              />
            ) : (
              <pre className="bg-gray-800 text-white text-sm p-3 rounded-md overflow-x-auto">
                <code {...props} />
              </pre>
            ),
        }}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
}
