import products from "./products.json";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Sort from "./Sort";
import "./style.css";

import { Link } from "react-router-dom";
import Texta from "./Texta";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <br />

      <div className="filter">
        <Filter />
        <Sort />
      </div>

      <br></br>
      <div className="flex-container">
        {products.map((product) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", marginBottom: "40px" }}
            >
              <div className="card text-center">
                <div key={product.id}>
                  <Link to="/information" className="btn-link">
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt={`Preview of ${product.title}`}
                    />
                  </Link>
                  <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text"> {product.description}</p>
                    <p>Rs.{product.price}</p>
                    <p>
                      <button className="btn btn-primary" onClick={Texta}>
                        Add to Cart
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
