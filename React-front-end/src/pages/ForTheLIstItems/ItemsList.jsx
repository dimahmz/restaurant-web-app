import React from "react";
import Action2 from "../../PosComponents/Action2";

const ItemsList = ({
  currentCustomers,
  openIndex,
  handleToggleOptions,
  handleVariationsClick,
  addVariantesStates,
  setAddVariantesStates,
  showVariation,
  data,
  handleClose,
  currentPage,
  pageCount,
  handlePageChange,
  goToPrevPage,
  goToNextPage,
}) => {
  return (
    <div>
      <div className="h-[450px] overflow-scroll">
        <table className="w-full table-auto">
          {/* Table header */}
          <thead className="border">
            <tr>
              <th className="p-2 border-r-2 text-sm text-center">S/L</th>
              <th className="p-2 border-r-2 text-sm text-center">Image</th>
              <th className="p-2 border-r-2 text-sm text-center">Name</th>
              <th className="p-2 border-r-2 text-sm text-center">Group</th>
              <th className="p-2 border-r-2 text-sm text-center">Price</th>
              <th className="p-2 border-r-2 text-sm text-center">Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {currentCustomers.map((d, i) => (
              <tr className="border hover:bg-gray-200 duration-150" key={i}>
                <td className="text-xs text-capitalize align-middle text-center font-bold px-2 py-4 border-r-2">
                  {i + 1}
                </td>
                <td className="px-2 py-4 text-blue-500 border-r-2 text-xs flex justify-center">
                  <img
                    className="rounded-full w-[60px] h-[60px]"
                    src={d.image}
                    alt=""
                  />
                </td>
                <td className="p-2 border-r-2 text-xs text-center">{d.name}</td>
                <td className="p-2 border-r-2 text-xs text-center">{d.group}</td>
                <td className="p-2 border-r-2 text-xs text-center">
                  {d.prices ? (
                    <button
                      onClick={handleVariationsClick}
                      className="text-white bg-[#f64e60] px-2 py-1 text-sm"
                    >
                      Check Variations
                    </button>
                  ) : (
                    <p>Price: ${d.price}</p>
                  )}
                </td>
                <td className="p-2 border-r-2 text-xs text-center">
                  <Action2
                    key={i}
                    isOpen={i === openIndex}
                    toggleOptions={() => handleToggleOptions(i)}
                    onVariationsClick={() => {
                      handleVariationsClick();
                      handleCloseOptions();
                      setAddVariantesStates((prevStates) => {
                        const newStates = [...prevStates];
                        newStates[i] = true;
                        return newStates;
                      });
                    }}
                  />
                  {addVariantesStates[i] && (
                    <div className="fixed bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                      <div className="mt-20 flex justify-center">
                        <AddVariantes
                          data={d}
                          onClose={() => {
                            setAddVariantesStates((prevStates) => {
                              const newStates = [...prevStates];
                              newStates[i] = false;
                              return newStates;
                            });
                          }}
                        />
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {showVariation && (
              <div className="fixed bg-black/80 overflow-scroll w-full h-screen z-10 left-0 top-0">
                <div className="mt-20 flex justify-center">
                  <ViewVariantion onClose={handleClose} />
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <button onClick={goToPrevPage} className="mx-2 px-3 py-1 rounded bg-white">
            Previous
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-2 px-3 py-1 rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={goToNextPage} className="mx-2 px-3 py-1 rounded bg-white">
            Next
          </button>
        </div>
        <div className="mr-4">
          <p>Total Customers: {data.length}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
