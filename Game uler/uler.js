let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let snake = [{ x: 10, y: 10 }];
let direction = "RIGHT";
let food = generateFood();
let gameInterval;
let gameSpeed = 100;

document.addEventListener("keydown", changeDirection);

function startGame() {
    snake = [{ x: 10, y: 10 }];
    direction = "RIGHT";
    food = generateFood();
    gameSpeed = 100;
    document.getElementById("gameOver").style.display = "none";
    gameInterval = setInterval(gameLoop, gameSpeed);
}

function gameLoop() {
    moveSnake();
    if (checkCollision()) {
        clearInterval(gameInterval);
        document.getElementById("gameOver").style.display = "block";
    } else {
        if (eatFood()) {
            food = generateFood();
        } else {
            snake.pop();
        }
        drawGame();
    }
}

function moveSnake() {
    let head = { ...snake[0] };
    
    if (direction === "UP") head.y -= 10;
    if (direction === "DOWN") head.y += 10;
    if (direction === "LEFT") head.x -= 10;
    if (direction === "RIGHT") head.x += 10;
    
    snake.unshift(head);
}

function checkCollision() {
    let head = snake[0];
    
    // Tabrakan dengan dinding
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    // Tabrakan dengan tubuh ular
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }

    return false;
}

function eatFood() {
    let head = snake[0];
    return head.x === food.x && head.y === food.y;
}

function generateFood() {
    let foodX = Math.floor(Math.random() * (canvas.width / 10)) * 10;
    let foodY = Math.floor(Math.random() * (canvas.height / 10)) * 10;
    return { x: foodX, y: foodY };
}

function changeDirection(event) {
    if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    } else if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    }
}

function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gambar ular
    ctx.fillStyle = "green";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
    }

    // Gambar makanan
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 10, 10);
}

startGame();
