import img from "../../assets/images/home/shipping.jpg";
const MenuLeft = () => {
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#sportswear"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Sportswear
                </a>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href=".">Nike</a>
                  </li>
                  <li>
                    <a href=".">Under Armour</a>
                  </li>
                  <li>
                    <a href=".">Adidas</a>
                  </li>
                  <li>
                    <a href=".">Puma</a>
                  </li>
                  <li>
                    <a href=".">ASICS</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mens */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Mens
                </a>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href=".">Fendi</a>
                  </li>
                  <li>
                    <a href=".">Guess</a>
                  </li>
                  <li>
                    <a href=".">Valentino</a>
                  </li>
                  <li>
                    <a href=".">Dior</a>
                  </li>
                  <li>
                    <a href=".">Versace</a>
                  </li>
                  <li>
                    <a href=".">Armani</a>
                  </li>
                  <li>
                    <a href=".">Prada</a>
                  </li>
                  <li>
                    <a href=".">Dolce and Gabbana</a>
                  </li>
                  <li>
                    <a href=".">Chanel</a>
                  </li>
                  <li>
                    <a href=".">Gucci</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Womens */}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  data-parent="#accordian"
                  href="#womens"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Womens
                </a>
              </h4>
            </div>
            <div id="womens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href=".">Fendi</a>
                  </li>
                  <li>
                    <a href=".">Guess</a>
                  </li>
                  <li>
                    <a href=".">Valentino</a>
                  </li>
                  <li>
                    <a href=".">Dior</a>
                  </li>
                  <li>
                    <a href=".">Versace</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Other categories */}
          {[
            "Kids",
            "Fashion",
            "Households",
            "Interiors",
            "Clothing",
            "Bags",
            "Shoes",
          ].map((item) => (
            <div className="panel panel-default" key={item}>
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href=".">{item}</a>
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="brands_products">
          <h2>Brands</h2>
          <div className="brands-name">
            <ul className="nav nav-pills nav-stacked">
              {[
                ["Acne", 50],
                ["Grüne Erde", 56],
                ["Albiro", 27],
                ["Ronhill", 32],
                ["Oddmolly", 5],
                ["Boudestijn", 9],
                ["Rösch creative culture", 4],
              ].map(([name, count]) => (
                <li key={name}>
                  <a href=".">
                    <span className="pull-right">({count})</span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Range */}
        <div className="price-range">
          <h2>Price Range</h2>
          <div className="well">
            <input
              type="text"
              className="span2"
              data-slider-min="0"
              data-slider-max="600"
              data-slider-step="5"
              data-slider-value="[250,450]"
              id="sl2"
            />
            <br />
            <b>$ 0</b> <b className="pull-right">$ 600</b>
          </div>
        </div>

        <div className="shipping text-center">
          <img src={img} alt="Shipping" />
        </div>
      </div>
    </div>
  );
};

export default MenuLeft;
