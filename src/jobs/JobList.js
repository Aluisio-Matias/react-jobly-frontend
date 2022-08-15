import React, { useState, useEffect } from "react";
import SearchForm from "../common/SearchForm";
import JoblyApi from '../api';
import JoblyCardList from './JobCardList';
import LoadingSpinner from '../common/LoadingSpinner';

/**
 * Renders the page with the list of Jobs.
 * Loads jobs from API.
 * Re-loads filtered jobs on submit from search form.
 */

const JobList = () => {
    console.debug("JobList");

    const [jobs, setJobs] = useState(null);

    useEffect(() => {
        console.debug("JobList useEffect");
        search();
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {jobs.length
                ? <JoblyCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found!</p>
            }
        </div>
    );
}

export default JobList;