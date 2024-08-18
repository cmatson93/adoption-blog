import Link from "next/link";

import navigationStyles from "./markdown-styles.module.css";

export function NavigationButtons() {
  return (
    <div className={navigationStyles.btnContainer}>
      <Link className={navigationStyles.linkBtn} href="/blog">
        Read more
      </Link>
      <Link className={navigationStyles.linkBtn} href="/newsletter">
        Subscribe
      </Link>
    </div>
  );
}
