import MDX from "@mdx-js/runtime";
import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: "white",
    backgroundColor: "white",
    width: "40%",
    height:"80%"
  }
});


const MDXviewApp = () => {
  const [md, setMD] = useState("");
  console.log(md)
  return (
    <div>
      <MDXEditor setMD={setMD} />
      <MDXDisplay md={md} />
    </div>
  );
};
const MDXEditor = (props) => {
  const [edingMD, setEdingMD] = useState();
  const classes = useStyles();

  return (
    <div>
      <button onClick={() => { props.setMD(edingMD) }}>SUBMIT!</button>

      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows="20"
        className={classes.root}
        defaultValue="Default Value"
        variant="standard"
        onChange={(e) => setEdingMD(e.target.value)}
      />
    </div>
  )
}
//<textarea rows="20" onChange={(e) => setEdingMD(e.target.value)} style={{ width: "80%", height: "40%" }} />
class MDXDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  componentWillReceiveProps() {
    this.setState({
      hasError: false
    })
  }
  render() {
    console.log(this.hasError)
    if (this.state.hasError) {
      return (
        <div>{String(this.state.error)}</div>
      );
    }
    return <MDX>{this.props.md}</MDX>;
  }
}


export default MDXviewApp;
