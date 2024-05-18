import React, { useState } from "react";
import Intern from "../Data/InternshipData";
import { Link } from "react-router-dom";
import { selectUser } from "../../Feature/Userslice";
import { useSelector } from "react-redux";
import "./detail.css"

function InternDetail() {
  const user = useSelector(selectUser);
  const [isDivVisible, setDivVisible] = useState(false);
  const [textare, setTextare] = useState("");
  const show = () => {
    setDivVisible(true);
  };
  const hide = () => {
    setDivVisible(false);
  };
  // const submitApplication= async()=>{
  //   const text=document.getElementById("text")
  //     if (text.value==="") {
  //       alert("Fill the mendetory fildes")
  //     }
  //     else{
  //       const bodyJson={
  //         coverLetter:textare,
  //         category:category,
  //         company :company,
  //         user:user,
  //         Application:id
  //       }
      
  //       await axios.post("https://internshipbackend-vwja.onrender.com/api/application",bodyJson).then((res)=>{
    
    
          
  //       }).catch((err)=>{
  //         alert("error happend")
  //       })
  //       alert("Done")
  //       navigate("/Jobs")
  //     }
  //   };

  return (
    <div>
      <div className="details-app m-600 text-center ">
        {Intern.map((data, index) => (
          <>
            <h1 className="font-bold text-3xl text-center ">{data.title}</h1>
            <div className=" m-14 shadow-sm rounded-md border ">
              <p className="mb-4 mt-3" id="boxer">
                <i className="bi bi-arrow-up-right text-blue-500"></i>
                Actively Hiring
              </p>
              <p className="text-xl font-bold mt-4 text-center ">
                {data.title}
              </p>
              <p className="text-sm text-slate-300 text-center">{data.title}</p>
              <p>
                {data.location} <i class="bi bi-geo-alt-fill"></i>{" "}
              </p>
              <div className="flex text-sm justify-between p-3 ">
                <p className="mt-3 text-salt-400 ">
                  <i class="bi bi-play-circle-fill"></i> Start Date <br />
                  {data.StartDate}
                </p>

                <p className="mt-3 text-salt-400 ">
                  <i class="bi bi-calendar-check-fill"></i> Duration <br />
                  {data.Duration}
                </p>

                <p className="mt-3 text-slate-400">
                  <i class="bi bi-cash"></i> Stipend <br /> {data.stipend}
                </p>
              </div>

              <div className="flex">
                <p className="flex ml-0">
                  <span className=" bg-green-200 ml-0 ">
                    <i class=" ml-0 mt-10 bi bi-stopwatch text-green-600"></i>{" "}
                    Posted 23/12/2024
                  </span>
                </p>
                <hr />
              </div>

              <div className="aboutCompany flex justify-start ">
                <p className="mt-3 text-xl font-bold text-start ">
                  About {data.company}
                </p>
                <br />
              </div>

              <div className="flex ">
                <a
                  href="https://www.linkedin.com/in/rugved-langhi-220b32240/"
                  className=" ml-3 text-blue-500 "
                >
                  {" "}
                  Linkedin page <i className=" bi bi-arrow-up-right-square"></i>
                </a>
              </div>

              <div>
                <p className="mt-3 flex text-xl font-bold">About company </p>
                <p className=" mt-4 ">{data.aboutCompany}</p>
                <a href="/Job_details" className="text-blue-500 ">
                  Learn Business Communication
                </a>
              </div>

              <div className="about-job">
                <p className="mt-3 text-xl font-bold text-start ">About Job</p>
                <p className="flex">{data.aboutJob}</p>
              </div>

              <div className="mt-3">
                <p className="flex text-xl font-bold">Who can Apply </p>
                <p className="ml-0 ">{data.Whocanapply}</p>
              </div>

              <div>
                <p className="flex mt-3 font-bold">Perks</p>
                <p className="ml-0">{data.perks}</p>
              </div>

              <div>
                <p className="flex mt-3 font-bold">Additional Information</p>
                <p className="flex">{data.AdditionalInfo}</p>
              </div>

              <div>
                <p className="flex mt-3 font-bold">Number of Openings</p>
                <p className="flex">{data.numberOfopning}</p>
                <div className=" ml-3 mt-3 mb-3 flex justify-center bg-blue-700 w-40 text-center text-white font-bold">
                  <button
                    className="flex justify-center align-middle"
                    onClick={show}
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      {isDivVisible && (
        <>
          <div className="application-page">
            <div className="bg">
              <button className="close2" onClick={hide}>
                <i className=" bi-bi-x">Close</i>
              </button>
              <p>Applying for Company Name</p>
              <p className="mt-3 text-xl font-bold text-start mb-3 ">
                About company Name
              </p>
            </div>
            <div className="moreSteps">
              <p className="font-semibold text-xl">Your Resume</p>
              <small>
                Your current resume will be submitted along with the application
              </small>
              <p className="mt-5 font-semibold text-xl  ">Cover Letter</p>
              <br />
              <p>Why should we hire for this role?</p>
              <textarea
                name="coverLetter"
                placeholder=""
                id="textare"
                value={textare}
                onChange={(e) => setTextare(e.target.value)}
              ></textarea>
              <p className="mt-5 font-semibold text-xl "> Your Availibility </p>
              <p className="">Confirm your Availibility</p>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Yes, I am available to join immediately"
                />
                Yes, I am available to join immediately
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  value="No, I am currently on notice period"
                />
                No, I am currently on notice period
              </label>
            </div>

            <div>
              <label>
                <input
                  type="radio"
                  value="No, I will have to serve notice period"
                />
                No, I will have to serve notice period
              </label>
            </div>

            <div>
              <label>
                <input type="radio" value="Other" />
                Other{" "}
                <span className="text-slate-500">
                  (Please specify your availability){" "}
                </span>
              </label>
            </div>
            <p className="mt-5 font-semibold text-xl">
              Custom resume <span className="text-slate-500">(Optional)</span>
            </p>
            <small className="text-slate-500">
              Employer can download and view this resume
            </small>

            <div className="submit flex justify-center">
              {user ? (
                <button className="submit-btn" >
                  Submit application
                </button>
              ) : (
                <Link to={"/register"}>
                  <button className="submit-btn">Submit application</button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default InternDetail;
