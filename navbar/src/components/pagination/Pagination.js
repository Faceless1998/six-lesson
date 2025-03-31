import React, { useState } from "react";
import "./pagination.css";
const ProductsData = [
  { id: 1, name: "product 1", price: "$10" },
  { id: 2, name: "product 2", price: "$20" },
  { id: 3, name: "product 3", price: "$30" },
  { id: 4, name: "product 4", price: "$40" },
  { id: 5, name: "product 5", price: "$50" },
  { id: 6, name: "product 6", price: "$60" },
  { id: 7, name: "product 7", price: "$70" },
  { id: 8, name: "product 8", price: "$80" },
  { id: 9, name: "product 9", price: "$90" },
  { id: 10, name: "product 10", price: "$100" },
  { id: 11, name: "product 11", price: "$110" },
  { id: 12, name: "product 12", price: "$120" },
];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = ProductsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalProducts = ProductsData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div>
        <h1>Product list</h1>
        <div className="products">
          {currentProducts.map((product) => (
            <>
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </div>
            </>
          ))}
        </div>

        <div className="pagination">
          <button onClick={() => paginate(1)}> &lt;&lt; </button>

          <button onClick={() => paginate(currentPage - 1)}>&lt;</button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </button>
          ))}

          <button onClick={() => paginate(currentPage + 1)}>&gt;</button>
          <button onClick={() => paginate(totalPages)}> &gt;&gt; </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
