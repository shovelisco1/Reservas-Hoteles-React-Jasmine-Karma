import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["src/tests/**/*.spec.js"],
    preprocessors: {
      "src/tests/**/*.spec.js": ["webpack"],
    },
    webpack: {
      mode: "development",
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],
              },
            },
          },
          {
            // 👇 Loader para archivos CSS (soluciona tu error)
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            // 👇 Loader para imágenes (por si tus componentes importan imágenes locales)
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    },
    reporters: ["progress"],
    browsers: ["ChromeHeadless"],
    singleRun: true,
    concurrency: Infinity,
  });
}
