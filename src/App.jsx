function App() {
  return (
    <>
      {/* Header */}
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

            {/* Logo */}
            <a
              href="#home"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <path
                  fill="rgb(0, 74, 133)"
                  d="M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm3 4.5a4.5 4.5 0 1 0 0 9a1 1 0 1 0 0-2a2.5 2.5 0 1 1 0-5a1 1 0 1 0 0-2Z"
                />
              </svg>

              <strong
                style={{
                  color: "rgb(0, 74, 133)",
                  fontSize: "1.35rem",
                  fontWeight: "700",
                  letterSpacing: "0.5px",
                }}
              >
                OCBOOK
              </strong>
            </a>

            {/* Navigation */}
            <ul
              className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 ms-4"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "600",
              }}
            >
              <li>
                <a
                  href="#home"
                  className="nav-link px-2"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#book"
                  className="nav-link px-2"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Book
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="nav-link px-2"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="nav-link px-2"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Search */}
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            {/* Profile */}
            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="Profile"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>

              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </header>


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

              <a
                href="#contact"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Hubungi Kami
              </a>
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

              <a
                href="#contact"
                className="btn btn-outline-secondary my-2"
              >
                Hubungi Kami
              </a>
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
                    Buku pilihan untuk menemukan kembali kesenangan
                    membaca dan menjelajahi berbagai cerita.
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


      {/* Team Section */}
    <section id="team" className="py-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold" style={{ color: "rgb(0, 74, 133)" }}>
        Team OCBOOK
      </h2>
      <p className="text-muted">
        Tim yang mengembangkan dan mengelola OCBOOK.
      </p>
    </div>

    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-4">
        <div className="card border-0 shadow-sm text-center h-100">
          <img
            src="https://avatars.githubusercontent.com/u/183065555?v=4"
            className="card-img-top"
            alt="Arga Octa Ramadhan"
            style={{ height: "300px", objectFit: "cover" }}
          />

          <div className="card-body">
            <h4 className="fw-bold">Arga Octa Ramadhan</h4>
            <p className="text-muted mb-1">Founder & Developer</p>
            <p className="mb-0">
              <strong>NIM:</strong> 0110224165
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container py-5">

          <div className="text-center mb-5">
            <h1
              className="fw-bold"
              style={{ color: "rgb(0, 74, 133)" }}
            >
              Contact OCBOOK
            </h1>

            <p className="lead text-body-secondary">
              Punya pertanyaan tentang buku, pesanan, atau ingin
              memberikan saran? Jangan ragu untuk menghubungi kami.
            </p>
          </div>

          <div className="row g-5">

            {/* Contact Information */}
            <div className="col-md-5">

              <h3
                className="fw-bold mb-4"
                style={{ color: "rgb(0, 74, 133)" }}
              >
                Get in Touch
              </h3>

              <p className="text-body-secondary">
                Kami siap membantu kamu menemukan buku yang sesuai
                dengan kebutuhan dan minatmu.
              </p>

              <div className="mt-4">

                <div className="mb-4">
                  <h5 className="fw-bold">
                    📍 Address
                  </h5>

                  <p className="text-body-secondary">
                    Jl. Buku No. 25, Jakarta, Indonesia
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold">
                    📧 Email
                  </h5>

                  <p className="text-body-secondary">
                    hello@ocbook.com
                  </p>
                </div>

                <div className="mb-4">
                  <h5 className="fw-bold">
                    📞 Phone
                  </h5>

                  <p className="text-body-secondary">
                    +62 812-3456-7890
                  </p>
                </div>

              </div>
            </div>


            {/* Contact Form */}
            <div className="col-md-7">

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 p-lg-5">

                  <h4 className="fw-bold mb-4">
                    Send Us a Message
                  </h4>

                  <form>

                    <div className="row g-3">

                      <div className="col-md-6">
                        <label className="form-label">
                          Name
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label">
                          Email
                        </label>

                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Subject
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="What can we help you with?"
                        />
                      </div>

                      <div className="col-12">
                        <label className="form-label">
                          Message
                        </label>

                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn px-4 py-2 fw-bold"
                          style={{
                            backgroundColor: "rgb(0, 74, 133)",
                            color: "white",
                          }}
                        >
                          Send Message
                        </button>
                      </div>

                    </div>

                  </form>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">

          {/* Brand */}
          <div className="col mb-3">

            <a
              href="#home"
              className="d-flex align-items-center mb-3 text-decoration-none"
            >
              <strong
                style={{
                  color: "rgb(0, 74, 133)",
                  fontSize: "1.5rem",
                  letterSpacing: "0.5px",
                }}
              >
                OCBOOK
              </strong>
            </a>

            <p className="text-body-secondary">
              &copy; 2026 OCBOOK
            </p>

            <p className="text-body-secondary">
              Your place to discover great books.
            </p>

          </div>


          {/* Spacer */}
          <div className="col mb-3"></div>


          {/* Navigation */}
          <div className="col mb-3">

            <h5 style={{ color: "rgb(0, 74, 133)" }}>
              Navigation
            </h5>

            <ul className="nav flex-column">

              <li className="nav-item mb-2">
                <a
                  href="#home"
                  className="nav-link p-0 text-body-secondary"
                >
                  Home
                </a>
              </li>

              <li className="nav-item mb-2">
                <a
                  href="#book"
                  className="nav-link p-0 text-body-secondary"
                >
                  Book
                </a>
              </li>

              <li className="nav-item mb-2">
                <a
                  href="#team"
                  className="nav-link p-0 text-body-secondary"
                >
                  Team
                </a>
              </li>

              <li className="nav-item mb-2">
                <a
                  href="#contact"
                  className="nav-link p-0 text-body-secondary"
                >
                  Contact
                </a>
              </li>

            </ul>
          </div>


          {/* Categories */}
          <div className="col mb-3">

            <h5 style={{ color: "rgb(0, 74, 133)" }}>
              Categories
            </h5>

            <ul className="nav flex-column">

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Novel
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Technology
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Self Development
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Inspiration
                </a>
              </li>

            </ul>
          </div>


          {/* Information */}
          <div className="col mb-3">

            <h5 style={{ color: "rgb(0, 74, 133)" }}>
              Information
            </h5>

            <ul className="nav flex-column">

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About OCBOOK
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#team" className="nav-link p-0 text-body-secondary">
                  Our Team
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms & Conditions
                </a>
              </li>

              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

        </footer>
      </div>

    </>
  )
}

export default App
