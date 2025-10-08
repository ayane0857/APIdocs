import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const codeLines = [
    "import requests",
    "",
    'url = "https://api.example.com/data"',
    "response = requests.get(url, params=params)",
    "print(data = response.json())",
  ];

  const responseData = [
    {
      ID: 1,
      Money: 110,
      Payment: "PayPay",
      CreatedAt: "2025-07-22T02:59:28.53506Z",
      UpdatedAt: "2025-07-22T02:59:28.53506Z",
    },
    {
      ID: 2,
      Money: 220,
      Payment: "PayPay",
      CreatedAt: "2025-07-22T05:41:13.160653Z",
      UpdatedAt: "2025-07-22T05:41:13.160653Z",
    },
  ];
  return (
    <div className="w-full max-w-6xl p-6 mx-auto">
      <div className="flex flex-col py-12 gap-2">
        <h2 className="text-2xl">API Document</h2>
        <h1 className="text-4xl xl:text-6xl xl:font-extrabold">
          Welcome to the API Reference page
        </h1>
        <p className="text-base leading-relaxed mt-4">
          なんのために作られたかよくわかんないAPIのドキュメントへようこそ。使ってくれる人大募集だったりするかもしれないし、しないかもしれないです。たまに有用なやつも作ってるかも？
        </p>
        <Link href={"/api-reference"} className="mt-4 inline-block">
          <Button>Get started</Button>
        </Link>
      </div>
      <section>
        <div className="w-2/3 max-w-3xl">
          {/* Terminal Window */}
          <div className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
            {/* Terminal Header */}
            <div className="bg-gray-750 px-4 py-3 flex items-center gap-2 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-2">main.py</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm">
              {/* Code Section */}
              <div className="space-y-1 mb-6">
                {codeLines.map((line, index) => (
                  <div key={index} className="flex">
                    {line && (
                      <>
                        <span className="text-gray-500 select-none mr-4 text-right w-4">
                          {index + 1}
                        </span>
                        <code className="text-gray-300">{line}</code>
                      </>
                    )}
                    {!line && <div className="h-5"></div>}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-4"></div>

              {/* Response Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-green-400">❯</span>
                <span className="text-gray-400">Response:</span>
              </div>

              {/* Response Content */}
              <div className="pl-4">
                <pre className="text-gray-300 overflow-x-auto">
                  <code>{JSON.stringify(responseData, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
