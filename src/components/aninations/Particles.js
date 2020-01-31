import Typist from "react-typist";
import React from 'react';
import '../../styles/about.scss';
import Particles from 'react-particles-js';

export default function ParticlesCanvas() {

    return (
        <div>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#5f5f5f"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "move": {
                            "direction": "top",
                            "speed": 0.15,
                            "out_mode": 'out'
                        },
                        "size": {
                            "value": 1.5
                        },
                        "line_linked": {
                            "enable_auto": false
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 0.5,
                                "opacity_min": 0.15
                            },
                            "value": 0.5,
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
                    zIndex: 1
                }}/>
        </div>
    );
}
