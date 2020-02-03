
import React from 'react';
import '../../styles/about.scss';
import ParticlesCanvas from "../aninations/Particles";
import Skills from "../aninations/Skills";
import TypingText from "../aninations/TypingText";
import CountUpSkills from "../subcomponents/CountUpSkills";
import AnimatedProgressProvider from "../utils/AnimatedProgressProvider";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import {easeQuadInOut} from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';

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
            <div>
                <div className="numbers-block container">
                    <CountUpSkills
                        iconPath={"rocket"}
                        title={"projects"}
                        max={10}/>
                    <CountUpSkills
                        iconPath={"coffee"}
                        title={"tea cups/day"}
                        max={4.42}
                        decimals={2}
                    />
                    <CountUpSkills
                        iconPath={"work"}
                        title={"hours worked"}
                        max={4058}
                    />
                </div>
                <div className="skills-block container">
                    <h1>Welcome to my portfolio site!</h1>
                    <h2>My name is Yaroslav and I am a web developer.</h2>
                    <h2 className="skills-block_skills">My skills:</h2>
                    <div className="pay-skill">
                        <div className="pay-skill_item">
                            <h2>PSD to HTML.</h2>
                            <br />
                            <p>
                                Coding designs of any complexity <br /><br />
                                I am very well in responsive layout and have a lot of experience with HTML and CSS. Also know about Bootstrap, Figma etc.
                            </p>
                        </div>
                        <div className="pay-skill_item">
                            <h2>Frontend dev.</h2>
                            <br />
                            <p>
                                Frontend development is my main specialization. <br /><br />
                                Participated in several large projects as an Angular and React developer.
                            </p>
                        </div>
                        <div className="pay-skill_item">
                            <h2>Backend dev.</h2>
                            <br />
                            <p>
                                I can be a Fullstack developer on your project <br /><br />
                                Have good knowledge of node.js and basic knowledge in Java. Also well in related technologies.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{width: '100px', height: '100px' }}>
                    <AnimatedProgressProvider
                        valueStart={0}
                        valueEnd={93}
                        duration={1.4}
                        easingFunction={easeQuadInOut}
                    >
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                              animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({
                                        pathTransition: "none",
                                        textColor: "#000",
                                        pathColor: "#000"})}
                                />
                            );
                        }}
                    </AnimatedProgressProvider>
                </div>
            </div>
        </div>
    );
}
