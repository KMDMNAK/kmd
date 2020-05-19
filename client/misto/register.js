const fs = require('fs');

const createInfo = (json_path, folder_path, extension) => {
    const file = fs.readFileSync(json_path);
    const jsonObject = JSON.parse(file);
    const article_infos = jsonObject.ArticleInfos;

    return article_infos.map((each_item) => {
        //'../pages/blog/'
        const file_uri = path.join('.', "pages", "blog", each_item.link + ".tsx");
        const stats = fs.statSync(file_uri);
        if (!each_item.pubDate) {
            each_item.pubDate = stats.birthtime.toLocaleDateString() + " " + stats.birthtime.toLocaleTimeString() //('YYYY-MM-DD HH:MM:SS');
        }
        if (!each_item.lastUpdate) {
            each_item.lastUpdate = stats.ctime.toLocaleDateString() + " " + stats.ctime.toLocaleTimeString() //.format('YYYY-MM-DD HH:MM:SS')
        }
        //each_item.link = link_prefix + each_item.link;
        return each_item
    })
}

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
const path = require('path');

const article_infos = createInfo(path.join(__dirname, "article.json"));

//const apollo_server = "https://kmdserver.kmdmnak.now.sh/graphql";
const client = createApolloClient();
const gql = require('graphql-tag');
const variables = {
    var: {
        code: "youaregood",
        ArticleInfos: article_infos,
        to: "blog"
    }
}
console.log(article_infos)
client.mutate({
        mutation: gql `
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