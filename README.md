# pub_web_spine-web-player-custom

## 概要

本アプリは [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をベースにした Web アプリです。  
Web ページ上で Spine アニメーションのプレビュー。および、一枚の html への変換ができます。

Spine エクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）をアップロードすると、Web ページにてプレビューが表示されます。  
「Download as HTML」ボタンを押下すると、Spine エクスポートデータ 3 点を Data URL に変換した上で、Spine Web Player の css/js と取りまとめて、1 枚の html としてダウンロードできます。  
ダウンロードした html があれば、Spine 本体を持っていない人でも Web ブラウザさえあれば、Spine アニメーションを再生・確認することができます。  
また、html を Web サーバーにアップロードすれば、すぐにアニメーションを公開できます。追加の css/js は不要です。

## URL

### 最新版

- [Spine Web Player Custom App | Based on @esotericsoftware/spine-player ver.4.2.5](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/)

### 過去バージョン

- [spine-player ver.4.1.20](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.1.20/)
- [spine-player ver.4.0.28](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.0.28/)

## 使い方

1. 「Upload Files」ボタンを押下します
2. ファイル選択ダイアログが表示されます。Spine のエクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）を選択します。
   - **アップロードするファイルには、必ず拡張子をつけてください！拡張子のないファイルは読み込まれません！**
3. 正常にファイルを読み込めた場合、Spine アニメーションのプレビューが表示されます。また、「Download as HTML」ボタンが活性化し、押下可能になります。
4. 「Download as HTML」ボタンを押下すると、html ファイル 1 点がダウンロードされます。  
   ダウンロードされた html をブラウザで表示すると、アップロードしたデータのプレビューが表示されます。

## 特記事項

- ファイルのアップロード、Data URL への変換、html ファイルダウンロードまで、すべてブラウザ上で処理を行っています。  
   **アップロードされた Spine エクスポートデータを、他サーバーへ送信等はしておりませんので、ご安心ください。**
- 上記より、利用者の PC・ブラウザの設定・環境に依存します。本アプリがうまく動作しない場合は、本家の [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をご利用ください。

---

## Build 方法（個人向け）

1. 本番環境変数ファイル（.env.production）を修正する
   - `REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION`: @esotericsoftware/spine-player のバージョンを入れる
   - `REACT_APP_PUBLIC_BUILD_TYPE`: 最新版として build する場合は`LATEST`。古いバージョンとして build するなら`OLDER`とする。
   - `REACT_APP_PUBLIC_BUILD_TYPE`: 最新版として build する場合は`"/pub_web_spine-web-player-custom/"`。古いバージョンとして build するなら`"/pub_web_spine-web-player-custom/{oldversion}/"`とする。
     - {oldversion}には`REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION`と同じ値を入力する
2. （※もし古いバージョンとして build したものがあれば、）`src/store/index.tsx` の initialState.oldVersions に追記する
3. `@esotericsoftware/spine-player`のバージョンを任意のものに固定した上で、インストールする
