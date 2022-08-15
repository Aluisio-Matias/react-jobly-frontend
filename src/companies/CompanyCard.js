import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Card, CardTitle, CardFooter } from "reactstrap";

/**
 * 
 */

const CompanyCard = ({ name, description, logoUrl, handle }) => {

    return (
        <Link to={`/companies/${handle}`}>
            <Card>
                <CardTitle>
                    {name}
                    {logoUrl && <img src={logoUrl}
                        alt={name}
                        className="float-right ml-5"
                    />}
                </CardTitle>
                <CardFooter>
                    {description}
                </CardFooter>
            </Card>
        </Link>
    );
}

export default CompanyCard;