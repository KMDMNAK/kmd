export const getBlogHeaders = (limit: number): Promise<API.BlogPosts.ResponseBody> => fetch('/api/blog', {
    method: 'POST',
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({ limit })
}).then(v => v.json())

export const getBlogPage = (id: string): Promise<API.BlogPostPage.ResponseBody> =>
    fetch(`/api/blog/${id}`)
        .then(v => v.json())