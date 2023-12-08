import React, { useState, useEffect } from "react";
import "./Filter.css";

const DataGrid = ({ data }) => {
  const [additionalData, setAdditionalData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
    }
  }, [selectedItem]);

  const handleShowMore = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="data-grid mx-auto my-auto">
      <div className="data-grid-container">
        <div className="row ms-auto me-auto">
          {data.map((item, index) => (
            <div className="card col-md-3 m-3" key={index}>
              <img
                src={require("./images/Dragon_Render_Desktop.jpeg")}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body cardDetails">
                <span className="card-text">
                  <p className="line">
                    <strong>Status of Mission: </strong>{" "}
                    <span>{item.status}</span>
                  </p>
                  <p className="line">
                    <strong>Original Launch Date: </strong>
                    <span>{item.original_launch.split("T")[0]}</span>
                    {/* {console.log(typeof item.original_launch)} */}
                  </p>
                  <p className="line">
                    <strong>Type: </strong> <span>{item.type}</span>
                  </p>
                </span>
                <div className="text-end ">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal${index}`}
                    onClick={() => handleShowMore(item)}
                  >
                    Show more
                  </a>
                </div>
              </div>
              {/* Modal for additional details */}
              <div
                className="modal fade"
                id={`exampleModal${index}`}
                tabIndex="-1"
                aria-labelledby={`exampleModalLabel${index}`}
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-5"
                        id={`exampleModalLabel${index}`}
                      >
                        {item.status}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {/* Render additional data here */}
                      {/* For example: {additionalData.someField} */}
                    </div>
                    <div className="modal-footer">
                      SPACEX © 2023 PRIVACY POLICY SUPPLIERS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
