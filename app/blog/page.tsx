import { getSortedPostsData } from "@/app/lib/posts";
import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "./styles.module.css";
import dayjs from "dayjs";

type PostData = {
  date: string;
  title: string;
  id: string;
  excerpt: string;
};

export default async function Blog() {
  const postData: PostData[] = await getSortedPostsData();

  // If there is only one post, redirect to that post's page
  if (postData.length === 1) {
    redirect(`/blog/${postData[0].id}`);
  }

  const formatDate = (date: string) => {
    const formatted = dayjs(date).format("DD/MM/YYYY");

    return formatted;
  };

  return (
    <div className={styles.list}>
      <h3 className={styles.blogPageTitle}>Posts</h3>
      <div className={styles.blogContainer}>
        {postData.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className={styles.card}>
            <h3 className={styles.postTitle}>{post.title}</h3>
            <p className={styles.postExcerpt}>{post.excerpt}</p>
            <p className={styles.postDate}>{formatDate(post.date)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
