import React from "react";

import Section31 from "./section 31 ";
import Section32 from "./section32";
import Section33 from "./section33";
import { TbNotes } from "react-icons/tb";

const Section3 = () => {
  return (
    <>
      <Section31 />

      <div className="row  d-flex justify-content-lg-start ms-1">
        <div className="col-3 section3seco">
          <p>Upcoming Appointments</p>
        </div>
        <div className="col-3 section3seco">
          <p>Past Appointments</p>
        </div>
        <div className="col-3 section3seco">
          <p>Medical Records </p>
        </div>
      </div>

      <div className="s3main pb-3">
        <Section32 />
        <Section33 />
      </div>
    </>
  );
};

export default Section3;
