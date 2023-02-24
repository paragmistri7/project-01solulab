import React from 'react';
import { TbNotes } from "react-icons/tb";

const Section33 = () => {
    return (
        <>
        <div className="s3sec d-flex justify-content-between   align-content-center m-3">
        <div className="col-3 p-2 psuedo ">
            <h2>26 Nov “19</h2>
            <small>09.00-10.00</small>
        </div>
        <div className="col-3 p-2 psuedo">
            <small>Treatment</small>
            <p>Open Access</p>
        </div>
        <div className=" d-flex justify-content-between col-5">
            <div className="p-2">
                <small>Dentist</small>
                <p>Drg. Adam H.</p>
            </div>
            <div className="p-2">
                <small>Nurse</small>
                <p>Jessicamila</p>
            </div>
            <div className="d-inline-block m-auto">
            <TbNotes className=" " />
                <span>Note</span>
            </div>
        </div>
        </div> 
        
        <div className="s3sec d-flex justify-content-between   align-content-center m-3">
                  <div className="col-3 p-2 ">
                      <h2>12 Nov ‘19</h2>
                      <small>09.00-10.00</small>
                  </div>
                  <div className="col-3 p-2">
                      <small>Treatment</small>
                      <p>Root Canal</p>
                  </div>
                  <div className=" d-flex justify-content-between col-5">
                      <div className="p-2">
                          <small>Dentist</small>
                          <p>Drg. Adam H.</p>
                      </div>
                      <div className="p-2">
                          <small>Nurse</small>
                          <p>Jessicamila</p>
                      </div>
                      <div className="d-inline-block m-auto">
                      <TbNotes className=" " />
                          <span>Note</span>
                      </div>
                  </div>
              </div> 
        </>
    );
};

export default Section33;