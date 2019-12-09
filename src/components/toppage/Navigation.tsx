import React from "react";
import styles from "./style.css";
import ids from "./ids.json";
import Button from "@material-ui/core/Button";
const Navigation = () => {
  return (
    <div id={styles.navigation}>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + ids.column_about}
        >
          ABOUT
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + ids.column_blog}
        >
          BLOG
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + ids.column_projects}
        >
          Projects
        </Button>
      </span>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href={"#" + ids.column_notes}
        >
          Notes
        </Button>
      </span>
    </div>
  );
};
export default Navigation;
