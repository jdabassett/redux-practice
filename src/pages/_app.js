import "@/styles/globals.css";

import Providers from "@/redux/provider";

export default function App({ Component, pageProps }) {
  return (
      <Providers>
        <Component {...pageProps} />;
      </Providers>
  );

  // return <Component {...pageProps} />
}
