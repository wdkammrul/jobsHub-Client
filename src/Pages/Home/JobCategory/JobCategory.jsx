import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SingleJobCategory from "../../SingleJobCategory/SingleJobCategory";
import { useEffect, useState } from 'react';

const JobCategory = () => {

    const [jobCategoryData, setJobCategoryData] = useState(null)
    const [visibleJobs, setVisibleJobs] = useState(4);

    console.log(jobCategoryData)

    useEffect(() => {
        fetch('https://b8a11-server-side-wdkammrul.vercel.app/allJobs')
            .then(res => res.json())
            .then(data => setJobCategoryData(data))
    }, [])

    const showMoreJobs = () => {
        setVisibleJobs(prevVisibleJobs => prevVisibleJobs + 4);
    };


    const navLinks = <>
        <Tab >All Jobs</Tab>
        <Tab >Full Time</Tab>
        <Tab >Remote</Tab>
        <Tab >Part Time</Tab>
        <Tab >Hybrid</Tab>
        

    </>

    return (
        <Tabs className='w-[400px] md:w-[740px] lg:w-full mx-auto mt-16'>
            <div>
                <h1 className="text-5xl md:text-6xl font-bold text-center ">Job By Category</h1>
            </div>
            <TabList className='text-center mt-10 md:text-3xl'>
                {navLinks}
            </TabList>
            {/* <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {
                        jobCategoryData?.map(job => <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>)
                    }
                </div>
            </TabPanel> */}


            <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {jobCategoryData?.slice(0, visibleJobs).map(job => (
                        <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>
                    ))}
                </div>
                {visibleJobs < jobCategoryData?.length && (
                    <button onClick={showMoreJobs} className="btn btn-secondary flex mx-auto w-48 mt-8 p-4">
                        See More
                    </button>
                )}
            </TabPanel>

            <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {
                        jobCategoryData?.filter(jobData => jobData?.category === 'fullTime').map(job => <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {
                        jobCategoryData?.filter(jobData => jobData?.category === 'hybrid').map(job => <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {
                        jobCategoryData?.filter(jobData => jobData?.category === 'remote').map(job => <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>)
                    }
                </div>
            </TabPanel>
            <TabPanel>
                <div className='grid md:grid-cols-2 p-5 gap-4 container mx-auto'>
                    {
                        jobCategoryData?.filter(jobData => jobData?.category === 'partTime').map(job => <SingleJobCategory key={job._id} jobData={job}></SingleJobCategory>)
                    }
                </div>
            </TabPanel>
        </Tabs>

    );
};

export default JobCategory;