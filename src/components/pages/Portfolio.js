import React from "react";
import {Parallax} from "react-scroll-parallax";
import '../../styles/portfolio.scss';

export default class Portfolio extends React.Component {
    // Initialising the canvas
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.portfolioRef = React.createRef();
    }
    componentDidMount() {
        setTimeout(() => {
            this.portfolioRef.current.style.display = 'block';
        }, 1000);

        this.canvas = this.canvasRef.current;
        let ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight * 0.7;
        let letters = '0123456789';
        letters = letters.split('');
        let fontSize = 10,
            columns = this.canvas.width / fontSize;
        let drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
        let draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, .1)';
            ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            for (let i = 0; i < drops.length; i++) {
                let text = letters[Math.floor(Math.random() * letters.length)];
                ctx.fillStyle = '#0f0';
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                drops[i]++;
                if (drops[i] * fontSize > this.canvas.height && Math.random() > .95) {
                    drops[i] = 0;
                }
            }
        };
        setInterval(draw, 33);
    }


    render() {
        return (
            <div className="matrix-block">
                <canvas className="matrix-block_canvas" ref={this.canvasRef}> </canvas>
                <span ref={this.portfolioRef}>PORTFOLIO</span>
            </div>

        )
    }

}



