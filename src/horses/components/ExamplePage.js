import React from 'react';
import AccountNavBar from "../../shared/components/AccountNavBar";
import Colors from "../../shared/constants/Colors";
import './ExamplePage.css';
import CustomCard from "../../home/components/CustomCard";

const ExamplePage = props => {
    return (
        <div>
            <AccountNavBar />
            <div className="notification-container" style={{backgroundColor: Colors.accentColor}}>
                <h5 className="horse-title">{props.titre}</h5>
                <div className="searchbar">
                    <input type="text" placeholder="RECHERCHER"/>
                </div>
                <div className="my-horses">
                    <CustomCard
                        className="custom-card"
                        name={props.name1}
                        title={props.title1}
                        infos="Documents"
                        price={props.price1}
                        source={props.source1}/>
                    <CustomCard
                        name={props.name2}
                        title={props.title2}
                        infos="Documents"
                        price={props.price2}
                        source={props.source2}
                    />
                </div>
            </div>
        </div>
    )

};

export default ExamplePage