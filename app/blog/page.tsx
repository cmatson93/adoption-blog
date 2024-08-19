import { getSortedPostsData } from "@/app/lib/posts";
import Link from "next/link";
import { redirect } from "next/navigation";

import styles from "./styles.module.css";

type PostData = {
  date: string;
  title: string;
  id: string;
};

export default async function Blog() {
  const postData: PostData[] = await getSortedPostsData();

  // If there is only one post, redirect to that post's page
  if (postData.length === 1) {
    redirect(`/blog/${postData[0].id}`);
  }

  return (
    <div className={styles.list}>
      <h3 className={styles.blogPageTitle}>Posts</h3>
      <div className={styles.blogContainer}>
        {postData.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
