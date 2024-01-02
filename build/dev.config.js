import { baseConfig, basePlugins } from "./base.config";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
  input: "./src/index.ts",
  ...baseConfig,
  plugins: [
    ...basePlugins,
    livereload({
      verbose: false
    }),
    serve({
      // open: true, // 运行时自动打开浏览器
      verbose: false,
      historyApiFallback: true,
      contentBase: ".",
      host: "localhost",
      port: 10001,
      onListening: () => {
        console.log("Listening->", "http://localhost:10001");
      }
    })
  ]
};
