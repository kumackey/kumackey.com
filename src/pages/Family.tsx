import { Link } from 'react-router-dom'

export function Family() {
  const images = [
    { src: '/kumackey.png', alt: 'kumackey' },
    { src: '/family/kumakey.png', alt: 'kumakey' },
    { src: '/family/kumackey_chofu.png', alt: 'kumackey' },
    { src: '/family/kumakkey.png', alt: 'kumakkey' },
    { src: '/family/kumacky.jpg', alt: 'kumacky' },
    { src: '/family/kumakky.gif', alt: 'kumakky' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-gray-100 py-4 mb-5 text-center">
        <h1 className="text-2xl font-bold mb-2">Family</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800">← Back to Home</Link>
      </header>

      <main className="px-4">
        <section className="mb-5">
          <article className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-5">
            <div className="flex justify-center gap-4 flex-wrap">
              {images.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className="w-32 h-auto"
                />
              ))}
            </div>
          </article>
        </section>
      </main>
    </div>
  )
}
