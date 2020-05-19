const fs = require('fs');
const path = require("path");

const getFilePath = (extensions, file_path) => {
    console.log(file_path)
    const isExistingArr = extensions.map(ex => fs.existsSync(file_path + ex));
    console.log(isExistingArr)
    const sumExisting = isExistingArr.reduce((prev, current, i, arr) => prev + current);
    if (sumExisting !== 1) {
        throw Error("invalid extension");
    }
    const file_extension = extensions[isExistingArr.indexOf(true)];
    return file_path + file_extension;
}

const createInfo = (json_path, folder_path, extensions, createEachFileInfo) => {
    const file = fs.readFileSync(json_path);
    const jsonObject = JSON.parse(file);
    const article_infos = jsonObject.ArticleInfos;

    return article_infos.map((each_item) => {
        //'../pages/blog/'
        const file_path = getFilePath(extensions, path.join(folder_path, each_item.link))
        console.log(file_path)
        return createEachFileInfo(each_item, file_path)
    })
}

const createApolloClient = (endpoint = "https://kmdserver.kmdmnak.now.sh/graphql") => {
    const apolloLinkHttp = require('apollo-link-http')
    const HttpLink = apolloLinkHttp.HttpLink;
    const apolloCache = require('apollo-cache-inmemory');
    const InMemoryCache = apolloCache.InMemoryCache;
    const ApolloClient = require('apollo-client');
    const fetch = require('node-fetch');
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


const registNotes = () => {
    console.log(__dirname)
    const infos = createInfo(
        path.join(__dirname, "notes.json"),
        path.join(__dirname, '..', "pages", "notes"), [".md", ".mdx"],
        createEachFileInfo_notes

    );
    console.log(infos)
    const variables = {
        var: {
            code: "youaregood",
            ArticleInfos: infos,
            to: "notes"
        }
    }
    const gql = require('graphql-tag');
    const client = createApolloClient()
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
}
const createEachFileInfo_notes = (each_item, file_path) => {
    console.log(file_path)
    const stats = fs.statSync(file_path);
    const content = fs.readFileSync(file_path, 'utf8');
    if (!each_item.pubDate) {
        each_item.pubDate = stats.birthtime.toLocaleDateString() + " " + stats.birthtime.toLocaleTimeString() //('YYYY-MM-DD HH:MM:SS');
    }
    if (!each_item.lastUpdate) {
        each_item.lastUpdate = stats.ctime.toLocaleDateString() + " " + stats.ctime.toLocaleTimeString() //.format('YYYY-MM-DD HH:MM:SS')
    }
    each_item.sentences = content
    return each_item
}
registNotes()