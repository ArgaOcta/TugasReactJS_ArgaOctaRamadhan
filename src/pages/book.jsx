
import { useState } from "react";
import booksData from "../utils/books";

function Book() {
  const [books, setBooks] = useState(booksData);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBook = {
      id: Date.now(),
      ...formData,
    };

    setBooks((previousBooks) => [...previousBooks, newBook]);

    setFormData({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
    });

    setShowForm(false);
  };

  return (
    <main>
      {/* Header */}
      <section className="container py-5 text-center">
        <h1
          className="fw-bold mb-3"
          style={{ color: "rgb(0, 74, 133)" }}
        >
          Koleksi Buku OCBOOK
        </h1>

        <p className="lead text-body-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Jelajahi koleksi pilihan OCBOOK, mulai dari dunia
          Formula 1 bersama Adrian Newey hingga manga favoritmu.
          Temukan bacaan yang cocok untukmu!
        </p>

        <button
          type="button"
          className="btn btn-lg mt-3"
          style={{
            backgroundColor: "rgb(0, 74, 133)",
            color: "white",
          }}
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Tutup Form" : "+ Tambah Buku"}
        </button>
      </section>

      {/* Form Tambah Buku */}
      {showForm && (
        <section className="container mb-5">
          <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: "800px" }}>
            <div className="card-body p-4">
              <h4
                className="fw-bold mb-4"
                style={{ color: "rgb(0, 74, 133)" }}
              >
                Tambah Buku Baru
              </h4>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Judul Buku</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Masukkan judul buku"
                      value={formData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Penulis</label>
                    <input
                      type="text"
                      name="author"
                      className="form-control"
                      placeholder="Nama penulis"
                      value={formData.author}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Tahun Terbit</label>
                    <input
                      type="number"
                      name="year"
                      className="form-control"
                      placeholder="Contoh: 2024"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">URL Gambar</label>
                    <input
                      type="url"
                      name="image"
                      className="form-control"
                      placeholder="https://example.com/book.jpg"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Deskripsi</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows="3"
                      placeholder="Deskripsi singkat buku"
                      value={formData.description}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn text-white"
                      style={{ backgroundColor: "rgb(0, 74, 133)" }}
                    >
                      Simpan Buku
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Daftar Buku */}
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Daftar Buku</h3>
            <span className="badge text-bg-primary">
              {books.length} Buku
            </span>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    loading="lazy"
                    style={{
                      height: "300px",
                      objectFit: "contain",
                      padding: "16px",
                      backgroundColor: "white",
                    }}
                    onError={(event) => {
                      event.currentTarget.style.visibility = "hidden";
                      event.currentTarget.style.height = "0";
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">
                      {book.title}
                    </h5>

                    <p className="text-body-secondary mb-1">
                      Penulis: {book.author}
                    </p>

                    <p className="text-body-secondary mb-3">
                      Tahun: {book.year}
                    </p>

                    <p className="card-text">{book.description}</p>

                    <div className="mt-auto pt-3">
                      <span
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: "rgb(0, 74, 133)",
                        }}
                      >
                        Koleksi OCBOOK
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Book;