import React from "react";
import PartsEtSaillies from "../components/PartsEtSaillies";

const MySaillies = props => {
    return (
        <div>
            <PartsEtSaillies
                name="READY CASH"
                liste="Liste de mes saillies"
                titre="MES PARTS"
                numero="N°part"
                vendre="Vendre ma part"
                prix="Réservation"
                saillies="Poulain vivant"
            />
        </div>
    )
};

export default MySaillies;