import data from "../../data.json";
import styles from "../../page.module.css";
import ArticleTextDisplay from "../../conponents/ArticleTextDIsplay";

export default function Article({ params }) {
  const slug = params.slug;
  const articleData = data.find((article) => slug === article.id);
  return (
    <main>
      <div
        className={styles.articlePageHeaderWrapper}
        style={{
          backgroundImage: `url(${articleData.image.url})`,
        }}
      >
        <p className={styles.articleTitle}>{articleData.title}</p>
        <p className={styles.articleDate}>{articleData.publishedDate}</p>
        <p className={styles.articleBlurb}>
          <i>{articleData.blurb}</i>
        </p>
      </div>
      <div className={styles.articleText}>
        {articleData?.articleText?.map((text, i) => (
          <ArticleTextDisplay key={i} data={text.data} type={text.type} />
        ))}
      </div>
    </main>
  );
}
