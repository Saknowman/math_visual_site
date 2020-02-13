export default {
    to_radians(degrees) {
        return degrees * (Math.PI / 180);
    },

    round(number, digit) {
        const mag = 10 ** digit
        return Math.round(number * mag) / mag;
    }
}