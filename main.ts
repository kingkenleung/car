
function push(speed: number, turnIndex: number) {
    // speed: -255 to 255
    // turnIndex: -1 to 1
    torgue = 100
    if (turnIndex <= -0.15) {
        // front-left
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed + torgue * Math.abs(turnIndex))
        // hind-left
        SuperBit.MotorRun(SuperBit.enMotors.M2, speed + torgue * Math.abs(turnIndex))
        // front-right
        SuperBit.MotorRun(SuperBit.enMotors.M3, speed - torgue * Math.abs(turnIndex))
        // hind-right
        SuperBit.MotorRun(SuperBit.enMotors.M4, speed - torgue * Math.abs(turnIndex))
    } else if (turnIndex >= 0.15) {
        // front-left
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed - torgue * Math.abs(turnIndex))
        // hind-left
        SuperBit.MotorRun(SuperBit.enMotors.M2, speed - torgue * Math.abs(turnIndex))
        // front-right
        SuperBit.MotorRun(SuperBit.enMotors.M3, speed + torgue * Math.abs(turnIndex))
        // hind-right
        SuperBit.MotorRun(SuperBit.enMotors.M4, speed + torgue * Math.abs(turnIndex))
    } else {
        // front-left
        SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
        // hind-left
        SuperBit.MotorRun(SuperBit.enMotors.M2, speed)
        // front-right
        SuperBit.MotorRun(SuperBit.enMotors.M3, speed)
        // hind-right
        SuperBit.MotorRun(SuperBit.enMotors.M4, speed)
    }
}
function shift_left() {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
}
function shift_right() {
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M4, -255)
}
radio.onReceivedValue(function (name, value) {
    mapValueToVar(name, value)
    if (left && !(right)) {
        shift_left()
    } else if (!(left) && right) {
        shift_right()
    } else {
        push((y + 90) / 180 * 255, (x + 40) / 180)
    }
})
function mapValueToVar(key: string, value: number) {
    if (key == "x") {
        x = value
    } else if (key == "y") {
        y = value
    } else if (key == "left") {
        left = value
    } else if (key == "right") {
        right = value
    }
}
let x = 0
let y = 0
let right = 0
let left = 0
let torgue = 0
radio.setGroup(1)
