import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const navigate = useNavigate()
  const menus = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];

  const search = (event) => {
    if(event.key === "Enter"){
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`)
    }
  }

  return (
    <div>
      <div className="menu-area">
        <ul className="menus">
            {menus.map((i)=> {
              return <li className="menu">{i}</li>
            })}
        </ul>

        <div className="search-area">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />  
          <input onKeyUp={(event)=>{search(event)}} className="search-input"></input>
        </div>
      </div>
    </div>
  );
};

export default Menu;
