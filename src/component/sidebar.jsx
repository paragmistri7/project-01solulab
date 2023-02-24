import React from 'react';
import { GiChart } from "react-icons/gi";
import { GrAdd } from "react-icons/gr";
import logout from "../images01/logout.png"
import patent from "../images01/patent.png"
import report from "../images01/report.png"
import setting from "../images01/setting.png"
import upload from "../images01/upload.png"
import folder from "../images01/folder.png"
import Section2 from './section 2';
import Section3 from './section3';

const Sidebar = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row" >


                <div className="text-center sidebar  ">
                    <div className="gichartdiv">
                        <GiChart className='gichart'/>
                    </div>
                    <div className=" sideimage"> 
                        <GrAdd />
                        <p>NEW</p>
                    </div>
                    <div className="sideimage"> 
                        <img src={patent} alt="" />
                        <p>PATENT</p>
                    </div>
                    <div className="sideimage"> 
                        <img src={folder} alt="" />
                        <p>FOLDER</p>
                    </div>
                    <div className=" sideimage"> 
                        <img src={upload} alt="" />
                        <p>UPLOAD</p>
                    </div>
                    <div className=" sideimage"> 
                        <img src={report} alt="" />
                        <p>REPORT</p>
                    </div>

                    <div className="sideimage"> 
                        <img src={setting} alt="" />
                        <p>SETTING</p>
                    </div>

                    <div className="sideimage"> 
                        <img src={logout} alt="" />
                        <p>LOGOUT</p>
                    </div>
                   
                </div>

                <div className="section2">
                   <Section2/>
                </div>
                <div className="section3">
                  <Section3/>
                </div>
            </div>
                </div>


        </>
    );
};

export default Sidebar;