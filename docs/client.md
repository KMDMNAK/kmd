[could not found client](https://stackoverflow.com/questions/58475780/react-apollo-error-invariant-violation-could-not-find-client-in-the-context)


[The prop `store.subscribe` is marked as required](https://stackoverflow.com/questions/46671108/the-prop-store-subscribe-is-marked-as-required)

各component内でgetInitialPropsを利用してそれぞれのredux storeを作成, \<Provider>を利用してstoreのcontextを利用すると、client側のレンダリングでエラーとなる。
**解決策**
getInitialPropsでは、あくまでreduxのinitialPropsを作成するにとどめ、createStoreは_app.js内で行う。

react-dom/serverを利用したSSRの場合、一般にstrのみサーバーでレンダリングされるため、css適応前のweb pageが一瞬表示されてしまう。
