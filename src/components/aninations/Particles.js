import Typist from "react-typist";
import React from 'react';
import '../../styles/about.scss';
import Particles from 'react-particles-js';
import {Parallax} from "react-scroll-parallax";

export default function ParticlesCanvas() {

    return (
            <Parallax className="parallax-custom-class" y={[-50, 35]} tagOuter="figure">
                <Particles
                    className="parallax"
                    params={{
                        "particles": {
                            "number": {
                                "value": 100,
                                "density": {
                                    "enable": true
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "star"
                            },
                            "move": {
                                "direction": "random",
                                "speed": 1,
                                "out_mode": 'out'
                            },
                            "size": {
                                "anim": {
                                    "enable": true,
                                    "speed": 0.8,
                                    "size_min": 0.8
                                },
                                "value": 3
                            },
                            "line_linked": {
                                "enable": false,
                                "width": 0
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 0.5,
                                    "opacity_min": 0.35
                                },
                                "value": 0.8,
                                "random": true
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                    }}/>
            </Parallax>
    );
}
