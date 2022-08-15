import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const LoadingSpinner = () => {
    return (
        <FontAwesomeIcon icon={solid("spinner")} />
    )
}

export default LoadingSpinner;