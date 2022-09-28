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


      <br></br>
      <div className="products">
        <div className="product-header">
          <div className="product-title">Products</div>
          <div className="product-search-filter">
            <form className="product-search">
              <div className="search-bar">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginLeft: "10px" }}
                >
                  Search
                </button>
              </div>
            </form>
            <div className="filter">
              <Filter />
              <Sort />
            </div>

          </div>
        </div>

        <div className="flex-container">
          {products.map((product) => {
            return (
              <div
                className="card"
                style={{ width: "24%", marginBottom: "40px" }}
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
    </div>
  );
}

export default Home;
