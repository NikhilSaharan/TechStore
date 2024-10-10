import React, { useContext, useEffect, useState } from 'react';
import ShopItems from '../components/shopitems';
import Newsletter from '../components/newsletter';
import Hero from '../components/hero';
import { ShopContext } from '../components/shopcontext';

const Shop = () => {
  const { products } = useContext(ShopContext);
  const [sortCriteria, setSortCriteria] = useState('price'); // Default sorting by price
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedProducts, setSortedProducts] = useState(products);

  useEffect(() => {
    const sortProducts = () => {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const sorted = filteredProducts.sort((a, b) => {
        if (sortCriteria === 'price') {
          return b.price - a.price; // Sort by price descending
        } else if (sortCriteria === 'priceAsc') {
          return a.price - b.price; // Sort by price ascending
        }
        return 0; // No sorting
      });
      setSortedProducts(sorted);
    };

    sortProducts();
  }, [sortCriteria, searchQuery, products]);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <section className="shop-banner p-5">
        <div className="container-xxl">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8 col-lg-6 text-center">
              <div className="shop-details">
                <h1 className="text-white"><b className="title-green">#100%</b> Off On All Products</h1>
                <p className="text-white fs-5">Make your orders, we will deliver..</p>
                
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <div className="sort-dropdown me-2">
                    <label htmlFor="sortOptions" className="text-white me-2">Sort by:</label>
                    <select
                      id="sortOptions"
                      value={sortCriteria}
                      onChange={handleSortChange}
                      className="form-select"
                    >
                      <option value="price">Price: High to Low</option>
                      <option value="priceAsc">Price: Low to High</option>
                    </select>
                  </div>
                  
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-products p-5">
        <div className="container-xxl">
          <div className="row">
            <ShopItems products={sortedProducts} /> {/* Pass the sorted products */}
          </div>
        </div>
      </section>

      {/* Pagination section (unchanged) */}
      <section className="pagination p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 align-items-center justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <Newsletter />
    </>
  );
}

export default Shop;
