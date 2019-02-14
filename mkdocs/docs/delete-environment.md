# 補足. 環境の削除

ハンズオンで作成した環境を削除したい場合は以下の手順を参考にしてください。
リソース間の依存関係がある関係で削除に失敗することがあるため、
CloudFormation スタックおよびクローンした GitHub のリポジトリは最後に削除を行ってください。

## AWS

### CodePipeline のパイプラインの削除

![CodePipeline削除1](images/codepipeline-delete-1.png)
パイプラインの画面から編集ボタンをクリックします。


![CodePipeline削除2](images/codepipeline-delete-2.png)

表示された編集画面で削除ボタンをクリックし、表示された確認ダイアログにパイプライン名`hands-on-pipeline`を入力して削除します。

### CodeBuild のプロジェクトの削除

![CodeBuild削除](images/codebuild-delete.png)

CodeBuild　の画面から、プロジェクト`hands-on-project`を選択した状態で、アクションのドロップダウンリストから削除をクリックします。

### CodePipeline のアーティファクト保存用 S3 バケット削除

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/42dfdf601622493f20cbdffbf8f2c374-640x280.png" alt="" width="640" height="280" class="alignnone size-medium wp-image-354250" />

`codepipeline-ap-northeast-1-****`バケットの中身を確認します。

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/1a31704e05462dde8750e59651f7888e-640x280.png" alt="" width="640" height="280" class="alignnone size-medium wp-image-354251" />

もし、`hands-on-xxx` のフォルダだけしかなければ、バケット自体を削除します。

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/c72ecc6de66e24061ef1a12a12552659-640x382.png" alt="" width="640" height="382" class="alignnone size-medium wp-image-354252" />

他のフォルダがあれば、フォルダ以下を削除します。

### ECR リポジトリ内のイメージをすべて削除

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/899ad3960898d06dacd6be39a3ca0f85-640x247.png" alt="" width="640" height="247" class="alignnone size-medium wp-image-354254" />

ECSの画面の左側にある、リポジトリのリンクをクリックし、`hands-***`という名前のリポジトリの画面の移動します。

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/fc89af39613b29fc3112cbb093918216-640x197.png" alt="" width="640" height="197" class="alignnone size-medium wp-image-354255" />

そして、すべてのイメージを選択し、削除を行います。リポジトリ自体は削除しなくても大丈夫です。

### CloudFormation スタックの削除

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/496450dcfb095b95105cd9264d5d67af-640x354.png" alt="" width="640" height="354" class="alignnone size-medium wp-image-354256" />

CloudFormationのコンソールから、`hands-on-environment`という名前のスタックを選択し、削除します。

### hands-on-task-definition の登録を解除

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/15a28e586fc12d481269df69037a1e76-640x388.png" alt="" width="640" height="388" class="alignnone size-medium wp-image-354257" />

ECSの画面の左側にある、タスク定義のリンクをクリックし、`hands-on-environment-****`という名前のタスク定義の画面に移動します。

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/6eece21cbe5c833bf500aab26afe0019-640x371.png" alt="" width="640" height="371" class="alignnone size-medium wp-image-354259" />

すべてのタスク定義を選択し、登録解除します。

## GitHub

### クローンしたリポジトリの削除

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/0539d520bebeb1e1782c3f33538578bb-640x214.png" alt="" width="640" height="214" class="alignnone size-medium wp-image-354260" />

フォーク先リポジトリのSettingを開きます。

<img src="https://cdn-ssl-devio-img.classmethod.jp/wp-content/uploads/2018/08/3b7190c3bdf6c2d9e5afa64505c426d9-640x341.png" alt="" width="640" height="341" class="alignnone size-medium wp-image-354261" />

一番下のDelete this Repositoryというボタンをクリック、確認ダイアログにリポジトリ名を入力して削除します。
