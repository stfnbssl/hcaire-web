import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownDocumentProps = {
  content: string;
  title?: string;
};

export function MarkdownDocument({
  content,
  title,
}: MarkdownDocumentProps) {
  return (
    <section className="rounded-3xl border border-neutral-200 bg-white">
      {title ? (
        <div className="border-b border-neutral-200 px-6 py-4">
          <h2 className="text-xl font-semibold text-neutral-900">{title}</h2>
        </div>
      ) : null}

      <div className="px-6 py-6 md:px-8 md:py-8">
        <div className="prose-hcaire">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}