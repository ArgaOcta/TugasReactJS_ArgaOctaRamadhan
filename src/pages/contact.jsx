function Contact() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{ color: "rgb(0, 74, 133)" }}
          >
            Contact OCBOOK
          </h2>

          <p className="text-muted">
            Hubungi kami untuk informasi mengenai buku dan layanan OCBOOK.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Information */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h4
                  className="fw-bold mb-4"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Get In Touch
                </h4>

                <div className="mb-4">
                  <h6 className="fw-bold">Address</h6>
                  <p className="text-muted mb-0">
                    Jl. Buku No. 25, Jakarta, Indonesia
                  </p>
                </div>

                <div className="mb-4">
                  <h6 className="fw-bold">Email</h6>
                  <p className="text-muted mb-0">
                    hello@ocbook.com
                  </p>
                </div>

                <div>
                  <h6 className="fw-bold">Phone</h6>
                  <p className="text-muted mb-0">
                    +62 812-3456-7890
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h4
                  className="fw-bold mb-4"
                  style={{ color: "rgb(0, 74, 133)" }}
                >
                  Send Us a Message
                </h4>

                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-semibold">
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn text-white px-4"
                        style={{
                          backgroundColor: "rgb(0, 74, 133)",
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
  )
}

export default Contact