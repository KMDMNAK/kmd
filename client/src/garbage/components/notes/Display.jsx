
import MDX from "@mdx-js/runtime";

//<textarea rows="20" onChange={(e) => setEdingMD(e.target.value)} style={{ width: "80%", height: "40%" }} />
export default class MDXDisplay extends React.Component {
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


