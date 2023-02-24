import React from "react";
import diana from "../images01/diana.jpg";
import { TbNotes } from "react-icons/tb";
const Section2 = () => {
  return (
    <>
      <div className="row mt-4 ">
        <div className="dianadiv text-center">
          <img src={diana} alt="" />
          <h3>Diana Cooper</h3>
          <p>diane.cooper@example.com</p>
          <div className=" d-flex">
            <div className=" w-50 border-end border-2 border-dark">15</div>
            <div className=" w-50">02</div>
          </div>
          <button type="button" class="btn btn-sm w-75 mt-3 btn-outline-secondary">
            Send Message
          </button>
        </div>
        <div>
          <p className="files">Files / Documents</p>
          <div className="document">
            <TbNotes />
            <span>Check Up Results.pdf</span>
          </div>
          <div className="document">
            <TbNotes />
            <span>Check Up Results.pdf</span>
          </div>
          <div className="document">
            <TbNotes />
            <span>Medical Prescription.pdf</span>
          </div>
          <div className="document">
            <TbNotes />
            <span>Dental X-Ray Result.pdf</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
