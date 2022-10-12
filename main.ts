function move_y(speed: number) {
    SuperBit.MotorRun(SuperBit.enMotors.M1, speed)
    SuperBit.MotorRun(SuperBit.enMotors.M2, speed)
    SuperBit.MotorRun(SuperBit.enMotors.M3, speed)
    SuperBit.MotorRun(SuperBit.enMotors.M4, speed)
}
function shift_left() {
    SuperBit.MotorRun(SuperBit.enMotors.M1, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M4, -255)
}
function shift_right() {
    SuperBit.MotorRun(SuperBit.enMotors.M1, 255)
    SuperBit.MotorRun(SuperBit.enMotors.M2, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M3, -255)
    SuperBit.MotorRun(SuperBit.enMotors.M4, 255)
}
radio.onReceivedValue(function (name, value) {
    mapValueToVar(name, value)
    if (left && !right) {
        shift_left()
    } else if (!left && right) {
        shift_right()
    } else {
        move_y(angleToSpeed(y))
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
function angleToSpeed(angle: number) {
    return angle / 180 * 255
}
let right = 0
let left = 0
let x = 0
let y = 0
radio.setGroup(1)
