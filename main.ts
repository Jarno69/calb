radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 70)
    }
    if (receivedNumber == 3) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 70)
    }
    if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 70)
    }
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 70)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 70)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 70)
        if (receivedNumber == 1) {
            motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 0)
            motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 0)
        }
    }
})
radio.setGroup(7790)
