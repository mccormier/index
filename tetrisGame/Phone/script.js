alert(`HOW TO PLAY:

• Swipe left/right to move
• Tap to rotate
• Hold tap for soft drop
• Swipe down for hard drop

Have fun!
`);

const ROWS = 18;
const COLS = 10;
const TIME_STEP = 800;
const SOFT_DROP_TIME_STEP = 120;
const LOCK_TIME = 500;
const MAX_MOVES_UNTIL_LOCK = 15;
const SWIPE_DEADZONE = 90;
const DANGER_ROWS = 1;
const SCORE_LOCK = 5;
const SCORE_DROP = 10;
const SCORE_CLEAR = 50;

var grid;
var size;
var roundness;
var tetromino;
var updateTime;
var lockTime;
var shouldLock = false;
var movesUntilLock = MAX_MOVES_UNTIL_LOCK;
var isTouching = false;
var hasMovedTetromino = false;
var currTimeStep = TIME_STEP;
var prevMouseX, prevMouseY, prevMoveMouseX;
var tetrQueue = [];
var completeRows;
var numCleared = 0;
var score = 0;



const kicksDataI = [
    [[0,0],[0,-2],[0,1],[1,-2],[-2,1]],
    [[0,0],[0,-1],[0,2],[-2,-1],[1,2]],
    [[0,0],[0,2],[0,-1],[-1,2],[2,-1]],
    [[0,0],[0,1],[0,-2],[2,1],[-1,-2]]
]

const kicksDataJLSTZ = [
    [[0,0],[0,-1],[-1,-1],[2,0],[2,-1]],
    [[0,0],[0,1],[1,1],[-2,0],[-2,1]],
    [[0,0],[0,1],[-1,1],[2,0],[2,1]],
    [[0,0],[0,-1],[1,-1],[-2,0],[-2,-1]]
]

const kicksDataO = [[[0,0]],[[0,0]],[[0,0]],[[0,0]]];

//I J L O S T Z
const tetrConfig = [
    {shape: [[1,0],[1,1],[1,2],[1,3]], color: "#00ffff", rotX: 1.5, rotY: 1.5, kicks: kicksDataI},
    {shape: [[0,0],[1,0],[1,1],[1,2]], color: "#0000ff", rotX: 1, rotY: 1, kicks: kicksDataJLSTZ},
    {shape: [[0,2],[1,0],[1,1],[1,2]], color: "#ff8800", rotX: 1, rotY: 1, kicks: kicksDataJLSTZ},
    {shape: [[0,1],[0,2],[1,1],[1,2]], color: "#ffff00", rotX: 1.5, rotY: 0.5, kicks: kicksDataO},
    {shape: [[0,1],[0,2],[1,0],[1,1]], color: "#00ff00", rotX: 1, rotY: 1, kicks: kicksDataJLSTZ},
    {shape: [[0,1],[1,0],[1,1],[1,2]], color: "#ff0000", rotX: 1, rotY: 1, kicks: kicksDataJLSTZ},
    {shape: [[0,0],[0,1],[1,1],[1,2]], color: "#ff00ff", rotX: 1, rotY: 1, kicks: kicksDataJLSTZ}
]

class Tetromino {
    constructor(r, c, shape, hex, rotX, rotY, kicks){
        this.r = r;
        this.c = c;
        this.shape = copyMatrix(shape);
        this.color = color(hex);
        this.strokeColor = color(40);
        this.strokeColor.setAlpha(150);
        this.locked = false;
        this.rotX = rotX;
        this.rotY = rotY;
        this.kicks = kicks;
        this.rotIndex = 0;
    }
    
    showGhost(){
        let oldR = this.r;
        while(tetromino.canMove(1,0)){
            tetromino.move(1,0);
        }
        this.color.setAlpha(80);
        this.show();
        this.r = oldR;
        this.color.setAlpha(255);
    }
    
    show(){
        for(let block of this.shape){
            showBlock(this.r+block[0], this.c+block[1], this.color, this.strokeColor);
        }
    }
    
    lock(){
        for(let block of this.shape){
            let [r,c] = block;
            grid[this.r+r][this.c+c] = copyColor(this.color);
        }
        this.locked = true;
    }
    
    isPlaceableAt(row,col){
        for(let block of this.shape){
            let r = row+block[0];
            let c = col+block[1];
            if(!isValid(r,c) || grid[r][c]) {
                return false;
            }
        }
        return true;
    }
    
