import React from "react";
import Colors from "../../shared/constants/Colors";

const ProposerPrix = props => {
    return (
        <div>
            <div className="notification-container" style={{backgroundColor: Colors.accentColor}}>
                <h5 className="horse-title">Votre vente :</h5>
                <p>{props.title}</p>
                <p>{props.prix}</p>
                <p>{props.offre}</p>
                <p>Prix : <input type="text"/></p>
            </div>
        </div>
    )
};

const styles = StyleSheet.create({

});

export default ProposerPrix