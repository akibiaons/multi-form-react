import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
    /* Below is the variable that is page which keeps track of which "page" of the form we are in */
    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
      email: "",
      password:"",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      username: "",
      nationality: "",
      other: "",
    }); {/* Above is an object arrat with useState to keep track of the input data from SignUpInfo components */}

    const FormTitles = ["Sign Up", "Personal Info", "Other"]; /* This is a title that will appear at the top of a form */
    /* We want to display the strings above based on what page the user's position in the form */
    
    {/* This will show up the current page based on the indexes form useState and page/setPage */}
    const PageDisplay = () => {
      if (page === 0) {
        return <SignUpInfo formData={formData} setFormData={setFormData}/>;
      } else if (page === 1) {
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      } else {
        return <OtherInfo formData={formData} setFormData={setFormData}/>;
      }
    };
    {/* We basically used an array, variables, and conditionals to make this display each seperate array.
    Oh, we also used the useState hook. I made the Form function, which uses the useState hook.
    it is set equal to an array of page and setPage, which control what page the screen will render, based on the
    on clicks from the <div>s below. */}
    
    return (
      <div className="form">
        <div className="progressbar">
          <div className="form-container">
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{PageDisplay()}</div>
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
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    alert("FORM SUBMITTED");
                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }}
              >
                {page === FormTitles.length - 1 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Form;