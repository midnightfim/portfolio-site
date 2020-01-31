import Typist from "react-typist";
import React from "react";


export default function TypingText(props) {

    return (
        <Typist
            avgTypingDelay={100}
            startDelay={1500}
            onTypingDone={props.onTypeDone}
            cursor={{
                blink: true,
                element: '|',
                hideWhenDone: false,
            }}>
            <span>YAROSLAV KARMANNIKOV</span>
        </Typist>
    )
}
