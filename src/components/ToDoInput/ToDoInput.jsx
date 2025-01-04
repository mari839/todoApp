import React from "react";

function ToDoInput({ setFilter, darkMode, toggleDarkMode, setSearchTerm }) {

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update search term on input change
  };

  return (
    <div className="row mb-4 align-items-center">
      <div className="col-md-8">
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search note"
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="col-md-2">
        <div className="btn-group w-100">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown" 
            aria-expanded="false"
          >
            ALL
          </button>

          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("all")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("complete")}
              >
                Complete
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                onClick={() => setFilter("incomplete")}
              >
                Incomplete
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-md-2 text-end">
        <button
          className={`btn btn-secondary ${darkMode ? "dark-mode-btn" : ""}`}
          onClick={toggleDarkMode}
        >
          <i className={`bi ${darkMode ? "bi-sun" : "bi-moon"}`}></i>
        </button>
      </div>
    </div>
  );
}

export default ToDoInput;
