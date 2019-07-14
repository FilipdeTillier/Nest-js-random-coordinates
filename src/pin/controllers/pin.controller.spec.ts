
import { PinController } from "./pin.controller";
import { PinService } from "../services/pin.service";
import { PinGateway } from "../gateways/pin.gateway";
import Pin from "../models/pin.model";

describe('PinController', () => {
    let pinController: PinController;
    let pinService: PinService;
    let pinGateway: PinGateway;

    beforeEach(() => {
        pinGateway = new PinGateway();
        pinService = new PinService(pinGateway);
        pinController = new PinController(pinService);
    });

    describe('getAllPins', () => {
        it('should return an array of pins', async () => {
            const result: Pin[] = [{ longitude: 50, latitude: 50 }];
            jest.spyOn(pinService, 'getAllPins').mockImplementation(() => result);

            expect(await pinController.getAllPins()).toBe(result);
        });
    });
});