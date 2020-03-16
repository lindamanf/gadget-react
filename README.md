## 実行環境
* node - v12.16.1
* yarn - v1.22.4

### 環境作成（windows）
1. nodejs を インストール
https://nodejs.org/ja/
2. yarn をグローバルにインストール
```
$ npm install -g yarn
```
※yarn にパスが通るように設定する

## 初回デプロイ時
1. git コマンドで当リポジトリを clone する
```
$ git clone https://github.com/lindamanf/convini-react.git
```
2. パッケージのインストールを実行
※時間かかります
```
$ cd convini-react
$ yarn install
```

## ローカル開発
* ローカルサーバーで動作確認
下のコマンドを実行して、ブラウザで `http://localhost:3000` へアクセス
```
$ node server/webserver.js
```
* ウォッチモードでの開発
ローカルサーバーが `:3000` で動いている状態で下のコマンドを実行
```
$ yarn build:dev
```

## APIサーバーへバンドルファイルをコピー
下のコマンドでコピーを実行
```
$ ./build.sh
```
※ただし、 `convini` リポジトリと `convini-react` リポジトリのルートが同階層にあること
```
-|-convini
 |-convini-react
```
