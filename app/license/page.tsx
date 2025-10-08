import "@/app/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Ayane(UTAU) - License & Credit",
  description: "彩音の利用規約とクレジット",
};

export default function Page() {
  return (
    <div className="min-h-screen w-full p-4 mx-auto flex gap-8 mb-8">
      <h1
        className="text-3xl md:text-5xl font-light"
        style={{ writingMode: "vertical-rl" }}
      >
        LICENSE
      </h1>
      <div className="flex-1 flex flex-col gap-4">
        <section className="gap-2">
          <h2 className="text-2xl font-medium">API利用規約</h2>
          <p className="text-sm text-gray-600 mb-4">制定日：2025年10月8日</p>

          <ol className="list-decimal pl-6 space-y-3 text-gray-800">
            <li>
              <strong>第1条（定義）</strong>
              <p className="mt-1">
                <ul className="list-disc pl-6 mt-2 text-gray-700">
                  <li>
                    「本API」とは、彩音が提供するAPIおよび関連ドキュメントを指します。
                  </li>
                  <li>
                    「利用者」とは、本規約に同意し、本APIを利用する法人または個人を指します。
                  </li>
                  <li>
                    「利用者アプリケーション」とは、利用者が本APIを用いて開発・提供するアプリケーションやサービスを指します。
                  </li>
                  <li>
                    「利用者データ」とは、利用者が本APIを通じて送信する情報を指します。
                  </li>
                </ul>
              </p>
            </li>

            <li>
              <strong>第2条（規約の同意）</strong>
              <p className="mt-1">
                利用者は、本APIを利用する前に本規約に同意する必要があります。利用開始をもって同意したものとみなします。
              </p>
            </li>

            <li>
              <strong>第3条（利用許諾）</strong>
              <p className="mt-1">
                彩音は、利用者に対し、本APIを非独占的、譲渡不能、再許諾不能な範囲で利用者アプリケーションの開発・提供目的に限り利用を許諾します。
              </p>
            </li>

            <li>
              <strong>第4条（禁止事項）</strong>
              <p className="mt-1">利用者は、以下の行為を行ってはなりません：</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>法令や公序良俗に反する行為</li>
                <li>
                  彩音や第三者の権利（知的財産権、プライバシー等）を侵害する行為
                </li>
                <li>本APIの不正利用、過度な負荷、制限回避行為</li>
                <li>彩音の承諾なく本APIを第三者に再販・再配布する行為</li>
                <li>競合サービスの開発への利用</li>
                <li>その他、彩音が不適切と判断する行為</li>
              </ul>
            </li>

            <li>
              <strong>第5条（知的財産権）</strong>
              <p className="mt-1">
                本APIの知的財産権は彩音に帰属します。利用者アプリケーションおよび利用者データの知的財産権は利用者に帰属しますが、彩音は本APIの提供・改善に必要な範囲で利用者データを使用できます。
              </p>
            </li>

            <li>
              <strong>第6条（非保証・免責）</strong>
              <p className="mt-1">
                彩音は、本APIの適合性、正確性、連続性等を保証しません。本APIの利用により生じた損害について、彩音は故意または重過失を除き責任を負いません。
              </p>
            </li>

            <li>
              <strong>第7条（APIの変更・中断・終了）</strong>
              <p className="mt-1">
                彩音は、事前通知なく本APIの仕様を変更または中断できます。本APIの終了は、30日前の通知により行います。本条による措置で生じた損害について、彩音は責任を負いません。
              </p>
            </li>

            <li>
              <strong>第8条（規約の変更）</strong>
              <p className="mt-1">
                彩音は、必要に応じて本規約を変更でき、変更内容はウェブサイトで周知します。変更後の規約は、施行後に利用者が本APIを利用した場合に適用されます。
              </p>
            </li>

            <li>
              <strong>第9条（準拠法・管轄）</strong>
              <p className="mt-1">
                本規約は日本法に準拠し、福岡地方裁判所を専属的合意管轄裁判所とします。
              </p>
            </li>

            <li>
              <strong>第10条（分離可能性）</strong>
              <p className="mt-1">
                本規約の一部が無効または執行不能でも、残りの規定は有効です。
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