    canMove(row, col){
        return this.isPlaceableAt(this.r + row, this.c + col);
    }
    
    move(r, c){
        this.r += r;
        this.c += c;
    }
    
    rotate(){
        let oldShape =copyMatrix(this.shape);
        for(let pair of this.shape){
            //(x',y') = (-y,x)
            let [r,c] = pair;
            r -= this.rotY;
            c -= this.rotX;
            pair[0] = c + this.rotY;
            pair[1] = -r + this.rotX;
        }
        this.rotIndex = (this.rotIndex+1)%4;
        let valid = this.wallKickIfNeeded();
        if(valid){
            return true;
        }
        this.rotIndex = (this.rotIndex+3)%4;
        this.shape = oldShape;
        return false;
    }
    
    wallKickIfNeeded(){
        let kicks = this.kicks[this.rotIndex];
        for(let k of kicks){
            let currR = this.r + k[0];
            let currC = this.c + k[1];
            if(this.isPlaceableAt(currR, currC)){
                this.r = currR;
                this.c = currC;
                return true;
            }
        }
        return false;
    }
}

function copyMatrix(m){
    let res = [];
    for(let a of m){
        res.push(a.slice());
    }
    return res;
}

function copyColor(clr){
    return color(red(clr), green(clr), blue(clr), alpha(clr));
}

function initGrid(){
    grid = new Array(ROWS);
    for(let i = 0; i < ROWS; i++){
        grid[i] = new Array(COLS);
    }
}

function isValid(r, c){
    return r >= 0 && r < ROWS && c >= 0 && c < COLS;
}

function setup(){
    let w, h;
    let screenRatio = windowWidth/windowHeight;
    let canvasRatio = COLS/ROWS;
    if(screenRatio > canvasRatio){
        h = windowHeight;
        w = h*canvasRatio;
    } else {
        w = windowWidth;
        h = w/canvasRatio;
    }
    let c = createCanvas(w*0.95, h*0.95);
    c.parent("canvas-container");
    size = width/COLS;
    roundness = size*0.1;
    initGrid();
    completeRows = new Array(ROWS);
    updateTime = Date.now() + TIME_STEP;
    scoreElm = document.querySelector("#score span");
}

function draw(){
    if(currTimeStep != SOFT_DROP_TIME_STEP ){
        updateDifficulty();
    }
    let now = Date.now();
    if(!tetromino || tetromino.locked){
        tetromino = spawnTetromino();
        updateTime = now + currTimeStep;
    }
    
    if(now > updateTime){
        updateTime = now + currTimeStep;
        if(tetromino.canMove(1,0)){
            tetromino.move(1,0);
            shouldLock = false;
        } else if(!shouldLock){
            shouldLock = true;
            lockTime = now + LOCK_TIME;
            movesUntilLock = MAX_MOVES_UNTIL_LOCK;
        }
    }
    
    if(shouldLock && (now > lockTime || movesUntilLock == 0)){
        shouldLock = false;
        tetromino.lock();
        updateScore(Math.random()*SCORE_LOCK+1);
        markCompleteRows();
    }
    fadeOutCompleteRows();
    
    background(51,51,51);
    showGridLines();
    showGrid();
    tetromino.showGhost();
    tetromino.show();
}

function updateScore(reward){
    score += Math.floor(reward);
    scoreElm.textContent = score;
    scoreElm.className = "";
    setTimeout(()=>{scoreElm.className = "score-anim";},0);
}

function updateDifficulty(){
    // increase speed by +25% every 5 clears
    // until it reaches soft drop speed
    currTimeStep = Math.max(TIME_STEP/(1.25**Math.floor(numCleared/5)), SOFT_DROP_TIME_STEP);
}

function fadeOutCompleteRows(){
    for(let r = 0; r < ROWS; r++){
        if(!completeRows[r]) continue;
        for(let c of grid[r]){
            let a = alpha(c);
            if(a < 10){
                grid.splice(r,1);
                grid.unshift(new Array(COLS));
                completeRows[r] = false;
                numCleared++;
                updateScore(SCORE_CLEAR);
                break;
            }
            c.setAlpha(a*0.8);
        }
    }
}

function markCompleteRows(){
    for(let r = ROWS-1; r >= 0; r--){
        if(!grid[r].includes(undefined)){
            completeRows[r] = true;
        }
    }
    checkGameOver();
}

