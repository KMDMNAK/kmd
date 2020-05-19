
const withMisto = (info: any) => {
    console.log(info)
    return (component: any) => {
        return component;
    }
}

export default withMisto;