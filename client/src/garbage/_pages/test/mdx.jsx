import MDX from "@mdx-js/runtime";
import { useState, createElement } from "react";

const MainApp = () => {
  const [md, setMD] = useState();
  let displayComponent = null;
  return (
    <div>
      <MDXTextArea setMD={setMD} />
      <DisplayError md={md} />
    </div>
  );
};

const MDXDisplay = props => <MDX>{props.md}</MDX>;

const MDXTextArea = props => {
  return <textarea onChange={v => props.setMD(v.target.value)}></textarea>;
};

class DisplayError extends React.Component {
  constructor(props) {
    super(props);
    this.hasError = false;
  }
  static getDerivedStateFromError(error) {
    this.hasError = true;
  }
  componentDidCatch(error, errorInfo) {
    console.log(error);
  }
  componentWillReceiveProps() {
    this.hasError = false;
  }
  componentDidUpdate() {
    console.log("did update!");
  }

  render() {
    return this.hasError ? (
      <div>Something wrong</div>
    ) : (
      <MDXDisplay md={this.props.md} />
    );
  }
}
export default () => <MainApp />;
