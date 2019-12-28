const fs = require('fs');

const readDirectory = () => {
    const targetDirectory = '../pages/blog/';

    const articleInfo = {
        id: "0",
        link: "",
        descript: null,
        pubDate: null,
        lastUpdate: null,
        title: "",
        tags: null,
        sentences: null,
        likeCounts: null,
        comments: null,
        other: null
    }

    fs.readdir(targetDirectory, (err, files) => {
        files.forEach(filename => {
            const stats = fs.statSync(targetDirectory + filename);
            { }
            console.log(filename);
            console.log(stats.ctime);
            console.log(stats.birthtime);

            console.log();
        });
    });
}


const createInfo = () => {
    const file = fs.readFileSync("./article.json");
    const jsonObject = JSON.parse(file);
    const article_infos = jsonObject.ArticleInfos;
    const link_prefix = "https://kmd.now.sh/blog/"
    
    return article_infos.map((each_item) => {
        const file_uri = '../pages/blog/' + each_item.link + ".tsx";
        const stats = fs.statSync(file_uri);
        if (!each_item.pubDate) {
            each_item.pubDate = stats.birthtime.toLocaleDateString()+ " " + stats.birthtime.toLocaleTimeString()//('YYYY-MM-DD HH:MM:SS');
        }
        if (!each_item.lastUpdate) {
            each_item.lastUpdate = stats.ctime.toLocaleDateString() + " " + stats.ctime.toLocaleTimeString()//.format('YYYY-MM-DD HH:MM:SS')
        }
        each_item.link = link_prefix + each_item.link;
        return each_item
    })
}
const article_infos = createInfo();

const createApolloClient = () => {
    const apolloLinkHttp = require('apollo-link-http')
    const HttpLink = apolloLinkHttp.HttpLink;
    const apolloCache = require('apollo-cache-inmemory');
    const InMemoryCache = apolloCache.InMemoryCache;
    const ApolloClient = require('apollo-client');
    const fetch = require('node-fetch');
    global.fetch = fetch;
    const endpoint = "https://kmdserver.kmdmnak.now.sh/graphql"
    //const endpoint="http://localhost:4000/graphql"
    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: endpoint,
        fetch: fetch
    });
    const IS_BROWSER = !!process.browser;
    const client = new ApolloClient.ApolloClient({
        cache,
        link,
        ssrMode: !IS_BROWSER, // Disables forceFetch on the server (so queries are only run once)
        connectToDevTools: IS_BROWSER,
    });
    return client
}

//const apollo_server = "https://kmdserver.kmdmnak.now.sh/graphql";
const client = createApolloClient();
const gql = require('graphql-tag');
const variables = {
    var: {
        code: "youaregood",
        ArticleInfos: article_infos
    }
}
console.log(article_infos)
const result = client.mutate({
    mutation: gql`
        mutation add($var:addArticleInfoInput!){
            addArticleInfo(objects:$var){
                id
            }
        }
    `,
    variables: variables
})
    .then(v => console.log(v))
    .catch(e => {
        console.log("error")
        console.log(e)
    })

