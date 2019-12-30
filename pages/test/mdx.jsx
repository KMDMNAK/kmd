import * as React from "react";
import mdx from "@mdx-js/mdx";
import babel from 'babel-loader';

export default () => {
  const jsx = mdx.sync(`
  
    # This is MDX!
  
  MDX テスト
  
  `);

  console.log(jsx);
  return eval(jsx);
};
