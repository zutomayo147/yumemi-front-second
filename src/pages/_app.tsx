import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import '@/styles/reset.css';
import '@/styles/index.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
  const Url = `${siteUrl}${router.asPath}`;
  return (
    <>
      <Head>
        <title>ゆめみフロントエンド試験</title>
        <meta name='viewport' content={'width=device-width, initial-scale=1'} />
        <meta name='description' content='ゆめみフロントエンド試験のコード' />
        <meta name='robots' content='index,follow' />
        <meta name='author' content='yamashita' />
        <meta property='og:title' content='ゆめみフロントエンド試験' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={Url} />
        <meta property='og:image' content='YUMEMI.svg' />
        <link rel='icon' type='image/svg+xml' sizes='16x16' href='YUMEMI.svg' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}

export default App;
