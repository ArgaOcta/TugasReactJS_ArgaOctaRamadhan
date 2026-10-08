import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          {/* Hero Text */}
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di OCBOOK
            </h1>

            <p className="lead mt-3">
              Jelajahi berbagai koleksi buku pilihan, mulai dari novel,
              pengembangan diri, teknologi, hingga buku-buku inspiratif.
              Temukan cerita dan pengetahuan baru untuk menemani setiap harimu.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <a
                href="#book"
                className="btn btn-lg px-4 me-md-2 fw-bold"
                style={{
                  backgroundColor: "rgb(0, 74, 133)",
                  color: "white",
                }}
              >
                Jelajahi Buku
              </a>

              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=720&q=80"
              alt="Koleksi buku OCBOOK"
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Book Collection */}
      <section id="book" className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1
              className="fw-bold"
              style={{ color: "rgb(0, 74, 133)" }}
            >
              Koleksi Buku OCBOOK
            </h1>

            <p className="lead text-body-secondary">
              Temukan berbagai pilihan buku menarik untuk menemani waktu
              membaca kamu. Mulai dari novel, teknologi, pengembangan diri,
              hingga buku inspiratif pilihan OCBOOK.
            </p>

            <p>
              <a
                href="#book"
                className="btn my-2 me-2"
                style={{
                  backgroundColor: "rgb(0, 74, 133)",
                  color: "white",
                }}
              >
                Lihat Semua Buku
              </a>

              <Link
                to="/contact"
                className="btn btn-outline-secondary my-2"
              >
                Hubungi Kami
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Book Album */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

            {/* Book 1 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="The Art of Reading"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    The Art of Reading
                  </h5>

                  <p className="card-text text-body-secondary">
                    Buku pilihan untuk menemukan kembali kesenangan membaca
                    dan menjelajahi berbagai cerita.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp85.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 2 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Technology for Everyone"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Technology for Everyone
                  </h5>

                  <p className="card-text text-body-secondary">
                    Kenali dunia teknologi dan perkembangannya dengan
                    bahasa yang mudah dipahami.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp95.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 3 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Self Development"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Self Development
                  </h5>

                  <p className="card-text text-body-secondary">
                    Panduan untuk membangun kebiasaan positif dan
                    mengembangkan potensi diri.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp90.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 4 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="The Power of Knowledge"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    The Power of Knowledge
                  </h5>

                  <p className="card-text text-body-secondary">
                    Kumpulan wawasan dan inspirasi untuk memperluas
                    pengetahuan dan cara pandang.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp100.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 5 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Stories That Inspire"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Stories That Inspire
                  </h5>

                  <p className="card-text text-body-secondary">
                    Kumpulan cerita inspiratif yang memberikan perspektif
                    baru tentang kehidupan.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp88.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/* Book 6 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=600&q=80"
                  className="card-img-top"
                  alt="Programming Basics"
                  style={{ height: "300px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    Programming Basics
                  </h5>

                  <p className="card-text text-body-secondary">
                    Buku dasar pemrograman untuk kamu yang ingin mulai
                    belajar coding dari awal.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <a
                      href="#"
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "rgb(0, 74, 133)",
                        color: "white",
                      }}
                    >
                      Lihat Buku
                    </a>

                    <small className="text-body-secondary">
                      Rp110.000
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Home