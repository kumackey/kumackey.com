import { useState } from 'react'

const styles = `
body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    text-align: center;
}

header {
    background-color: #F3F3F3;
    padding: 10px 0;
    margin-bottom: 20px;
}

header img {
    width: 100px;
}

img.sns {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

div.sns {
    margin-bottom: 10px;
}

.article {
    max-width: 800px;
    text-align: left;
    background-color: #F3F3F3;
    border-radius: 10px;
    padding: 20px 15px;
    margin: auto auto 20px;
}

h2 {
    margin-bottom: 20px;
    text-align: center;
}

h3 {
    margin-top: 40px;
}

a {
    color: #007bff;
}

a:hover {
    color: #0056b3;
}
`

function App() {
  const [number, setNumber] = useState('')
  const [result, setResult] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await fetch(`https://api.kiriban.kumackey.com/check/${number}`)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      if (data.result) {
        setResult(`${data.number}はキリ番です！次のキリ番は${data.next}です！`)
      } else {
        setResult(`${data.number}はキリ番ではありません...`)
      }
    } catch {
      setResult('通信に失敗しました')
    }
  }

  return (
    <>
      <style>{styles}</style>
      <header>
        <h1>kumackey.com</h1>
        <img src="/kumackey.png" alt="kumackey" />
      </header>
      <main>
        <section>
          <div className="sns">
            <a href="https://github.com/kumackey"><img className="sns" src="/github-mark.png" alt="Github" /></a>
            <a href="https://twitter.com/kumackey_"><img className="sns" src="/x.png" alt="X" /></a>
            <a href="https://bsky.app/profile/kumackey.bsky.social"><img className="sns" src="/bluesky.png" alt="Bluesky" /></a>
            <a href="https://zenn.dev/kumackey"><img className="sns" src="/zenn.jpeg" alt="Zenn" /></a>
            <a href="https://qiita.com/kumackey"><img className="sns" src="/qiita.png" alt="Qiita" /></a>
            <a href="https://note.com/kumackey"><img className="sns" src="/note.png" alt="Note" /></a>
            <a href="https://www.docswell.com/user/kumackey"><img className="sns" src="/docswell.png" alt="Docswell" /></a>
            <a href="/family">👨‍👩‍👧‍👦</a>
          </div>
        </section>
        <section>
          <article className="article">
            <h2>Pickups</h2>
            <ul>
              <li><a href="https://www.docswell.com/s/kumackey/5MXYX2-2025-02-02-114330">静的スタンディングデスク</a></li>
              <li><a href="https://blog.studysapuri.jp/entry/2025/03/04/090000">再エンコード無しで、HLS動画への字幕の追加を実現する</a></li>
              <li><a href="https://qiita.com/kumackey/items/bf252ca24d343e71d6a2">【個人開発】キリ番を祝ってくれるGithub Actionsをリリースしました🎉【Go】</a></li>
              <li><a href="https://zenn.dev/kumackey/articles/d20221029-a38eb4bebc3272">デプロイ頻度を向上させることへの誤解</a></li>
            </ul>
          </article>
        </section>
        <section>
          <article className="article">
            <h2>Works</h2>
            <h3><a href="https://github.com/kumackey/kiriban">Kiriban</a></h3>
            <p>Issue番号のキリ番を判定し祝福してくれる、Go製のGithub Actionsです。</p>
            <form onSubmit={handleSubmit}>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
                max={999999}
                min={-999999}
              />
              <button type="submit">キリ番チェック</button>
              <span className="result">{result}</span>
            </form>
            <h3><a href="https://patchwork.kumackey.com">Patchwork Calculator</a></h3>
            <p>ボードゲームのパッチワークにおける、パッチの得点効率を計算するWEBツールです。<br />
              TypeScript/Reactで作成しています。</p>
            <h3><a href="https://github.com/kumackey/profile-updater">Profile Updater</a></h3>
            <p>ZennやQiitaの記事などを取得し、GitHubのプロフィールを更新する、Go製のGithub Actionsです。</p>
            <h3><a href="https://kudanshita-slot.kumackey.com/">Kudanshita Slot</a></h3>
            <p>九段下の完成を目指すスロットゲームです。</p>
          </article>
        </section>
        <section>
          <article className="article">
            <h2>Career</h2>
            <h3><img src="/recruit.jpeg" alt="Recruit" style={{ width: '50px' }} />株式会社リクルート (2023-06-15〜現在)</h3>
            <p><a href="https://studysapuri.jp/">スタディサプリ</a>にてバックエンド開発。</p>
            <h4>プロジェクト</h4>
            <ul>
              <li>動画配信基盤の設計・開発
                <ul>
                  <li><a href="https://blog.studysapuri.jp/entry/2025/03/04/090000">字幕配信機能の開発</a></li>
                  <li>動画入稿基盤の開発</li>
                  <li>コンテンツのセキュリティ向上</li>
                  <li>CDN 移管</li>
                </ul>
              </li>
              <li>Feature Toggles マイクロサービスの開発</li>
              <li>モノリスからマイクロサービスへの移行</li>
              <li>LLM ワークフローの設計開発</li>
            </ul>
            <h4>技術</h4>
            <ul>
              <li>言語: Go, TypeScript, Ruby on Rails</li>
              <li>CDN: Fastly, Cloudflare, CloudFront, Edge Computing</li>
              <li>動画配信: AWS Elemental MediaConvert, HLS</li>
              <li>ストレージ: PostgreSQL, MongoDB, Aurora Serverless, S3</li>
              <li>その他: Kubernetes, Lambda, GitHub Actions, Terraform</li>
            </ul>

            <h3><img src="/sumally.svg" alt="Summary" style={{ width: '50px' }} />
              株式会社サマリー (2020-06-01〜2023-06-14)</h3>
            <p><a href="https://pocket.sumally.com/">サマリーポケット</a>にてバックエンド開発。</p>
            <h4>プロジェクト</h4>
            <ul>
              <li>レガシーアプリケーションにおけるCIの構築</li>
              <li>倉庫管理システムのマイクロサービスへの移行</li>
              <li>配送日時・集荷日時のスケジュール機能の開発</li>
              <li>モバイル通知システムの刷新</li>
            </ul>
            <h4>技術</h4>
            <ul>
              <li>言語: PHP, Go, Shell Script</li>
              <li>データベース: MongoDB, PostgreSQL</li>
              <li>AWS: EC2, ECS, SNS, SQS</li>
              <li>CI/CD・ジョブ: GitHub Actions, Jenkins, Airflow</li>
              <li>その他: FCM, Terraform</li>
            </ul>
            <h3>新電元工業株式会社 (2018-04-01〜2020-02-20)</h3>
            <p>ディスクリート半導体であるMOSFETの設計開発。<br />
              ソフトウェア開発者としての経歴ではないため、詳細は省略。</p>
          </article>
        </section>
        <section>
          <article className="article">
            <h2>Learned</h2>
            <h3>📕Books</h3>
            <ul>
              <li>コンピュータアーキテクチャ・OS
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/4296070096">コンピュータの構成と設計 第6版</a></li>
                  <li><a href="https://www.amazon.co.jp/dp/B0BG8J5QJ1">Linuxのしくみ 増補改訂版</a></li>
                  <li><a href="https://www.amazon.co.jp/dp/4627810121">オペレーティングシステム 第2版</a></li>
                </ul>
              </li>
              <li>アルゴリズム
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/4839952957">プログラミングコンテスト攻略のためのアルゴリズムとデータ構造</a></li>
                </ul>
              </li>
              <li>データベース・分散システム
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/4781913903">リレーショナルデータベース入門 第3版</a></li>
                  <li><a href="https://www.oreilly.co.jp/books/9784873118703">データ指向アプリケーションデザイン</a></li>
                </ul>
              </li>
              <li>ネットワーク
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/B0827QNDNT">マスタリングTCP/IP 入門編 第6版</a></li>
                  <li><a href="https://www.oreilly.co.jp/books/9784814400669">Real World HTTP 第3版</a></li>
                  <li><a href="https://www.amazon.co.jp/dp/479739448X">DNSがよくわかる教科書</a></li>
                  <li><a href="https://www.amazon.co.jp/dp/4297119250">Web配信の技術―HTTPキャッシュ・リバースプロキシ・CDNを活用する</a></li>
                </ul>
              </li>
              <li>セキュリティ
                <ul>
                  <li><a href="https://www.amazon.co.jp/dp/B09G2T3X1W">暗号と認証のしくみと理論がこれ1冊でしっかりわかる教科書</a></li>
                </ul>
              </li>
            </ul>
            <h3>🪪Certifications</h3>
            <ul>
              <li><a href="https://aws.amazon.com/certification/certified-solutions-architect-associate">AWS Certified Solutions Architect - Associate</a></li>
              <li><a href="https://www.ipa.go.jp/shiken/kubun/ap.html">応用情報技術者試験</a></li>
            </ul>
          </article>
        </section>
      </main>
    </>
  )
}

export default App
