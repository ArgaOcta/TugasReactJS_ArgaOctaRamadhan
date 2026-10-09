
import { Link } from "react-router-dom";
import books from "../utils/books";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Temukan Buku Favoritmu di OCBOOK
            </h1>

            <p className="lead mt-3">
              Jelajahi berbagai koleksi pilihan, mulai dari buku otomotif,
              manga, hingga cerita menarik. Temukan bacaan favoritmu
              untuk menemani setiap harimu.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link
                to="/book"
                className="btn btn-lg px-4 me-md-2 fw-bold"
                style={{
                  backgroundColor: "rgb(0, 74, 133)",
                  color: "white",
                }}
              >
                Jelajahi Buku
              </Link>

              <Link
                to="/contact"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="img-fluid"
              src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=720&q=80"
              alt="Koleksi buku OCBOOK"
              width="720"
            />
          </div>
        </div>
      </div>

      {/* Book Collection */}
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1
              className="fw-bold"
              style={{ color: "rgb(0, 74, 133)" }}
            >
              Koleksi Buku OCBOOK
            </h1>

            <p className="lead text-body-secondary">
              Dari dunia Formula 1 hingga petualangan manga,
              temukan bacaan yang sesuai dengan minatmu.
            </p>

            <Link
              to="/book"
              className="btn my-2 me-2"
              style={{
                backgroundColor: "rgb(0, 74, 133)",
                color: "white",
              }}
            >
              Lihat Semua Buku
            </Link>

            <Link
              to="/contact"
              className="btn btn-outline-secondary my-2"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Book Album */}
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.slice(0, 3).map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      height: "300px",
                      objectFit: "contain",
                      padding: "12px",
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">
                      {book.title}
                    </h5>

                    <p className="text-body-secondary mb-1">
                      Penulis: {book.author}
                    </p>

                    <p className="text-body-secondary">
                      Tahun: {book.year}
                    </p>

                    <p className="card-text">
                      {book.description}
                    </p>

                    <div className="mt-auto">
                      <Link
                        to="/book"
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "rgb(0, 74, 133)",
                          color: "white",
                        }}
                      >
                        Lihat Buku
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              to="/book"
              className="btn btn-lg"
              style={{
                backgroundColor: "rgb(0, 74, 133)",
                color: "white",
              }}
            >
              Jelajahi Semua Koleksi
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;