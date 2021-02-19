import React from "react";
import PartsEtSaillies from "../components/PartsEtSaillies";

const MyParts = props => {
    return (
        <div>
            <PartsEtSaillies
                name="READY CASH"
                liste="Liste de mes parts"
                titre="MES PARTS"
                numero="N°part"
                vendre="Vendre ma part"
                prix="Prix"
                saillies="Saillie 2020"
            />
        </div>
    )
};

export default MyParts;