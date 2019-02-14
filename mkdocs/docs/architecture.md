# 全体構成

![構成図](https://cacoo.com/diagrams/Bik1Om7JvTVGzpfj-5F49C.png)

今回は上記の図のような構成を構築します。

デプロイの流れとしては以下のようになります。

![パイプライン](images/pipeline.png)

- GitHubにコードがプッシュされるとCodePipelineでの処理が開始されます。
- CodeBuildではテスト、Dockerイメージの作成および作成したイメージのECRへのプッシュを行います。
- CodeBuildでの処理が成功したらECSに新しいバージョンのイメージがデプロイされます。