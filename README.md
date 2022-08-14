# template_web_react-typescript_spa

## 概要

React x TypeScript の SPA 構築テンプレートです。  
以下に対応しています。

- TypeScript に対応
- scss に対応
- react-router-dom による基本的なルーティングを実装済
- 簡易的なグローバルステートを実装済
- Storybook を導入済
- jest と react-testing-library によるテスト機能を実装済

まずは、[導入手順](#導入手順)をご確認ください。

## 目次

- [環境](#環境)
- [本テンプレートの更新履歴](#本テンプレートの更新履歴)
- [コーディング規約](#コーディング規約)
- [コマンド](#コマンド)
- [導入手順](#導入手順)
- [ディレクトリ構成](#ディレクトリ構成)
- [解説](#解説)
  - [環境変数](#環境変数)
  - [アプリの状態管理](#アプリの状態管理)
    - [TEA](#TEA)
  - [ルーティング](#ルーティング)
  - [TypeScript](#TypeScript)
  - [scss](#scss)
  - [components](#components)
  - [storybook](#storybook)
  - [テスト](#テスト)

## 環境

|      | バージョン |
| ---- | ---------- |
| node | 16.13.1    |
| yarn | 1.22.17    |
| npm  | 8.3.0      |

**package.json に engines を設定して、Node.js のバージョンに制限をかけています**  
**本テンプレートを利用する場合は、Node.js のバージョンを v16 にあわせる必要があります。**  
**package.json の`"engines": {"node": "16.x"}`の記述を変更・削除することで、バージョン制限の解除が可能です。**

## 本テンプレートの更新履歴

- React-v17 → React-v18
  - React_v18:`<React.StrictMode>` と useEffext, useLayoutEffect

### React_v18:`<React.StrictMode>` と useEffext, useLayoutEffect

React v18 では`<React.StrictMode>`配下のコンポーネント内で宣言された useEffect, useLayoutEffect は、安全でない副作用を見つけるためにコンポーネントを 2 回描画させます。  
そのため、空配列を渡した場合において、マウント時に useEffext, useLayoutEffect が 2 回呼ばれます。  
また、クリーンアップ関数も 1 回呼ばれることになります。  
1 回のみの実行を保証したい場合は、useRef などを使って前に実行されたかどうかを保持することで対処できます。  
なお、本番環境や`<React.StrictMode>`で囲まれていないコンポーネントに関しては、この挙動は発生しません。

`src/components/pages/Home/Home.tsx` にサンプルとなる処理を実装しています。  
詳細は上記のファイルを確認してください。

## コーディング規約

コーディング規約は [template_frontend-document | フロントエンドコーディング規約](https://github.com/t-tonyo-maru/template_frontend-document/blob/main/articles/coding_conventions.md) を参照してください。

## コマンド

| コマンド             | 内容                                                                                                |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| yarn build           | アプリケーションを build します                                                                     |
| yarn start           | build したアプリケーションを実行します                                                              |
| yarn test            | jest と react-testing-library によるテストを実行します。                                            |
| yarn storybook       | storybook を起動します。                                                                            |
| yarn build-storybook | storybook の静的なファイルを build します。                                                         |
| yarn eject           | create-react-app で行っている設定（Webpack など…）を、ユーザー自身で設定できるようになります。（※） |

**※yarn eject を実行すると、create-react-app の管理から抜ける事になり、ユーザー自身で様々な設定できるようになります。**  
**しかし、yarn eject を実行後、元の create-react-app 管理の状態に戻せなくなります。**  
**実行時は、注意してください。**

## 導入手順

1. リポジトリを clone します。
2. 開発環境を[環境](#環境)に合わせます。
3. `yarn install` もしくは `npm install` を実行します
4. 環境変数ファイル 2 種（.env.development / .env.production ）を用意します  
   詳細は[環境変数](#環境変数)を確認してください
5. パッケージをインストール後に、`yarn build` もしくは `npm run build` を実行します
6. build 後に `yarn start` もしくは `npm run start` を実行します

## ディレクトリ構成

```
./
├── README.md
├── .prettierrc
├── .storybook … storybook の設定ファイルが格納されます
├── .env.development … 開発用の環境変数定義ファイル（※.gitignore にて除外）
├── .env.production … 本番用の環境変数定義ファイル（※.gitignore にて除外）
├── build … build 後のファイルが格納されます
├── jest.config.json … jest の設定ファイルです
├── package.json
├── public … 本番公開する静的ファイルを格納します
├── src … 編集するファイルは主の src/ 配下に格納します。
│   ├── App.tsx … React アプリのルートコンポーネントです。
│   ├── assets … assets ファイルを格納します。外部関数化した ts や json ファイルなどを格納します。
│   ├── components … コンポーネントファイルを格納します
│   │   ├── atoms
│   │   ├── molecules
│   │   ├── organisms
│   │   ├── pages
│   │   └── templates
│   ├── index.tsx … React アプリのエントリーポイントです。
│   ├── react-app-env.d.ts … React アプリの型定義です。※編集や削除はしないでください。
│   ├── reportWebVitals.ts … webvital 計測用のスクリプトです。
│   ├── router … アプリのルーティング関連のファイルを格納します
│   ├── setupTests.ts
│   ├── store … アプリのグローバルステート関連のファイルを格納します
│   ├── styles … scss ファイル一式を格納します
│   │   ├── config
│   │   ├── libs
│   │   ├── style.scss
│   │   └── util
│   └── types … type, interface を格納します
├── tsconfig.json … TypeScript の設定ファイルです。
└── yarn.lock
```

## 解説

### 環境変数

#### はじめに

**環境変数ファイルには、非常に重要な情報を定義する事が考えられるため、リポジトリに含めないよう .gitignore で指定しています。**  
**本テンプレートのセットアップ時に、別途、環境変数ファイルを用意してください。**  
環境変数ファイルを用意せずに、`yarn build` や `yarn start` コマンドを実行した場合、環境変数（`process.env.変数名`）は `undefined` になります。

本テンプレートのルートディレクトリ直下に、環境変数のサンプルとなる `.env.sample` を用意していますので、参考にしてください。

#### 環境変数ファイル（.env）

本テンプレートはルートディレクトリ直下に、以下の環境変数ファイルを配置する事を想定した構成になっています。

- .env.development … 開発用の環境変数を定義したファイル。
- .env.production … 本番用の環境変数を定義したファイル。

各環境別に変数を用意したい場合は、上記のファイルへ追記してください。  
**環境変数名は、大文字英数字のみのスネークケースにしてください。**

各コンポーネントで `process.env.REACT_APP_PUBLIC_URL` と記述すると、env ファイルの `REACT_APP_PUBLIC_URL` を取得できます。  
`/src/components/pages/Home/Home.tsx` にコメントアウトしたサンプルコードを実装しています。

### アプリの状態管理

アプリ全体の状態管理として、React hooks と useContext を使っています。  
`/src/store/index.tsx` にサンプルのグローバルステートを用意しています。

#### TEA

本テンプレートでは、グローバルステートの状態管理に[TEA（The Elm Architecture）](https://guide.elm-lang.jp/architecture/)の考え方を採用しています。  
TEA は[TEA 公式ページ](https://guide.elm-lang.jp/architecture/)でも触れられているように、Redux や Vuex の基礎となった考え方です。  
TEA を取り入れる事で、複雑な状態管理を型安全かつシンプルな構造に保てます。

参考

- [TEA 公式ページ](https://guide.elm-lang.jp/architecture/)
- [React Hooks API で The Elm Architecture](https://zenn.dev/eagle/articles/react-tea-hook)

##### TEAとグローバルステート実装例の対応表

本テンプレートでは、TEA を下記の表にように、輸入しています。  
`/src/store/index.tsx` に、そのサンプルを実装しています。

| 本テンプレート (React x TypeScript)                | TEA (Elm) |
| -------------------------------------------------- | --------- |
| state / ModelType                                  | Model     |
| &lt;Store.Provider&gt; 配下の jsx                  | View      |
| update(グローバルステート用 useReducer の更新関数) | Update    |
| MessageType                                        | Msg       |

TEA の考え方を取り入れてはいますが、状態管理の方法自体は、React の useReducer の基本的な使い方に則っています。  
ただ TEA を取り入れた事で大きく変更になったのが、Msg に相当する MessageType です。

基本的に [useReducer](https://ja.reactjs.org/docs/hooks-reference.html#usereducer) は、更新関数に `{ state: {...}, action: { action: ..., payload: ... }}` の引数を取ります。  
本テンプレートでは、上記の `action` を TEA の[バリアント](https://guide.elm-lang.jp/types/custom_types.html)として扱えるようにしています。  
（`action` のバリアント化は、TypeScript の合併型を用いています。）

`action` のバリアント化により、useReducer の更新関数の `switch` 文で厳密な型判定が可能になります。  
また、MessageType に[ジェネリクス](https://typescript-jp.gitbook.io/deep-dive/type-system/generics)を持たせる事で、型安全を実現しながら、柔軟な拡張が可能です。  
（`/src/store/index.tsx` に、コメントアウト化したジェネリクス対応済の MessageType 実装例を記載しています。）

おまけ

- `/src/store/index.tsx` のグローバルステート実装例は、オブジェクトの合併型を用いていますが、同じような事は [TypeScript タプル](https://typescript-jp.gitbook.io/deep-dive/type-system#tapuru)でも可能できます。お好みの方法で実装してください。
- バリアントを再現するためには、[TypeScript enum](https://typescript-jp.gitbook.io/deep-dive/type-system/enums) を用いた方が良いのでは？…と思われるかもしれませんが、[TypeScript の enum はデメリットが多い](https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/)ため、代わりに合併型を使っています。

#### グローバルステートの組み込み方

本テンプレートでは、以下のようにしてグローバルステートを適用しています。

1. `/src/store/` 配下に、グローバルステートを管理する `.tsx` ファイルを作成する
2. 1.で作成したファイル内で、`useReducer` を使って、グローバルステートの原型を作成します。
3. `createContext` を使って、2.で作成した原型をもとに、グローバルステートを作成します。
   グローバルステートは外部ファイルで読み込めるように `export` します。
4. アプリへグローバルストアを供給する `StoreProvider` を作成します。
   `StoreProvider` も外部ファイルで読み込めるように `export` します。
5. `/src/index.tsx` に `StoreProvider` を展開し、`<App />`を囲みます。
6. これで各ページ・コンポーネントでグローバルステートが参照できるようになります。

サンプルファイルとして `/src/store/index.tsx` を用意しています。  
グローバルステートを適用する場合は、このファイルを参考にしてみてください。

また、グローバルステートを作成する時は、**1 アプリ = 1 グローバルステート**の構成することをオススメします。  
グローバルステートを単一にする事で、アプリの状態フローをシンプルに保てます。

### ルーティング

本テンプレートでは、`react-router-dom` を用いたルーティングを設定しています。

`src/router` にルーティング関連のファイルを格納しています。  
デフォルトで、`AppRoutes.tsx` と `Router.tsx` の 2 つのファイルを用意しています。  
ファイルの内容は以下の通りです。

- `AppRoutes.tsx` … アプリのルーティング一覧を定義したファイルです。
- `Router.tsx` … `AppRoutes.tsx` のルーティング一覧を読み込み、アプリに適用するためのルーターコンポーネントを定義しています。

`Router.tsx` で定義したルーターコンポーネントを `src/App.tsx` に読み込んで展開しています。

`react-router-dom` について詳しく知りたい方は以下をご確認ください。
[> react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)
[> React Router v6 での Route コンポーネントの扱い方の変更点](https://qiita.com/seal_qiita/items/63fc7358d90de825ccc8)

**react-router を v5 から v6 にバージョンアップしました。（2022.07）**  
**v6 以降、記法が大きく更新されましたので、カスタマイズ時は注意してください**

### TypeScript

#### ts, tsx の import パス

ts, tsx の import 文のパスは、src をルートとしたパスで読み込むことができるように設定しています。  
tsconfig.json に `compilerOptions` の `"baseUrl": "src"` を設定しているためです。

#### JavaScriptファイルの除外

本テンプレートでは、品質向上のため JavaScript ファイル（.jsx 含む）の実装を許可していません。  
要件により、JavaScript ファイルでの実装が必要になった場合は、tsconfig.json に `"allowJs": true` を追記してください。

#### 型

複数のコンポーネントや ts ファイルで共通で使用する型定義は、`/src/types/` に格納する事をオススメします。  
1 ファイル内でしか使用しない型であれば、そのファイルの中に定義するだけで良いか思います。

#### ramda

本テンプレートでは [ramda](https://ramdajs.com/) を採用しています。  
[ramda](https://ramdajs.com/) は JavaScript / TypeScript のユーティリティライブラリです。  
[R.clone](https://ramdajs.com/docs/#clone) ：ディープコピー、[R.equals](https://ramdajs.com/docs/#equals) ：ディープイコール…などの便利なメソッドが用意されています。  
また、特に JavaScript / TypeScript で関数型プログラミングを実現するのに役立ちます。

`import * as R from 'ramda'` もしくは `import { …必要な機能のみ…, } from 'ramda'` で .ts / .vue ファイルに読み込んで使用できます。  
[@types/ramda](https://www.npmjs.com/package/@types/ramda) もインストールしていますので、型安全になっています。

以下のファイルに ramda のサンプルファイルを実装しています。

- /src/assets/ts/util/ramdaSample/ramdaSample.ts
- /src/assets/ts/util/ramdaSample/ramdaSample.test.ts

ramda が不要な場合は上記サンプルファイルを削除した上で、下記のコマンドを実行すれば、テンプレートから削除できます。  
`yarn remove ramda @types/ramda` もしくは `npm uninstall ramda @types/ramda`

### scss

#### scss のディレクトリ構成

```
styles … scss ファイル一式を格納します
├── config … 設定ファイル等を格納します
│   ├── _base.scss
│   └── _variables.scss
├── libs … ライブラリを格納します
│   └── _reset.min.scss
├── style.scss … scss のエントリーポイントファイルです
└── util … scss の汎用的なファイルを格納します
    ├── functions
    └── mixins
```

#### scss モジュールで、styles/ 内の変数や mixin を使う方法

各コンポーネントの scss モジュールで `/src/styles` 内の変数や mixin を使用するためには、scss モジュール に対象の scss ファイルを import します。  
scss の import 文のパスは補完されませんので、相対パスで import するようにしてください。

### components

本テンプレートは、atomic design を採用しています。  
コンポーネントの粒度や構成は自由に変更していただいて問題ありません。  
また、本テンプレートでは module.scss 形式でスタイリングできるようにしています。  
CSSinJS にカスタマイズしたい方は自由に変更していただいて問題ありません。

#### コンポーネントのディレクトリ構成

本テンプレートのコンポーネントのディレクトリ構成は、以下の通りです。  
atomic design の構成と同様です。

```
components
  ├── atoms
  ├── molecules
  ├── organisms
  ├── templates
  └── pages
```

#### コンポーネントの設計指針

atomic design を採用する場合は、[template_frontend-document | コンポーネントの設計指針](https://github.com/t-tonyo-maru/template_frontend-document/blob/main/documents/coding_conventions.md#%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E8%A8%AD%E8%A8%88%E6%8C%87%E9%87%9D) を参照しての開発をオススメします。

#### レイアウトファイル

本テンプレートのレイアウトファイルは、以下のような構成になっています。

1. `/src/components/templates/Wrapper/Wrapper.tsx` がアプリ全体をラップするコンポーネントです。
2. `/src/components/templates/` 配下の各テンプレートは `Wrapper.tsx` を import しています。  
   各テンプレートにて、Wrapper コンポーネントを展開し、その配下に、レイアウトを設定しています。
3. 2.で作成した Templates コンポーネントを各ページへ import して適用します。

階層構造で表すと、以下のようになります。  
（※細かい階層は省略しています。）

▼ 階層構造

```
> StoreProvider // アプリで状態管理を使用する場合は StoreProvider がルートになります。
    > App
      > BrowserRouter // ルーティング
        > Router
          > Switch
            > Route // ルーターコンポーネント。この中に Page が 1 つだけ入ります。
              > Page // Page コンポーネント
                > Wrapper
                  > Templates // Templates コンポーネント
```

### storybook

#### storybookにおけるリセットCSSについて

本テンプレートでは、`.storybook/preview-head.html`を利用して、storybook へリセット css を適用しています。  
`.storybook/preview-head.html`は、storybook のプレビュー用 iframe の`<head>`タグを拡張するためのファイルです。
storybook に Google Web Font 等を読み込む場合は、`.storybook/preview-head.html`に追記してください。

[> 参考 | Story rendering](https://storybook.js.org/docs/react/configure/story-rendering)

#### stories ファイルに Link コンポーネントを含めた時に発生するエラーについて

Link コンポーネントを Router コンポーネントの外に配置した場合、以下のエラーが発生します。

```
You should not use <Link> outside a <Router>
```

上記のエラーに対応するために、stories ファイル内で、Link コンポーネントを使用する場合は、`MemoryRouter` を使って、Router コンポーネントのスタブで Link を囲むようにします。  
詳しくは、/src/components/pages/〜 配下の stories ファイルを参照してください。

[> 参考 | react-router に依存したコンポーネントを Storybook に追加する](https://qiita.com/daikiojm/items/da3299d7b90d38194d85)

### テスト

本テンプレートでは、`jest` と `react-testing-library` を導入しています。
`yarn test` コマンドでテストを実行します。

- [> jest](https://jestjs.io/ja/)
- [> react-testing-library](https://testing-library.com/docs/react-testing-library/intro/)

#### テストファイルの格納先

テストファイルは `hoge.test.ts` もしくは `hoge.test.tsx` のファイル名で作成し、テスト対象の ts / tsx ファイルと同階層に格納します。  
都合上、テスト対象ファイルと同階層にテストファイルを格納できない場合は、`/src/__tests__` 配下にテストファイルを格納してください。
