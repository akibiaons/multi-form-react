import React, { useState } from "react";

function Form() {
    /*Below is the variable that is page which keeps track of which "page" of the form we are in */
    const [page, setPage] = useState(0);

    const FormTitles = ["Sign Up", "Personal Info", "Other"]; /* This is a title that will appear at the top of a form */
    /* We want to display the strings above based on what page the user's position in the form */
    return (
      <div className="form">
        <div className="progressbar">
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body"></div>
            <div className="footer">
            <button 
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Prev
              </button>
              <button 
                disabled={page == FormTitles.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Form;