import "./App.css";
import { KiribanForm } from "./components/KiribanForm";

function App() {
	return (
		<div className="min-h-screen bg-white text-gray-800 font-sans">
			<header className="bg-gray-100 py-4 mb-5 text-center">
				<h1 className="text-2xl font-bold mb-2">kumackey.com</h1>
				<img src="/kumackey.png" alt="kumackey" className="w-24 mx-auto" />
			</header>

			<main className="px-4">
				<section className="mb-5">
					<div className="flex justify-center gap-2 flex-wrap">
						<a href="https://github.com/kumackey">
							<img
								className="w-12 h-12 object-contain"
								src="/github-mark.png"
								alt="Github"
							/>
						</a>
						<a href="https://twitter.com/kumackey_">
							<img className="w-12 h-12 object-contain" src="/x.png" alt="X" />
						</a>
						<a href="https://bsky.app/profile/kumackey.bsky.social">
							<img
								className="w-12 h-12 object-contain"
								src="/bluesky.png"
								alt="Bluesky"
							/>
						</a>
						<a href="https://zenn.dev/kumackey">
							<img
								className="w-12 h-12 object-contain"
								src="/zenn.jpeg"
								alt="Zenn"
							/>
						</a>
						<a href="https://qiita.com/kumackey">
							<img
								className="w-12 h-12 object-contain"
								src="/qiita.png"
								alt="Qiita"
							/>
						</a>
						<a href="https://note.com/kumackey">
							<img
								className="w-12 h-12 object-contain"
								src="/note.png"
								alt="Note"
							/>
						</a>
						<a href="https://www.docswell.com/user/kumackey">
							<img
								className="w-12 h-12 object-contain"
								src="/docswell.png"
								alt="Docswell"
							/>
						</a>
						<a href="/family" className="text-2xl">
							👨‍👩‍👧‍👦
						</a>
					</div>
				</section>

				<section className="mb-5">
					<article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5 text-left">
						<h2 className="text-xl font-bold mb-5 text-center">Pickups</h2>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								<a
									href="https://www.docswell.com/s/kumackey/5MXYX2-2025-02-02-114330"
									className="text-blue-600 hover:text-blue-800"
								>
									静的スタンディングデスク
								</a>
							</li>
							<li>
								<a
									href="https://blog.studysapuri.jp/entry/2025/03/04/090000"
									className="text-blue-600 hover:text-blue-800"
								>
									再エンコード無しで、HLS動画への字幕の追加を実現する
								</a>
							</li>
							<li>
								<a
									href="https://qiita.com/kumackey/items/bf252ca24d343e71d6a2"
									className="text-blue-600 hover:text-blue-800"
								>
									【個人開発】キリ番を祝ってくれるGithub
									Actionsをリリースしました🎉【Go】
								</a>
							</li>
							<li>
								<a
									href="https://zenn.dev/kumackey/articles/d20221029-a38eb4bebc3272"
									className="text-blue-600 hover:text-blue-800"
								>
									デプロイ頻度を向上させることへの誤解
								</a>
							</li>
						</ul>
					</article>
				</section>

				<section className="mb-5">
					<article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5 text-left">
						<h2 className="text-xl font-bold mb-5 text-center">Works</h2>

						<h3 className="text-lg font-semibold mt-8">
							<a
								href="https://github.com/kumackey/kiriban"
								className="text-blue-600 hover:text-blue-800"
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
								className="text-blue-600 hover:text-blue-800"
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
								className="text-blue-600 hover:text-blue-800"
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
								className="text-blue-600 hover:text-blue-800"
							>
								Kudanshita Slot
							</a>
						</h3>
						<p>九段下の完成を目指すスロットゲームです。</p>
					</article>
				</section>

				<section className="mb-5">
					<article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5 text-left">
						<h2 className="text-xl font-bold mb-5 text-center">Career</h2>

						<h3 className="text-lg font-semibold mt-8 flex items-center gap-2">
							<img src="/recruit.jpeg" alt="Recruit" className="w-12" />
							株式会社リクルート (2023-06-15〜現在)
						</h3>
						<p>
							<a
								href="https://studysapuri.jp/"
								className="text-blue-600 hover:text-blue-800"
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
											className="text-blue-600 hover:text-blue-800"
										>
											字幕配信機能の開発
										</a>
									</li>
									<li>動画入稿基盤の開発</li>
									<li>コンテンツのセキュリティ向上</li>
									<li>CDN 移管</li>
								</ul>
							</li>
							<li>Feature Toggles マイクロサービスの開発</li>
							<li>モノリスからマイクロサービスへの移行</li>
							<li>LLM ワークフローの設計開発</li>
						</ul>
						<h4 className="font-semibold mt-4">技術</h4>
						<ul className="list-disc pl-5 space-y-1">
							<li>言語: Go, TypeScript, Ruby on Rails</li>
							<li>CDN: Fastly, Cloudflare, CloudFront, Edge Computing</li>
							<li>動画配信: AWS Elemental MediaConvert, HLS</li>
							<li>ストレージ: PostgreSQL, MongoDB, Aurora Serverless, S3</li>
							<li>その他: Kubernetes, Lambda, GitHub Actions, Terraform</li>
						</ul>

						<h3 className="text-lg font-semibold mt-8 flex items-center gap-2">
							<img src="/sumally.svg" alt="Summary" className="w-12" />
							株式会社サマリー (2020-06-01〜2023-06-14)
						</h3>
						<p>
							<a
								href="https://pocket.sumally.com/"
								className="text-blue-600 hover:text-blue-800"
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
							新電元工業株式会社 (2018-04-01〜2020-02-20)
						</h3>
						<p>
							ディスクリート半導体であるMOSFETの設計開発。
							<br />
							ソフトウェア開発者としての経歴ではないため、詳細は省略。
						</p>
					</article>
				</section>

				<section className="mb-5">
					<article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5 text-left">
						<h2 className="text-xl font-bold mb-5 text-center">Learned</h2>

						<h3 className="text-lg font-semibold mt-8">📕Books</h3>
						<ul className="list-disc pl-5 space-y-1">
							<li>
								コンピュータアーキテクチャ・OS
								<ul className="list-disc pl-5">
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4296070096"
											className="text-blue-600 hover:text-blue-800"
										>
											コンピュータの構成と設計 第6版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/B0BG8J5QJ1"
											className="text-blue-600 hover:text-blue-800"
										>
											Linuxのしくみ 増補改訂版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4627810121"
											className="text-blue-600 hover:text-blue-800"
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
											className="text-blue-600 hover:text-blue-800"
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
											className="text-blue-600 hover:text-blue-800"
										>
											リレーショナルデータベース入門 第3版
										</a>
									</li>
									<li>
										<a
											href="https://www.oreilly.co.jp/books/9784873118703"
											className="text-blue-600 hover:text-blue-800"
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
											className="text-blue-600 hover:text-blue-800"
										>
											マスタリングTCP/IP 入門編 第6版
										</a>
									</li>
									<li>
										<a
											href="https://www.oreilly.co.jp/books/9784814400669"
											className="text-blue-600 hover:text-blue-800"
										>
											Real World HTTP 第3版
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/479739448X"
											className="text-blue-600 hover:text-blue-800"
										>
											DNSがよくわかる教科書
										</a>
									</li>
									<li>
										<a
											href="https://www.amazon.co.jp/dp/4297119250"
											className="text-blue-600 hover:text-blue-800"
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
											className="text-blue-600 hover:text-blue-800"
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
									className="text-blue-600 hover:text-blue-800"
								>
									AWS Certified Solutions Architect - Associate
								</a>
							</li>
							<li>
								<a
									href="https://www.ipa.go.jp/shiken/kubun/ap.html"
									className="text-blue-600 hover:text-blue-800"
								>
									応用情報技術者試験
								</a>
							</li>
						</ul>
					</article>
				</section>
			</main>
		</div>
	);
}

export default App;
