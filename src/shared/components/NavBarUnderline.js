import React, {useState} from 'react';
import './NavBarUnderline.css'
import {Link} from "react-router-dom";

const NavBarUnderline = props => {

  const [underline1, setUnderLine1] = useState(false);
  const [underline2, setUnderLine2] = useState(false);
  const [underline3, setUnderLine3] = useState(false);
  const [underline4, setUnderLine4] = useState(false);

  const onClick1 = () => {
    setUnderLine1(true);
    setUnderLine2(false);
    setUnderLine3(false);
    setUnderLine4(false)
  }

  const onClick2 = () => {
    setUnderLine1(false);
    setUnderLine2(true);
    setUnderLine3(false);
    setUnderLine4(false)
  }

  const onClick3 = () => {
    setUnderLine3(true);
    setUnderLine1(false);
    setUnderLine2(false);

    setUnderLine4(false)
  }

  const onClick4 = () => {
    setUnderLine4(true)
    setUnderLine1(false);
    setUnderLine2(false);
    setUnderLine3(false);

  }
    return (
        <div className="horse-navbar">
            <p className="paragraph1" style={underline1 ? {borderBottom: '4px solid yellow'} : {borderBottom: '4px solid black'}} onClick={onClick1}><Link to={props.navigation1}>{props.name1}</Link></p>
            <p className="paragraph2" style={underline2 ? {borderBottom: '4px solid yellow'} : {borderBottom: '4px solid black'}} onClick={onClick2}><Link to={props.navigation2} >{props.name2}</Link></p>
            <p className="paragraph3" style={underline3 ? {borderBottom: '4px solid yellow'} : {borderBottom: '4px solid black'}} onClick={onClick3}><Link to={props.navigation3} >{props.name3}</Link></p>
            <p className="paragraph4" style={underline4 ? {borderBottom: '4px solid yellow'} : {borderBottom: '4px solid black'}} onClick={onClick4}><Link to={props.navigation4} >{props.name4}</Link></p>
        </div>
    )
}

export default NavBarUnderline;
