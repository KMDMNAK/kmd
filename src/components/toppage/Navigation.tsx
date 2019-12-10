import React from "react";
import styles from "./style.css";
import Button from "@material-ui/core/Button";
const Navigation = () => {
  return (
    <div id={styles.navigation}>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + styles.ABOUT}
        >
          ABOUT
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + styles.BLOG}
        >
          BLOG
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + styles.Projects}
        >
          Projects
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + styles.Notes}
        >
          Notes
        </Button>
      </span>
    </div>
  );
};
export default Navigation;