function checkGameOver(){
    if(completeRows.includes(true)) return;
    for(let r = 0; r < DANGER_ROWS; r++){
        if(grid[r].find(b => b!=undefined)){
            handleGameOver();
            return;
        }
    }
}

function handleGameOver(){
    document.getElementById("gameover").style.display = "block";
    noLoop();
}

function showGridLines(){
    strokeWeight(2);
    stroke(34,34,34);
    for(let x = 0; x < width; x += size){
        line(x,0,x,height);
    }
    for(let y = 0; y < height; y += size){
        line(0,y,width,y);
    }
}

function rotateClockwise(){
    let changed = tetromino.rotate();
    if(changed && shouldLock){
        lockTime = Date.now()+LOCK_TIME;
        movesUntilLock--;
    }
}

function moveLeft(){
    if(tetromino.canMove(0,-1)){
        tetromino.move(0,-1);
        if(shouldLock){
            lockTime = Date.now()+LOCK_TIME;
            movesUntilLock--;
        }
    }
}

function moveRight(){
    if(tetromino.canMove(0,1)){
        tetromino.move(0,1);
        if(shouldLock){
            lockTime = Date.now()+LOCK_TIME;
            movesUntilLock--;
        }
    }
}

function hardDrop(){
    while(tetromino.canMove(1,0)){
        tetromino.move(1,0);
    }
    shouldLock = false;
    tetromino.lock();
    updateScore(Math.random()*SCORE_DROP+1);
    markCompleteRows();
}

function touchStarted(e){
    // fix double trigger
    if(e.type !== "touchstart") return;
    prevMoveMouseX = mouseX;
    prevMouseX = mouseX;
    prevMouseY = mouseY;
    hasMovedTetromino = false;
}

function touchMoved(e){
    // soft drop
    if(!isTouching){
        isTouching = true;
        currTimeStep = SOFT_DROP_TIME_STEP;
        updateTime = Date.now() + currTimeStep;
    }
    if(mouseX < prevMoveMouseX-size){
        prevMoveMouseX = mouseX;
        moveLeft();
        currTimeStep = TIME_STEP;
        hasMovedTetromino = true;
    } else if(mouseX > prevMoveMouseX+size){
        prevMoveMouseX = mouseX;
        moveRight();
        currTimeStep = TIME_STEP;
        hasMovedTetromino = true;
    }
}

function touchEnded(e){
    if(e.type !== "touchend") return true;
    let dx = mouseX - prevMouseX;
    let dy = mouseY - prevMouseY;
    let distSq = dx*dx + dy*dy;
    if(distSq > SWIPE_DEADZONE**2 && dy > Math.abs(dx) && !hasMovedTetromino){ // swipe down
        hardDrop();
    } else if(distSq < 10*10 && currTimeStep != SOFT_DROP_TIME_STEP){
        rotateClockwise();
    }
    currTimeStep = TIME_STEP;
    isTouching = false;
}

function spawnTetromino(){
    if(tetrQueue.length < 7) {
        let p = randPermutation(7);
        tetrQueue = tetrQueue.concat(p);
    }
    let index = tetrQueue.shift();
    let conf = tetrConfig[index];
    return new Tetromino(0, Math.floor(COLS/2) - 2, conf.shape, conf.color, conf.rotX, conf.rotY, conf.kicks);
}

function randPermutation(n){
    let p = new Array(n);
    for(let i = 0; i < n; i++){
        p[i] = i;
    }
    for(let i = n-1; i >= 0; i--){
        let j = Math.floor(Math.random()*(i+1));
        let tmp = p[i];
        p[i] = p[j];
        p[j] = tmp;
    }
    return p;
}

function showGrid(){
    let strk = color(60,60,60,150);
    for(let i = 0; i < ROWS; i++){
        for(let j = 0; j < COLS; j++){
            let color = grid[i][j];
            if(color) {
                showBlock(i,j,color,strk);
            }
        }
    }
}

function showBlock(r,c,clr,strk){
    strokeWeight(2);
    stroke(strk);
    fill(clr);
    rect(c*size, r*size, size, size, roundness);
    
    noStroke();
    let clrLight = lerpColor(clr,color(255),0.25);
    clrLight.setAlpha(alpha(clr));
    fill(clrLight);
    rect(c*size, r*size, size, size*0.2, roundness);
    
    let clrDark = lerpColor(clr,color(0),0.25);
    clrDark.setAlpha(alpha(clr))
    fill(clrDark);
    rect(c*size, r*size+size*0.8, size, size*0.2,roundness);
}
