import React, { useState } from "react";

//Renders the search form and calls searchFor function prop that runs in 
//a parent component to do the search.

const SearchForm = ({ searchFor }) => {
    console.debug("SearchForm", "searchFor=", typeof searchFor);

    const [searchTerm, setSearchTerm] = useState("");

    //Tells the parent to do the search
    const handleSubmit = (evt) => {
        //handles mistakenly atempt to search for just spaces.
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim());
    }

    //Update the form fields
    const handleChange = (evt) => {
        setSearchTerm(evt.target.value);
    }

    return (
        <div className="mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg flex-grow-1"
                    name="searchTerm"
                    placeholder="Enter search term.."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">
                    Submit
                </button>
            </form>
        </div>
    )

}

export default SearchForm;