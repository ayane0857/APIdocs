---
title: "API-Reference / Balance"
description: "BalanceのAPIリファレンスです"
---

# balance とは

残高記録についての API です。

## GET /balance

現在の残高状況を表示します

### レスポンス

```json
{
  "balance": 0,
  "total_money": 0,
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "2025-08-27T14:59:19.353133Z"
}
```

## PUT /balance

現在の残高状況を更新します。

リクエストには X-API-TOKEN が必要です。

### クエリパラメータ

| パラメータ名 | 型     | 必須 | 説明 |
| :----------- | :----- | :--- | :--- |
| Balance      | string | 任意 | 残高 |

### レスポンス

```json
{
  "balance": 0,
  "total_money": 0,
  "created_at": "0001-01-01T00:00:00Z",
  "updated_at": "2025-08-27T14:59:19.353133Z"
}
```
