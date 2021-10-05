import React from "react";
export default function Filter_by_floors(props){
    var floors=props.match.params.floor;
    return (
        <div>
        Number of Floors : {floors}
        </div>
    );
}