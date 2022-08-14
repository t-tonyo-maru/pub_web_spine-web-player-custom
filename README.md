# pub_web_spine-web-player-custom

## 概要

本アプリは [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をベースにした Web アプリです。  
Web ページ上で、Spine アニメーションのプレビュー。および、一枚の html への変換ができます。

Spine エクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）をアップロードすると、Web ページにてプレビューが表示されます。  
「Download」ボタンを押下すると、Spine エクスポートデータ 3 点を Data URL に変換した上で、Spine Web Player の css/js と取りまとめて、1 枚の html としてダウンロードできます。  
ダウンロードした html があれば、Spine 本体を持っていない人でも Web ブラウザさえあれば、アニメーションを確認することができます。  
また、Web サーバーにアップロードするだけで、Spine アニメーションを公開できます。追加の css/js は不要です。

## URL

### 最新版（spine web playder ver.4.2.5）

- [ver.4.2.5 | Spine Web Player Custom App](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/)

### 過去バージョン

- [ver.4.1.20](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.1.20/)
- [ver.4.0.28](https://t-tonyo-maru.github.io/pub_web_spine-web-player-custom/4.0.28/)

## 使い方

1. 「Upload Files」ボタンを押下します
2. ファイル選択ダイアログが表示されます。Spine のエクスポートデータ 3 点（.png, .atlas, .json もしくは .skel）を選択します。
   - **アップロードするファイルには、必ず拡張子をつけてください！拡張子のないファイルは読み込まれません！**
3. 正常にファイルを読み込めた場合、Spine アニメーションのプレビューが表示されます。
4. 正常にファイルを読み込めた場合、「Download」ボタンが活性化し、押下可能になります。
5. 「Download」ボタンを押下すると、html ファイル 1 点がダウンロードされます。  
   ダウンロードされた html をブラウザで表示すると、アップロードしたデータのプレビューが表示されます。

## 特記事項

- ファイルのアップロード、Data URL への変換、html ファイルダウンロードまで、すべてブラウザ上で処理を行っています。  
   **アップロードされた Spine エクスポートデータを、他サーバーへ送信等はしておりません。**
- 上記より、利用者の PC・ブラウザの設定・環境に依存します。本アプリがうまく動作しない場合は、本家の [Spine Web Player](http://ja.esotericsoftware.com/spine-player) をご利用ください。
