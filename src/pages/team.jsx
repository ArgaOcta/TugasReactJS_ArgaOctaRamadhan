function Team() {
  return (
    <section className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2
            className="fw-bold"
            style={{ color: "rgb(0, 74, 133)" }}
          >
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
                <h4 className="fw-bold">
                  Arga Octa Ramadhan
                </h4>

                <p className="text-muted mb-1">
                  Founder & Developer
                </p>

                <p className="mb-0">
                  <strong>NIM:</strong> 0110224165
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team