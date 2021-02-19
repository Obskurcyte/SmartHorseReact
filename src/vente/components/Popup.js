import React from "react";
import 'Popup.css'
const Popup = props => {
    return (
        <div className="modal" id="modal">
            <div className="modal-content">
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

export default Popup
