export default function Card() {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ width: "25rem" }}>
            <img src="https://i0.wp.com/www.eka.moe/wp-content/uploads/2018/05/Uma-Musume-Pretty-Derby-_11.04_2018.05.10_20.36.39.jpg?fit=1280720&ssl=1" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card" style={{ width: "25rem" }}>
            <img src="https://media.pocketgamer.biz/images/132586/86039/uma-musume-pretty-derby-haru-and-rice_l1200.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-4">
          <div className="card" style={{ width: "25rem" }}>
            <img src="https://images.steamusercontent.com/ugc/1737818262555957535/E3F1982F4639C421A2BA593CD0E4E39BD8CCA34C/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
