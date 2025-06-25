// components/Footer.tsx
export default function Footer() {
  return (
    <div className="container">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            aria-label="Bootstrap"
          >
            <svg className="bi me-2" width={40} height={32} aria-hidden="true">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <p className="text-body-secondary">© 2025</p>
        </div>

        <div className="col mb-3"></div>

        {[...Array(3)].map((_, index) => (
          <div className="col mb-3" key={index}>
            <h5>Section</h5>
            <ul className="nav flex-column">
              {["Home", "Features", "Pricing", "FAQs", "About"].map((item) => (
                <li className="nav-item mb-2" key={item}>
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>
    </div>
  );
}
