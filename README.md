# pub_web_spine-web-player-custom

## 概要（Summary）

本アプリは [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をベースにした Web アプリです。  
Web ページ上で Spine アニメーションのプレビュー。および、一枚の html へ変換してダウンロードできます。

Spine エクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）をアップロードすると、Web ページにてプレビューが表示されます。  
「Download as HTML」ボタンを押下すると、Spine エクスポートデータ 3 点を データ URI に変換した上で、Spine Web Player の css/js と取りまとめて、1 枚の html としてダウンロードできます。  
Spine 本体を持っていない人でも、ダウンロードした html があれば、Web ブラウザで Spine アニメーションを再生・確認できます。  
また、html を Web サーバーにアップロードすれば簡単にアニメーションを公開できます。追加の css/js は不要です。

---

This application is a web application based on [Spine Web Player](http://ja.esotericsoftware.com/spine-player).  
This application previews Spine animation on the web page. and convert it to a single html file for download.

Upload 3 Spine export data (.png, .atlas, .json or .skel) and you will see a preview on the web page.  
Click the "Download as HTML" button to download the data as a single html file.  
The html file contains a string of three Spine export data points converted to a Data URI and the css/js of the Spine Web Player.

Even if you do not have the Spine editor itself, you can play and check Spine animations with a Web browser as long as you have the downloaded html.  
You can also easily publish your animation by uploading the html to your web server.  
No additional css/js is required.

## URL

### 最新版（Latest）

- [Spine Web Player Custom App | Based on @esotericsoftware/spine-player ver.4.2.5](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/)

### 過去バージョン（Old version）

- [Based on spine-player ver.4.1.20](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.1.20/)
- [Based on spine-player ver.4.0.28](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.0.28/)

## 使い方（How to use）

1. 「Upload Files」ボタンを押下します。
2. ファイル選択ダイアログが表示されます。Spine のエクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）を選択します。
   - **アップロードするファイルには、必ず拡張子をつけてください。拡張子のないファイルは読み込まれません。**
   - **テクスチャ画像（.png）は 1 枚でなければ正しく動作しません。パック設定をうまく利用して 1 枚絵にしてください。**
3. 正常にファイルを読み込めた場合、Spine アニメーションのプレビューが表示されます。また、「Download as HTML」ボタンが活性化し、押下可能になります。
4. 「Download as HTML」ボタンを押下すると、html ファイル 1 点がダウンロードされます。  
   ダウンロードされた html をブラウザで表示すると、アップロードした Spine データのプレビューが表示されます。

---

1. Click the "Upload Files" button.
2. A file selection dialog will appear. Select 3 Spine export data (.png, .atlas, .json or .skel).
   - **Files without extensions will not be loaded. Uploaded files must have a file extension.**
   - **Texture images (.png) must be a single image to work properly. Please make use of the pack settings to create a single image.**
3. If the file is successfully loaded, a preview of the Spine animation will be displayed. Also, the "Download as HTML" button will be activated and ready to be pressed.
4. Clicking the "Download as HTML" button downloads a single html file.  
   Viewing the downloaded html in a browser displays a preview of the uploaded Spine data.

## 特記事項（Special note）

- ファイルのアップロード、データ URI への変換、html ファイルダウンロード等の処理は、すべて利用者のブラウザ上でのみ実行されます。  
   **アップロードされた Spine エクスポートデータを、他サーバーへ送信したりなどはありませんので、ご安心ください。**
- 上記より、利用者の PC・ブラウザの設定・環境に依存します。本アプリがうまく動作しない場合は、本家の [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をご利用ください。
- Spine Web Player の乗算済みアルファ（`premultipliedAlpha`）オプションは、`true`を指定しています。  
   Web ページ上のプレビュー、および、ダウンロードされる HTML のどちらでも`true`です。

---

- File upload, conversion to Data URI, html file download, and other processes are all completed in the browser.  
   **Uploaded Spine export data is not sent to other servers. Please rest assured.**
- From the above, it depends on the user's PC and browser settings and environment.  
   If this application does not work well, please use the [original Spine Web Player](http://ja.esotericsoftware.com/spine-player).
- Spine Web Player's `premultipliedAlpha` option is set to `true`.  
   It is `true` both in the preview on the web page and in the HTML that is downloaded.

## 開発者の個人的メモ（Developer's personal note）

以降は、開発者の個人的メモです。

---

The following are personal notes from the developer.

### Build 方法（How to build）

1. 本番環境変数ファイル（.env.production）を修正する
   - `REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION`: @esotericsoftware/spine-player のバージョンを入れる
   - `REACT_APP_PUBLIC_BUILD_TYPE`: 最新版として build する場合は`LATEST`。古いバージョンとして build するなら`OLDER`とする。
   - `REACT_APP_PUBLIC_BUILD_TYPE`: 最新版として build する場合は`"/pub_web_spine-web-player-custom/"`。古いバージョンとして build するなら`"/pub_web_spine-web-player-custom/{oldversion}/"`とする。
     - {oldversion}には`REACT_APP_PUBLIC_SPINE_WEB_PLAYER_VERSION`と同じ値を入力する
2. （※もし古いバージョンとして build したものがあれば、）`src/store/index.tsx` の initialState.oldVersions に追記する
3. `@esotericsoftware/spine-player`のバージョンを任意のものに固定した上で、インストールする
4. `yarn build`を実行する
5. /build ディレクトリが生成される
6. /docs ディレクトリに、build ディレクトリを移動させる
   - 最新版として build した場合は、/docs 直下に格納する
   - 古いバージョンとして build した場合は、/docs/{oldVersion}/配下に格納する
7. /docs から不要なファイルを削除する
   - **html ダウンロード機能で取得する css/js は、`docs/assets/spine-web-player-runtime/` 配下に格納されています。**  
      （URL で表すとhttps://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/assets/spine-web-player-runtime/{version}/）  
      **`docs/assets/spine-web-player-runtime` 配下の css/js は削除しないこと！**  
      その代わりに、docs/配下の過去バージョンディレクトリの css/js は削除しても問題ない
