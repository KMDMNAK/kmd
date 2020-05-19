const fetch = require('node-fetch');
//const endpoint = "http://localhost:4000/graphql"
const endpoint = "https://kmdserver.kmdmnak.now.sh/graphql"
const body = {
    query: `
    {
        getCurrentArticleList{
          title
        }
      }
    `
};
const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
}

fetch(endpoint, options)
    .then(v => {
        try {
            return v.text()
        } catch (error) {
            return v.text()
        }
    })
    .then(json_ob => {
        console.log(json_ob)
    })
