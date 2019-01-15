## アラートを発報させてデプロイ処理をしてみる

![](images/pipeline_mackerel_fail.png)

Mackerel で CPU 使用率のアラートを先に設定してあるので、CPU 使用率を上げてアラートを発報させましょう。

```sh
yes > /dev/null
```

Mackerel の画面でアラートが発報されたのを確認したら、「変更のリリース」ボタンをクリックし、
デプロイを開始させてみます。

![](https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/11/8918303f03e89161dcb56542e6dd55f7.png)

すると、期待通りに Mackerel のアラートチェック処理のステージで停止しました。

CPU 使用率を使用するために実行したコマンドを`Ctrl + C`で停止し、アラートが解決されたのを確認したら、再度「変更のリリース」ボタンからデプロイをしてみます。

![](https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/11/87584bfc8789c01ef6731f0dd71fafe3.png)

今度はアラートが発報されていない状態のため、デプロイまで処理が実行されます

本番環境で障害がアラートの形で検知できればデプロイを自動で停止することができるようになりました。
