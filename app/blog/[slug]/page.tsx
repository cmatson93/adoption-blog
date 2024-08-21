import Date from "@/app/components/Date";

import { getPostData } from "@/app/lib/posts";

import styles from "./styles.module.css";
import { NavigationButtons } from "@/app/components/navigation-buttons";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
};

// TODO: Look up what this does? SEO stuff?
export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);

  return (
    <div className={styles.blogContainer}>
      {/* Post Title */}
      <h1 className={styles.title}>{postData.title}</h1>

      <div className={styles.dateContainer}>
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      <NavigationButtons />
    </div>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
