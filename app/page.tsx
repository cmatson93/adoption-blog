import Image from "next/image";

import familyPhoto from "./assets/family-photo.jpeg";
import { NavigationButtons } from "./components/navigation-buttons";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeHeading}>
        <h1>Welcome to the Ng family adoption blog!</h1>
        <div className={styles.imgContainer}>
          <Image
            className={styles.familyImg}
            alt="family photo"
            src={familyPhoto}
          />
        </div>
        <div className={styles.homeBio}>
          <h5>
            {`Thanks so much for being interested in our families adoption
            journey. We appreciate each and every one of you! We'll be trying to
            update things here as get closer and closer to bringing our son
            home! As we have time we'll also add some more insight into the
            process leading up to this point and share some of our learnings
            along the way.`}
          </h5>
          <h5>
            {`You can find all our posts in the Blog tab above. If you'd like to
            get email notifications when we post something new go to the
            Newsletter tab and input your info there to sign up!`}
          </h5>
        </div>
        <NavigationButtons />
      </div>
    </div>
  );
}
