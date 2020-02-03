import React from "react";
import CountUp from "react-countup";
import IncreasingNumber from "../aninations/IncreasingNumber";

export default function CountUpSkills(props) {
    return (
        <div className="numbers-block_item numbers-item">
            <img className="numbers-item_icon"
                 src={"/images/" + props.iconPath + ".svg"} alt="icon"/>
            <span className="numbers-item_title">
                {props.title}
            </span>
            <span className="numbers-item_equal">
                //
            </span>
            <span className="numbers-item_number">
                {props.decimals
                    ? <IncreasingNumber decimals={props.decimals} max={props.max} />
                    : <IncreasingNumber max={props.max} />}
            </span>
        </div>
    )
};
