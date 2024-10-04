import Container from "@/app/_components/container";
import markdownToHtml from "@/lib/markdownToHtml";
import { getMarkdownContent } from "@/lib/api";
import markdownStyles from "@/app/_components/markdown-styles.module.css";
import Header from "@/app/_components/header";

export default async function Page() {
  const markdownContent = await getMarkdownContent("src/app/terms-of-use/terms-of-use.md");
  const htmlContent = await markdownToHtml(markdownContent || "");

  return (
    <main>
      <Container>
        <Header />
        <h1 className="text-5xl md:text-8xl font-bold text-center tracking-tighter leading-tight md:pr-8 mb-5">
          Terms of use
        </h1>
        <div className="max-w-4xl mx-auto">
          <div
            className={markdownStyles["privacy-markdown"]}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
        <br></br>
      </Container>
    </main>
  );
}
