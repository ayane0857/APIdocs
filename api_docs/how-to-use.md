---
title: "使い方ガイド"
description: "APIの使い方と導入手順を説明します"
---

# 使い方ガイド

このドキュメントでは、Payment API の基本的な使い方と導入手順について説明します。

## 概要

Payment API は、支払い履歴の管理と残高の追跡を行うための RESTful API です。この API を使用することで、支払いデータの作成、取得、更新、削除が可能です。

## 導入手順

### 1. ベース URL の確認

すべてのリクエストは以下のベース URL に対して行います。

```
https://api.ayane0857.net/payment/
```

### 2. 必要なヘッダーの設定

API リクエストには以下のヘッダーを含めてください。

```
Content-Type: application/json
Accept: application/json
```

保護された操作には、追加で認証ヘッダーが必要です。

```
X-API-TOKEN: your_api_token_here
```

## 基本的な使い方

### 残高の確認

現在の残高を確認するには、GET /balance エンドポイントを使用します。

**リクエスト例:**

```bash
curl -X GET https://api.ayane0857.net/payment/balance \
  -H "Accept: application/json"
```

**レスポンス例:**

```json
{
  "balance": 5000,
  "total_money": 15000,
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-08-27T14:59:19.353133Z"
}
```

### 支払い履歴の取得

支払い履歴の一覧を取得するには、GET /payment エンドポイントを使用します。

**リクエスト例:**

```bash
curl -X GET "https://api.ayane0857.net/payment/payment?limit=10&offset=0" \
  -H "Accept: application/json"
```

**パラメータ:**

- limit: 取得する件数(デフォルト: 10)
- offset: スキップする件数(ページング用)

**レスポンス例:**

```json
[
  {
    "ID": 1,
    "Money": 110,
    "Payment": "PayPay",
    "CreatedAt": "2025-07-22T02:59:28.53506Z",
    "UpdatedAt": "2025-07-22T02:59:28.53506Z"
  },
  {
    "ID": 2,
    "Money": 220,
    "Payment": "PayPay",
    "CreatedAt": "2025-07-22T05:41:13.160653Z",
    "UpdatedAt": "2025-07-22T05:41:13.160653Z"
  }
]
```

### 特定の支払い履歴の取得

特定の ID の支払い履歴を取得するには、GET /payment/:id エンドポイントを使用します。

**リクエスト例:**

```bash
curl -X GET https://api.ayane0857.net/payment/payment/1 \
  -H "Accept: application/json"
```

**レスポンス例:**

```json
{
  "ID": 1,
  "Money": 110,
  "Payment": "PayPay",
  "CreatedAt": "2025-07-22T02:59:28.53506Z",
  "UpdatedAt": "2025-07-22T02:59:28.53506Z"
}
```

### 新しい支払い履歴の追加

新しい支払い履歴を追加するには、POST /payment エンドポイントを使用します。**API トークンが必要です。**

**リクエスト例:**

```bash
curl -X POST "https://api.ayane0857.net/payment/payment?Money=500&Payment=クレジットカード" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "X-API-TOKEN: your_api_token_here"
```

**必須パラメータ:**

- Money: 支払額
- Payment: 支払い方法

**レスポンス例:**

```json
{
  "ID": 3,
  "Money": 500,
  "Payment": "クレジットカード",
  "CreatedAt": "2025-10-08T10:00:00Z",
  "UpdatedAt": "2025-10-08T10:00:00Z"
}
```

### 支払い履歴の更新

既存の支払い履歴を更新するには、PUT /payment/:id エンドポイントを使用します。**API トークンが必要です。**

**リクエスト例:**

```bash
curl -X PUT "https://api.ayane0857.net/payment/payment/1?Money=150&Payment=現金" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "X-API-TOKEN: your_api_token_here"
```

**任意パラメータ:**

- Money: 支払額
- Payment: 支払い方法

**レスポンス例:**

```json
{
  "ID": 1,
  "Money": 150,
  "Payment": "現金",
  "CreatedAt": "2025-07-22T02:59:28.53506Z",
  "UpdatedAt": "2025-10-08T10:15:00Z"
}
```

### 支払い履歴の削除

支払い履歴を削除するには、DELETE /payment/:id エンドポイントを使用します。**API トークンが必要です。**

**リクエスト例:**

```bash
curl -X DELETE https://api.ayane0857.net/payment/payment/1 \
  -H "X-API-TOKEN: your_api_token_here"
```

**レスポンス例:**

```json
{
  "ID": 1,
  "Money": 150,
  "Payment": "現金",
  "CreatedAt": "2025-07-22T02:59:28.53506Z",
  "UpdatedAt": "2025-10-08T10:15:00Z"
}
```

