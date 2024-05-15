import React from 'react'
import Intern from '../Data/InternshipData'

function InternDetail() {
  return (
    <div>
        <div className="details-app m-600 text-center ">
        {
            Intern.map((data,index)=>(
                <>
                <h1 className="font-bold text-3xl text-center ">{data.title}</h1>
                <div className=" m-14 shadow-sm rounded-md border ">
                <p className="mb-4 mt-3" id="boxer"><i className="bi bi-arrow-up-right text-blue-500"></i>
                  Actively Hiring
                </p>
                <p className="text-xl font-bold mt-4 text-center ">{data.title}
                </p>
                <p className='text-sm text-slate-300 text-center'>{data.title}
                </p>
                <p>{data.location} <i class='bi bi-geo-alt-fill'></i> </p>
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

                <div className='flex'>
                <p className='flex ml-0' >
                <span className=' bg-green-200 ml-0 ' ><i class=" ml-0 mt-10 bi bi-stopwatch text-green-600"></i> Posted 23/12/2024
                </span>
                </p>
                <hr />
                </div>

                <div className="aboutCompany flex justify-start ">
                    <p className="mt-3 text-xl font-bold text-start ">About {data.company}
                </p>
                <br />
                </div>

                <div className='flex '>
                <a href='https://www.linkedin.com/in/rugved-langhi-220b32240/' className=' ml-3 text-blue-500 '> Linkedin page <i className=' bi bi-arrow-up-right-square'></i></a>
                </div>

                <div>
                    <p className='mt-3 flex text-xl font-bold'>About company </p>
                <p className=' mt-4 '>{data.aboutCompany}</p>
                <a href='/Job_details' className='text-blue-500 '>Learn Business Communication</a>
                </div>

                <div className='about-job'>
                <p className="mt-3 text-xl font-bold text-start ">About Job
                </p>
                <p className='flex'>{data.aboutJob}</p>
                </div>

                <div className='mt-3'>
                    <p className='flex text-xl font-bold'>Who can Apply </p>
                    <p className='ml-0 '>{data.Whocanapply}</p>
                </div>

                <div>
                    <p className='flex mt-3 font-bold'>Perks</p>
                <p className='ml-0'>{data.perks}</p>
                </div>
                
                <div>
                    <p className='flex mt-3 font-bold'>Additional Information</p>
                <p className='flex'>{data.AdditionalInfo}</p>
                </div>

                <div>
                    <p className='flex mt-3 font-bold'>Number of Openings</p>
                <p className='flex'>{data.numberOfopning}</p>
                <div className=' ml-3 mt-3 mb-3 flex justify-center bg-blue-700 w-40 text-center text-white font-bold'>
                <button >Apply</button>
                </div>
                </div>
                
                </div>
                
                </>
            ))
        }
        

        </div>
    </div>
    
  )
}

export default InternDetail