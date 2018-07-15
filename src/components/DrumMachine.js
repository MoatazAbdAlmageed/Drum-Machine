import React, {Component} from 'react';

import {Howl} from 'howler';


export class DrumMachine extends Component {


    constructor(props) {
        super(props);
        this.state = {
            keys: {
                81: {
                    key: 'Q',
                    id: 'Heater-1',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
                },
                87: {
                    key: 'W',
                    id: 'Heater-2',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
                },
                69: {
                    key: 'E',
                    id: 'Heater-3',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
                },
                65: {
                    key: 'A',
                    id: 'Heater-4',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
                },
                83: {
                    key: 'S',
                    id: 'Clap',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
                },
                68: {
                    key: 'D',
                    id: 'Open-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
                },
                90: {
                    key: 'Z',
                    id: "Kick-n'-Hat",
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'

                },
                88: {
                    key: 'X',
                    id: 'Kick',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'

                },
                67: {
                    key: 'C',
                    id: 'Closed-HH',
                    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'

                },
            },
        };


    }


    handleKeyPress = (e) => {
        var keyCode =  e.keyCode || e.target.getAttribute('data-key');
        debugger
        const key = this.state.keys[keyCode];
        debugger

        if (key && key.url){
            // Setup the new Howl.
            const sound = new Howl({
                src: [key.url]
            });

// Play the sound.
            sound.play();


            /*change display*/

            this.setState({display:key.id})
            /*change style*/
            document.getElementById(key.key).classList.add('clicked')

            /*remove class after 400 MS*/
            setTimeout(function () {
                document.getElementById(key.key).classList.remove('clicked')

            },50)
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    render() {


        return (
            <div id="drum-machine">

                <div id="main">
                    <div className="row">
                        <div id="display">{this.state.display}</div>
                    </div>
                    <div className="row">

                        <div onClick={this.handleKeyPress} data-key="81"  className="drum-pad btn"  id="QPad">
                            Q
                            <audio  src={this.state.keys[81].url}  className="clip"  id="Q" >
                            </audio>

                        </div>
                        {/*81*/}
                        <div onClick={this.handleKeyPress}   data-key="87" className="drum-pad btn" id="WPad" >
                            W
                            <audio  src={this.state.keys[87].url}  className="clip" id="W">
                            </audio>
                        </div>
                        {/*87*/}
                        <div onClick={this.handleKeyPress}  data-key="69" className="drum-pad btn" id="EPad" >
                            E
                            <audio   src={this.state.keys[69].url} className="clip" id="E" >
                            </audio>

                        </div>
                        {/*69*/}
                    </div>


                    <div className="row">
                        <div onClick={this.handleKeyPress}  data-key="65" className="drum-pad btn"  id="APad" >
                            A
                            <audio  src={this.state.keys[65].url} className="clip"  id="A">
                            </audio>
                        </div>
                        {/*65*/}
                        <div onClick={this.handleKeyPress}   data-key="83" className="drum-pad btn" id="SPad" >
                           S
                            <audio   src={this.state.keys[83].url} className="clip" id="S">
                            </audio>
                        </div>
                        {/*83*/}
                        <div onClick={this.handleKeyPress}  data-key="68" className="drum-pad btn" id="DPad" >
                            D
                            <audio    src={this.state.keys[68].url} className="clip"  id="D">
                            </audio>
                        </div>
                        {/*68*/}

                    </div>


                    <div className="row">
                        <div onClick={this.handleKeyPress}  data-key="90" className="drum-pad btn"  id="ZPad">
                            Z
                            <audio   src={this.state.keys[90].url} controls className="clip" id="Z" >
                            </audio>
                        </div>
                        {/*90*/}
                        <div onClick={this.handleKeyPress}  data-key="88" className="drum-pad btn" id="XPad">
                            X
                            <audio src={this.state.keys[88].url} className="clip"  id="X">
                            </audio>
                        </div>
                        {/*88*/}
                        <div onClick={this.handleKeyPress}  data-key="67" className="drum-pad btn" id="CPad">
                            C
                            <audio  src={this.state.keys[67].url}   className="clip" id="C">
                            </audio>
                        </div>
                        {/*67*/}

                    </div>

                </div>
            </div>
        );
    }


}

export default DrumMachine;
