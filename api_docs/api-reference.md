# API リファレンス

このドキュメントは、サービスの主要なエンドポイント（残高と支払い履歴）についての参照です。より詳しい使い方や導入手順は [how-to-use](/how-to-use) を参照してください。

## ベース URL

すべてのリクエストは以下のベース URL を基準に行います。

```
https://api.ayane0857.net/payment/
```

## 認証

保護された操作（作成・更新・削除）では HTTP ヘッダ X-API-TOKEN に有効な API トークンを含める必要があります。

## 共通ヘッダ

- Content-Type: application/json (JSON を使う場合)
- Accept: application/json

## エンドポイント一覧

このセクションでは主要なエンドポイントをまとめます。各セクションの詳細な元ファイルは以下を参照してください。

- [api-reference/balance](api-reference/balance.md) — 残高に関する API
- [api-reference/payment](api-reference/payment.md) — 支払い履歴に関する API

---

## 残高（balance）API

残高の取得・編集に関するエンドポイント群です

### GET /balance

現在の残高情報を取得します。

### PUT /balance

残高を更新します。リクエストには X-API-TOKEN が必要です。

---

## 支払い（payment）API

支払い履歴の取得・追加・編集・削除に関するエンドポイント群です。

### GET /payment

支払い履歴の一覧を取得します。ページング用に limit と offset を指定できます（デフォルト limit=10）。

### GET /payment/:id

特定の支払いレコードを取得します。

### POST /payment

新しい支払い履歴を追加します。X-API-TOKEN が必要です。

### PUT /payment/:id

既存の支払い履歴を編集します。X-API-TOKEN が必要です。

### DELETE /payment/:id

支払い履歴を削除します。X-API-TOKEN が必要です。

---

## 参考

詳しい使い方:

- [api-reference/balance](api-reference/balance.md)
- [api-reference/payment](api-reference/payment.md)

もし、エンドポイントの追加・レスポンス変更などがあれば、このファイルと該当する個別ファイルの両方を更新してください。
