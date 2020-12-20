import remove from "rollup-plugin-delete";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/index.ts",
    plugins: [
        remove({targets: "dist/*"}),
        typescript(),
        terser()
    ],
    output: {
        file: "dist/index.js",
        format: "cjs"
    }
};