### 残高の更新

残高を更新するには、PUT /balance エンドポイントを使用します。**API トークンが必要です。**

**リクエスト例:**

```bash
curl -X PUT "https://api.ayane0857.net/payment/balance?Balance=10000" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -H "X-API-TOKEN: your_api_token_here"
```

**任意パラメータ:**

- Balance: 新しい残高

**レスポンス例:**

```json
{
  "balance": 10000,
  "total_money": 15000,
  "created_at": "2025-01-01T00:00:00Z",
  "updated_at": "2025-10-08T10:20:00Z"
}
```

## Python での使用例

Python の requests ライブラリを使用した実装例です。

```python
import requests

# ベースURL
BASE_URL = "https://api.ayane0857.net/payment"
API_TOKEN = "your_api_token_here"

# ヘッダー設定
headers = {
    "Content-Type": "application/json",
    "Accept": "application/json"
}

# 保護された操作用のヘッダー
protected_headers = {
    **headers,
    "X-API-TOKEN": API_TOKEN
}

# 支払い履歴の取得
def get_payments(limit=10, offset=0):
    url = f"{BASE_URL}/payment"
    params = {"limit": limit, "offset": offset}
    response = requests.get(url, headers=headers, params=params)
    return response.json()

# 新しい支払いの追加
def create_payment(money, payment_method):
    url = f"{BASE_URL}/payment"
    params = {"Money": money, "Payment": payment_method}
    response = requests.post(url, headers=protected_headers, params=params)
    return response.json()

# 残高の取得
def get_balance():
    url = f"{BASE_URL}/balance"
    response = requests.get(url, headers=headers)
    return response.json()

# 使用例
if __name__ == "__main__":
    # 支払い履歴を取得
    payments = get_payments(limit=5)
    print("支払い履歴:", payments)

    # 新しい支払いを追加
    new_payment = create_payment(300, "PayPay")
    print("追加された支払い:", new_payment)

    # 残高を確認
    balance = get_balance()
    print("現在の残高:", balance)
```

## JavaScript での使用例

fetch API を使用した実装例です。

```javascript
const BASE_URL = "https://api.ayane0857.net/payment";
const API_TOKEN = "your_api_token_here";

// 支払い履歴の取得
async function getPayments(limit = 10, offset = 0) {
  const url = `${BASE_URL}/payment?limit=${limit}&offset=${offset}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  return await response.json();
}

// 新しい支払いの追加
async function createPayment(money, paymentMethod) {
  const url = `${BASE_URL}/payment?Money=${money}&Payment=${paymentMethod}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-TOKEN": API_TOKEN,
    },
  });
  return await response.json();
}

// 残高の取得
async function getBalance() {
  const url = `${BASE_URL}/balance`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  return await response.json();
}

// 使用例
(async () => {
  try {
    // 支払い履歴を取得
    const payments = await getPayments(5);
    console.log("支払い履歴:", payments);

    // 新しい支払いを追加
    const newPayment = await createPayment(300, "PayPay");
    console.log("追加された支払い:", newPayment);

    // 残高を確認
    const balance = await getBalance();
    console.log("現在の残高:", balance);
  } catch (error) {
    console.error("エラーが発生しました:", error);
  }
})();
```

## エラーハンドリング

API リクエストが失敗した場合、適切な HTTP ステータスコードとエラーメッセージが返されます。以下は一般的なエラーコードです。

- **400 Bad Request**: リクエストパラメータが不正です
- **401 Unauthorized**: API トークンが無効または不足しています
- **404 Not Found**: 指定されたリソースが見つかりません
- **500 Internal Server Error**: サーバー内部エラーが発生しました

エラーハンドリングの実装例:

```python
try:
    response = requests.get(url, headers=headers)
    response.raise_for_status()  # HTTPエラーを例外として発生
    data = response.json()
except requests.exceptions.HTTPError as e:
    print(f"HTTPエラー: {e}")
except requests.exceptions.RequestException as e:
    print(f"リクエストエラー: {e}")
```

## ページング

大量のデータを取得する場合は、limit と offset パラメータを使用してページングを実装してください。

```python
def get_all_payments():
    all_payments = []
    limit = 10
    offset = 0

    while True:
        payments = get_payments(limit=limit, offset=offset)
        if not payments:
            break
        all_payments.extend(payments)
        offset += limit

    return all_payments
```

## サポート

API 仕様の詳細については、以下のリファレンスドキュメントを参照してください。

- [API リファレンス](/api-reference)
- [残高 API](/api-reference/balance)
- [支払い API](/api-reference/payment)

ご不明な点がございましたら、管理者までお問い合わせください。
