import React from "react";
import JobCard from "./JobCard";

/**
 * Shows the jobs list.
 * Used by both JobList and CompanyDetail to list jobs. 
 * Receives an apply func prop which will be called by JobCard on apply.
 */

const JobCardList = ({ jobs, apply }) => {
    console.debug("JobCardList", "jobs=", jobs);

    return (
        <div className="JobCardList">
            {jobs.map(job => (
                <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity}
                    companyName={job.companyName}
                />
            ))}
        </div>
    );
}

export default JobCardList;