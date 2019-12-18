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
          href="#ABOUT"
          fullWidth={true}
        >
          ABOUT
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href="#BLOG"
          fullWidth={true}
        >
          BLOG
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href="#Projects"
          fullWidth={true}
        >
          Projects
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href="#Notes"
          fullWidth={true}
        >
          Notes
        </Button>
      </span>
    </div>
  );
};
export default Navigation;
