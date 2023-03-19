/**
Component Name: JobSearchbar

Props: None

This component displays a search bar with job type and location auto-complete inputs and a send button. 
It also displays links to post a resume or a job, and a list of filters for job search results.

This component is styled using TailwindCss

All data comes from data.js file
 */

import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {BsArrowRight} from "react-icons/bs"
import { jobTypeAutoCompleteData,jobLocationAutoCompleteData } from '../../data';
import { Link } from 'react-router-dom';
import { Divider, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Box } from '@mui/system';
import Filters from './Filters';
import { jobFiltersData } from '../../data';


const JobSearchbar = () => {
    return (
        <div className="w-full flex items-center justify-center border-b">
            <div className="container p-10 flex flex-col items-center justify-center">
                
                <div className="w-full top flex flex-col items-center justify-center gap-5">
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5">
                        <Autocomplete
                        id="grouped-demo"
                        options={jobTypeAutoCompleteData}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="What" />}
                        />
                        <Autocomplete
                        id="grouped-demo"
                        options={jobLocationAutoCompleteData}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Where" />}
                        />
                        <button variant="contained" className='bg-primary-500 mt-5 md:mt-0 px-10 py-3 text-white rounded-sm hover:bg-secondary-500 font-bold flex items-center gap-3'>
                            Send <BsArrowRight />
                        </button>

                    </div>
                    <div className="">
                        <p className='text-center'>
                            <Link to='./apply/employee/resume' className='text-primary-500 font-bold italic'>Post your resume</Link> - It only takes a few minutes
                        </p>
                        <p className='text-center'>
                            <Link to='./apply/employer/' className='text-primary-500 font-bold italic'>Employer: Post a Job</Link> - Your next hire is here
                        </p>
                    </div>
                </div>

                
                {/* Filters */}
                <div className="bottom w-full p-5 mt-10 flex flex-wrap justify-center items-center">
                    {
                        jobFiltersData.map((item, index)=>(
                            <Filters key={index} {...item} />
                        ))
                    }
                </div>
            </div>
            <Divider />
        </div>
    )
}


export default JobSearchbar