import Typist from "react-typist";
import React from 'react';
import '../../styles/about.scss';
import ParticlesCanvas from "../aninations/Particles";
import Skills from "../aninations/Skills";
import TypingText from "../aninations/TypingText";

export default function AboutPage() {
    const [typeDone, setTypeDone] = React.useState(false);

    const onTypeDone = () => setTypeDone(true);

    return (
        <div>
            <div className="greetings-block">
                <ParticlesCanvas />
                <TypingText onTypeDone={onTypeDone}/>
                {typeDone
                    ? <Skills />
                    : <div> </div>
                }
            </div>
        </div>
    );
}
