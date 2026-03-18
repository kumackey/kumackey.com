import "./App.css";
import { KiribanForm } from "./components/KiribanForm";

function App() {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
			<header className="bg-gradient-to-b from-gray-100 to-gray-50 py-8 mb-8 text-center">
				<img
					src="/kumackey.png"
					alt="kumackey"
					className="w-24 mx-auto mb-3 rounded-full ring-4 ring-white shadow-lg"
					width={96}
					height={96}
				/>
				<h1 className="text-2xl font-bold tracking-tight">kumackey.com</h1>
			</header>

			<main className="px-4">
				<nav className="mb-8">
					<div className="flex justify-center gap-3 flex-wrap">
						<a href="https://github.com/kumackey">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/github-mark.png"
								alt="Github"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="https://twitter.com/kumackey_">
							<img className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110" src="/x.png" alt="X" width={48} height={48} loading="lazy" />
						</a>
						<a href="https://bsky.app/profile/kumackey.bsky.social">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/bluesky.png"
								alt="Bluesky"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="https://zenn.dev/kumackey">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/zenn.jpeg"
								alt="Zenn"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="https://qiita.com/kumackey">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/qiita.png"
								alt="Qiita"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="https://note.com/kumackey">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/note.png"
								alt="Note"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="https://www.docswell.com/user/kumackey">
							<img
								className="w-12 h-12 object-contain transition-transform duration-200 hover:scale-110"
								src="/docswell.png"
								alt="Docswell"
								width={48}
								height={48}
								loading="lazy"
							/>
						</a>
						<a href="/family" className="text-2xl transition-transform duration-200 hover:scale-110 inline-block">
							👨‍👩‍👧‍👦
						</a>
					</div>
				</nav>

				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
						<h2 className="text-xl font-bold mb-6 text-center tracking-wide">Pickups</h2>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<a
									href="https://www.docswell.com/s/kumackey/5MXYX2-2025-02-02-114330"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									静的スタンディングデスク
								</a>
							</li>
							<li>
								<a
									href="https://blog.studysapuri.jp/entry/2025/03/04/090000"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									再エンコード無しで、HLS動画への字幕の追加を実現する
								</a>
							</li>
							<li>
								<a
									href="https://blog.studysapuri.jp/entry/2026/01/05/090000"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									Argo Workflows で構築する、生成 AI 字幕生成ワークフロー
								</a>
							</li>
							<li>
								<a
									href="https://qiita.com/kumackey/items/bf252ca24d343e71d6a2"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									【個人開発】キリ番を祝ってくれるGithub
									Actionsをリリースしました🎉【Go】
								</a>
							</li>
							<li>
								<a
									href="https://zenn.dev/kumackey/articles/d20221029-a38eb4bebc3272"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									デプロイ頻度を向上させることへの誤解
								</a>
							</li>
						</ul>
					</article>
				</section>

				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
						<h2 className="text-xl font-bold mb-6 text-center tracking-wide">Works</h2>

						<h3 className="text-lg font-semibold mt-8">
							<a
								href="https://github.com/kumackey/kiriban"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								Kiriban
							</a>
						</h3>
						<p className="mb-2">
							Issue番号のキリ番を判定し祝福してくれる、Go製のGithub
							Actionsです。
						</p>
						<KiribanForm />

						<h3 className="text-lg font-semibold mt-8">
							<a
								href="https://patchwork.kumackey.com"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								Patchwork Calculator
							</a>
						</h3>
						<p>
							ボードゲームのパッチワークにおける、パッチの得点効率を計算するWEBツールです。
						</p>

						<h3 className="text-lg font-semibold mt-8">
							<a
								href="https://github.com/kumackey/profile-updater"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								Profile Updater
							</a>
						</h3>
						<p>
							ZennやQiitaの記事などを取得し、GitHubのプロフィールを更新する、Go製のGithub
							Actionsです。
						</p>

						<h3 className="text-lg font-semibold mt-8">
							<a
								href="/kudanshita-slot"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								Kudanshita Slot
							</a>
						</h3>
						<p>九段下の完成を目指すスロットゲームです。</p>
					</article>
				</section>

				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
						<h2 className="text-xl font-bold mb-6 text-center tracking-wide">Career</h2>

						<h3 className="text-lg font-semibold mt-8 flex items-center gap-2">
							<img src="/recruit.jpeg" alt="Recruit" className="w-12" width={48} height={48} loading="lazy" />
							株式会社リクルート (<time dateTime="2023-06-15">2023-06-15</time>〜現在)
						</h3>
						<p>
							<a
								href="https://studysapuri.jp/"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								スタディサプリ
							</a>
							にてバックエンド開発。
						</p>
						<h4 className="font-semibold mt-4">プロジェクト</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								動画配信基盤の設計・開発
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://blog.studysapuri.jp/entry/2025/03/04/090000"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											字幕配信機能の開発
										</a>
									</li>
									<li>
										<a
											href="https://blog.studysapuri.jp/entry/2026/01/05/090000"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											字幕生成ワークフローの開発
										</a>
									</li>
									<li>動画入稿基盤の開発</li>
									<li>コンテンツのセキュリティ向上</li>
									<li>コスト削減のための CDN 移管</li>
								</ul>
							</li>
							<li>Feature Toggles マイクロサービスの開発</li>
							<li>モノリスからマイクロサービスへの移行</li>
						</ul>
						<h4 className="font-semibold mt-4">技術</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>言語: Go, TypeScript, Ruby on Rails, Rust</li>
							<li>CDN: Fastly, Cloudflare, CloudFront, Edge Computing</li>
							<li>動画配信: AWS Elemental MediaConvert, HLS, WebVTT, H.264</li>
							<li>ストレージ: PostgreSQL, MongoDB, Aurora Serverless, S3</li>
							<li>ワークフロー: Argo Workflows, Github Actions</li>
							<li>その他: Kubernetes, Lambda, Terraform</li>
						</ul>

						<h3 className="text-lg font-semibold mt-8 flex items-center gap-2">
							<img src="/sumally.svg" alt="Summary" className="w-12" width={48} height={48} loading="lazy" />
							株式会社サマリー (<time dateTime="2020-06-01">2020-06-01</time>〜<time dateTime="2023-06-14">2023-06-14</time>)
						</h3>
						<p>
							<a
								href="https://pocket.sumally.com/"
								className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
							>
								サマリーポケット
							</a>
							にてバックエンド開発。
						</p>
						<h4 className="font-semibold mt-4">プロジェクト</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>レガシーアプリケーションにおけるCIの構築</li>
							<li>倉庫管理システムのマイクロサービスへの移行</li>
							<li>配送日時・集荷日時のスケジュール機能の開発</li>
							<li>モバイル通知システムの刷新</li>
						</ul>
						<h4 className="font-semibold mt-4">技術</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>言語: PHP, Go, Shell Script</li>
							<li>データベース: MongoDB, PostgreSQL</li>
							<li>AWS: EC2, ECS, SNS, SQS</li>
							<li>CI/CD・ジョブ: GitHub Actions, Jenkins, Airflow</li>
							<li>その他: FCM, Terraform</li>
						</ul>

						<h3 className="text-lg font-semibold mt-8">
							新電元工業株式会社 (<time dateTime="2018-04-01">2018-04-01</time>〜<time dateTime="2020-02-20">2020-02-20</time>)
						</h3>
						<p>
							ディスクリート半導体であるMOSFETの設計開発。
							<br />
							ソフトウェア開発者としての経歴ではないため、詳細は省略。
						</p>
					</article>
				</section>

				<section className="mb-8">
					<article className="max-w-3xl mx-auto bg-white rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow duration-300">
						<h2 className="text-xl font-bold mb-6 text-center tracking-wide">Learned</h2>

						<h3 className="text-lg font-semibold mt-8">📕Books</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								コンピュータアーキテクチャ・OS
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4296070096"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											コンピュータの構成と設計 第6版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/B0BG8J5QJ1"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											Linuxのしくみ 増補改訂版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4627810121"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											オペレーティングシステム 第2版
										</a>
									</li>
								</ul>
							</li>
							<li>
								アルゴリズム
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4839952957"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											プログラミングコンテスト攻略のためのアルゴリズムとデータ構造
										</a>
									</li>
								</ul>
							</li>
							<li>
								データベース・分散システム
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4781913903"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											リレーショナルデータベース入門 第3版
										</a>
									</li>
									<li>
										<a
											href="https://www.oreilly.co.jp/books/9784873118703"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											データ指向アプリケーションデザイン
										</a>
									</li>
								</ul>
							</li>
							<li>
								ネットワーク
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/B0827QNDNT"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											マスタリングTCP/IP 入門編 第6版
										</a>
									</li>
									<li>
										<a
											href="https://www.oreilly.co.jp/books/9784814400669"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											Real World HTTP 第3版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/479739448X"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											DNSがよくわかる教科書
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4297119250"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											Web配信の技術―HTTPキャッシュ・リバースプロキシ・CDNを活用する
										</a>
									</li>
								</ul>
							</li>
							<li>
								セキュリティ
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/B09G2T3X1W"
											className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
										>
											暗号と認証のしくみと理論がこれ1冊でしっかりわかる教科書
										</a>
									</li>
								</ul>
							</li>
						</ul>

						<h3 className="text-lg font-semibold mt-8">🪪Certifications</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<a
									href="https://aws.amazon.com/certification/certified-solutions-architect-associate"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									AWS Certified Solutions Architect - Associate
								</a>
							</li>
							<li>
								<a
									href="https://www.ipa.go.jp/shiken/kubun/ap.html"
									className="text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600 underline-offset-2 transition-colors duration-200"
								>
									応用情報技術者試験
								</a>
							</li>
						</ul>
					</article>
				</section>
			</main>

			<footer className="text-center text-gray-400 text-sm py-8 mt-4">
				<p>&copy; {new Date().getFullYear()} kumackey</p>
			</footer>
		</div>
	);
}

export default App;
