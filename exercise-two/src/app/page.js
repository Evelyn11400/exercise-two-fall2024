import styles from "./page.module.css";
import data from "./data.json";
import ArticleCard from "./conponents/articleCard";

export default function Home() {
  console.log(data);
  return (
    <main className={styles.pageWrapper}>
      <p className={styles.title}>Article Listing</p>
      {data.map((article, i) => (
        <ArticleCard
          key={i}
          blurb={article.blurb}
          id={article.id}
          image={article.image}
          publishedDate={article.publishedDate}
          title={article.title}
        />
      ))}
    </main>
  );
}
