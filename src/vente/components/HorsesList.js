import React from "react";
import CustomCard from "../../home/components/CustomCard";
import HorseItem from "./HorseItem";
import './HorseItem'
import './HorsesList.css'
import {useDispatch} from "react-redux";
import * as HorseActions from "../../store/actions/onsale-horses";


const HorsesList = props => {
  const dispatch = useDispatch()

   if (props.items.length === 0) {
        return (
            <div className="center">
                <h2>Aucun cheval n'a été trouvé</h2>
            </div>
        );
    }

   return (
        <div className="container-horses">
        <ul className="horses-list">
             {props.items.map(horse => {
                return (
                   <HorseItem
                        key={horse.id}
                        id={horse.id}
                        image={horse.image}
                        name={horse.name}
                        documents={horse.documents}
                        price={horse.prix}
                        bouton={props.bouton}
                        buyHorse={props.handleClick}
                   />
                )
            })}
        </ul>
        </div>


)
}

export default HorsesList;


