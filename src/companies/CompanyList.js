import React, { useState, useEffect } from "react";
import SearchForm from '../common/SearchForm';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api';
import LoadingSpinner from '../common/LoadingSpinner';

/**
 * Renders page with a list of companies.
 * Loads filtered companies on submit from search form.
 * route -> /companies
*/

const CompanyList = () => {
    console.debug("CompanyList");

    const [companies, setCompanies] = useState(null);

    //get companies from API
    useEffect(() => {
        console.debug("CompanyList useEffect");
        search();
    }, []);

    //Activated by the search from submit, reloads companies 
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return (
        <div className="CompanyList col-md-8 offset-md-2">
            <SearchForm searchFor={search} />
            {companies.length ? (
                <div className="CompanyList-list">
                    {companies.map(c => (
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={c.logoUrl}
                        />
                    ))}
                </div>
            ) : (
                <p className="lead">Results were not found!</p>
            )}
        </div>
    );
}

export default CompanyList;
