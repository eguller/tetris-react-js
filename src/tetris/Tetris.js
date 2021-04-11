import {createState} from "./State.js";


const createTetris = ({height, width} = {height: 20, width:10}) => {
    const _height = height;
    const _width = width;
    const state = createState(_height, _width);
    let timer = null;
    const stateChangeListeners = [];

    state.onLevelChange((level) => startTimer(timer, calculateSpeedForCurrentLevel(level)))

    const startTimer = (timer, delay) => {
        if (timer != null) {
            clearInterval(timer);
        }

        const newTimer = setInterval(tick, delay)
        return newTimer;
    };

    const stopTimer = (timer) => {
        if (timer != null) {
            clearInterval(timer);
        }
    };

    const calculateSpeedForCurrentLevel = (level) => {
        return 900 * (Math.pow(0.9, level - 1));
    };


    //eslint-disable-next-line no-unused-vars
    const toString = () => {
        let str = state.visibleMatrix().map(row => {
            return row.map(tetromino => {
                if (tetromino.isFilled()) {
                    return tetromino.color;
                } else {
                    return tetromino.state;
                }
            }).join(",");
        }).join("\n");

        return str;
    };

    const tick = () => {
        if (!state.isRunning()) {
            return;
        }

        state.moveCurrentPieceDown();
        if(state.isGameOver()){
            stopTimer(timer);
        }
        notifyOnStateChangeListeners();
    };

    const notifyOnStateChangeListeners = () => {
        stateChangeListeners.forEach(fn => fn({...state}));
    };

    const resume = () => {
        state.resume();
        notifyOnStateChangeListeners();
        timer = startTimer(timer, calculateSpeedForCurrentLevel(state.level()));

    };

    const start = () => {
        if (state.isStarted()) {
            return;
        }
        state.start();
        notifyOnStateChangeListeners();
        timer = startTimer(timer, calculateSpeedForCurrentLevel(state.level()));
    };

    const pause = () => {
        if (state.isPaused()) {
            return;
        }
        if (timer != null) {
            clearInterval(timer);
        }
        state.pause();
        stopTimer(timer);
        notifyOnStateChangeListeners();
    };

    const isPaused = () => {
        return state.isPaused();
    }

    const moveLeft = () => {
        state.moveLeft();
        notifyOnStateChangeListeners();
    };

    const moveRight = () => {
        state.moveRight();
        notifyOnStateChangeListeners();
    }

    const rotateCurrentPiece = () => {
        state.rotateCurrentPiece();
        notifyOnStateChangeListeners();
    }



    return {
        onStateChange(fn) {
            stateChangeListeners.push(fn);
        },
    
        isGameOver()  {
            return state.gameOver;
        },
    
        isRunning() {
            return state.isRunning();
        },
    
        isStarted() {
            return state.isStarted();
        },
        state,
        rotateCurrentPiece,
        moveLeft,
        moveRight,
        start,
        pause,
        isPaused,
        resume,
        tick,
        height: _height,
        width: _width
    };

};





/*
class J_Piece {
    boxSize = 3;
    state1 = (x, y) => {
        state = [
            {x: x, y: y + 1}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}, 
            {x: x + 2, y: y}
        ],
        next = () => this.state2;
    };
    state2 = (x, y) => {
        state = [
            {x: x + 2, y: y}, 
            {x: x + 2, y: y + 1}, 
            {x: x + 2, y: y + 2}, 
            {x: x + 1, y: y + 2}
        ],
        next = () => this.state3;
    }; 

    state3 = (x, y) => {
        state = [
            {x: x, y: y}, 
            {x: x, y: y + 1}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}
        ],
        next = () => this.state4;
    }; 

    state4 = (x, y) => {
        state = [
            {x: x + 1, y: y}, 
            {x: x + 2, y: y}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 1, y: y + 2}
        ],
        next = () => this.state1;
    }; 

    currentState = null;

    constructor(state){
        if(state == null){
            currentState = this.state(0, 4);
        } else {
        this.currentState = state;
        }
    }

    rotate(){
        return new L_Piece(this.currentState.next());
    }
}

class O_Piece {
    boxSize = 2;
    state1 = (x, y) => {
        state = [
            {x: x, y: y}, 
            {x: x + 1, y: y}, 
            {x: x, y: y + 1}, 
            {x: x + 1, y: y + 1}
        ],
        next = () => this.state1;
    };

    currentState = null;

    constructor(state){
        if(state == null){
            currentState = this.state(0, 3);
        } else {
        this.currentState = state;
        }
    }

    rotate (){
        return new O_Piece(this.currentState.next());
    }
}

class I_Piece {
    state1 = (x, y) => {
        state = [
            {x: x, y: y}, 
            {x: x + 1, y: y}, 
            {x: x + 2, y: y}, 
            {x: x + 3, y: y}
        ],
        next = () => this.state2;
    };

    state2 = (x, y) => {
        state = [
            {x: x, y: y}, 
            {x: x, y: y + 1}, 
            {x: x, y: y + 2}, 
            {x: x, y: y + 3}
        ],
        next = () => this.state1;
    };

    currentState = null;

    constructor(state){
        if(state == null){
            currentState = this.state(0, 4);
        } else {
        this.currentState = state;
        }
    }

    rotate (){
        return new I_Piece(this.currentState.next());
    }
}

class Z_Piece {
    boxSize = 3;
    state1 = (x, y) => {
        state = [
            {x: x + 1, y: y}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}, 
            {x: x + 2, y: y + 2}
        ],
        next = () => this.state2;
    };

    state2 = (x, y) => {
        state = [
            {x: x, y: y + 2}, 
            {x: x + 1, y: y + 2}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}
        ],
        next = () => this.state1;
    };
}

class S_Piece {
    boxSize = 3;
    state1 = (x, y) => {
        state = [
            {x: x + 1, y: y}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}, 
            {x: x + 2, y: y + 2}
        ],
        next = () => this.state2;
    };

    state2 = (x, y) => {
        state = [
            {x: x, y: y + 2}, 
            {x: x + 1, y: y + 2}, 
            {x: x + 1, y: y + 1}, 
            {x: x + 2, y: y + 1}
        ],
        next = () => this.state1;
    };
}



class M_Piece {
    boxSize = 3;

};

*/

export {createTetris}
