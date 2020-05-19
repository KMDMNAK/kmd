import {
    Mutation,
    MutationAddArticleInfoArgs,
    MutationResolvers,
    AddArticleInfoPayload,
    AddArticleInfoInput,
    ArticleInfo,
    ArticleInfoInput
} from './resolverType'
import fetch from 'node-fetch';

const Mutate: MutationResolvers = {
    addArticleInfo: async (obj: any, args: MutationAddArticleInfoArgs, context: any, info: any) => {
        const article_infos: ArticleInfoInput[] | null | undefined = args.objects.ArticleInfos
        const code = args.objects.code ? args.objects.code : null;
        let URL_addArticleInfo = null;
        if (args.objects.to === "blog") {
            URL_addArticleInfo = "https://wenppy.com/api/kmd/mutation.py";
        }
        else if (args.objects.to === "notes") {
            URL_addArticleInfo = "https://wenppy.com/api/kmd/mutation_notes.py";
        }
        else {
            throw Error("no url")
        }

        const body = {
            code: code,
            datas: article_infos
        }
        const { status, message } = await fetch(URL_addArticleInfo, {
            method: "POST", body: JSON.stringify(body)
        })
            .catch((e: any) => {
                return { status: false, message: e.toString() }
            })
            .then((v: any) => v.json())
            .then(v => { return { status: v.status, message: v.message } })
        if (!status) {
            throw Error(message);
        }
        console.log(message)
        const result: AddArticleInfoPayload[] | null = article_infos ? article_infos.map(
            (each_info: any) => {
                return { id: each_info.id }
            }
        ) : null;
        return result;
    }
}

export default Mutate