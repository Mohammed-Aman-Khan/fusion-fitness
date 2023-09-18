import { Html, Head, Main, NextScript } from "next/document";

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}

class DeferNextScript extends NextScript {
  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    return dedupe(dynamicImports).map((bundle) => {
      if (!bundle.file.endsWith(".js") || files.allFiles.includes(bundle.file))
        return null;

      return (
        <script
          defer={!isDevelopment}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(
            bundle.file
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
        />
      );
    });
  }

  getScripts(files) {
    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString,
    } = this.context;

    const normalScripts = files.allFiles.filter((file) => file.endsWith(".js"));
    const lowPriorityScripts = buildManifest.lowPriorityFiles?.filter((file) =>
      file.endsWith(".js")
    );

    return [...normalScripts, ...lowPriorityScripts].map((file) => {
      return (
        <script
          key={file}
          src={`${assetPrefix}/_next/${encodeURI(
            file
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          defer={!isDevelopment}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
        />
      );
    });
  }
}

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="Fusion Fitness" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Fusion Fitness" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/favicon-16x16.webp"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <DeferNextScript />
      </body>
    </Html>
  );
};

export default Document;
