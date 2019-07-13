export default class Pin {
    constructor(
        public latitude: number,
        public longitude: number,
    ) { }

    public updatePosition(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
        return { latitude: this.latitude, longitude: this.longitude }
    }
}