"use client";
import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"  // <-- เพิ่มตรงนี้
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="https://www.ilovejapantours.com/images/easyblog_articles/132/Miyajimatorii.jpg"
            alt="First slide"
            width={1400}
            height={800}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://media.cnn.com/api/v1/images/stellar/prod/220922155226-japan-tourism-lifting-covid-restrictions.jpg?c=16x9&q=h_833,w_1480,c_fill"
            alt="Second slide"
            width={1400}
            height={800}
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAB2krqqJnMGSM_s4N2OWzunKCEfCNsxgPAg&s"
            alt="Third slide"
            width={1400}
            height={800}
          />
        </div>
      </div>

      {/* ปุ่ม Prev */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      {/* ปุ่ม Next */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
