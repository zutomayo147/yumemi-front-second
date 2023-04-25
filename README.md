This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# ゆめみフロントエンドコーディング試験

## 提出の際の必要事項

### 課題の取り組み開始から完了までに要した合計時間

### これまでの総合的なプログラミング歴

- 大学入学以前にPythonとLinuxに少し触れた
- 大学一年生時に授業でJavaに触れた。
- 大学二年生時にVueとjavascriptとfirebaseでwebアプリを開発する授業で用いた
- 大学3年生の4月にreactとtypescriptに移行した
- 3年生の夏休みにdjangoを用いてバックエンドの知識を学んだ
- 10月からreactとdjangoを用いて自前でAPIを作成して、認証機能付きのフロントエンドとバックエンドの開発を個人で行った(作成途中 https://github.com/zutomayo147/Novel)
- 1月から先のアプリをdjangoからgoに移行し、goとreactでリファ
  クタリングを行っている。(未完成)

### これまでのWEBフロントエンドプログラミング歴

- 大学二年生時にVueとjavascriptとfirebaseでwebアプリを開発する授業で用いた

- 冬にスクレイピングをしてdomを取得し、任意の動画を非表示に
  するYoutubeのフィルターをユーザースクリプトを用いて作成し
  た

- 大学3年生の4月にreactとtypescriptに移行した

- 夏休みにWeb APIやPromiseやReactの仕様などフロントエンド開発を
  行う際の必要事項を根本的に学び直した

- 10月から個人でwebアプリ制作を行い、本格的にフロントエンド
  の開発を始めた

- 1月から可読性が上がるようにreactのコードを見つめ直した

### 本課題の開発中の所感

- 素のcssだけで記述を行うと指示があるためcss-in-jsを用いずに
  作成した

- Nextjs13のappディレクトリ機能ははまだ正式版が出ていないため採用しなかった

- huskyを用いるのでGithubCIは採用しなかった

## Getting Started

.env.sampleを.envにリネームし、発行したRESAS_API_KEYに差し替
える

First, run the development server:


```bash
yarn intall # パッケージのインストール

yarn dev # ローカルサーバーの起動
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For e2e test by cypress

```bash
yarn dev # ローカルサーバーの起動

npx cypress install # 初回だけ

yarn cypresse:headeless # e2eテストの実行
# or
yarn cypresse
```


## 動作環境

### prerequirements

- Nodejs(v19.8.1 or v18.12.1 or v16.18.1)
- yarnが必要

Nodejsのバージョンはnvmで適切に変更すること

## Deploy on Vercel
https://yumemi-front-second.vercel.app/

### 一回目の挑戦時のコード

https://github.com/zutomayo147/yumemi-front-test