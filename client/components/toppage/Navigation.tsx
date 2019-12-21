import React from "react";
import styles from "./style.css";
import Button from "@material-ui/core/Button";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  button_label: {
    fontSize: "30px"
  }
});


const Navigation = () => {
  const classes = useStyles()
  return (
    <div id={styles.navigation}>
      <span className={styles.navigation_button}>
        <Button
          variant="contained"
          color="secondary"
          href="#ABOUT"
          fullWidth={true}
          classes={{ label: classes.button_label }}
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
          classes={{ label: classes.button_label }}
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
          classes={{ label: classes.button_label }}
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
          classes={{ label: classes.button_label }}
        >
          Notes
        </Button>
      </span>
    </div>
  );
};
export default Navigation;
