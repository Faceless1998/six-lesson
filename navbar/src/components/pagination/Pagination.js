import React, { useState } from "react";

const ProductsData = Array.from( {length: 1}, (_, index) => (
{
  id: index + 1,
  name: `Product ${index + 1}`,
  price: `$ ${ (index + 1) * 10}`
}
))

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = ProductsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalProducts = ProductsData.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = () => {

      const pages = []
      const maxVisiblePages = 3;

      if(totalPages <=7){
        return Array.from({length: totalPages}, (_, index) => index + 1 )
      }

      pages.push(1);

      if(currentPage > maxVisiblePages){
        pages.push("...")
      }

      const startPage = Math.max(2, currentPage-1);
      const endPage = Math.min(currentPage+1, totalPages-1);

      for(let i=startPage; i<=endPage;i++){
        pages.push(i);
      }

      if(currentPage < totalPages - maxVisiblePages + 1){
        pages.push("...");
      }

      pages.push(totalPages);

      return pages;

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
         {paginate().map( (pages, index)  => (
            
              pages === "..." ?
              <span key={index}> {pages} </span> :
              <button key={index} onClick={() => setCurrentPage(pages)}> {pages} </button>
            
          ))
         }

        </div>
      </div>
    </>
  );
};

export default Pagination;
