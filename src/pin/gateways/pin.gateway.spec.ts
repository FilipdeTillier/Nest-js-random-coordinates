import { Test, TestingModule } from '@nestjs/testing';
import { PinGateway } from './pin.gateway';

describe('PinGateway', () => {
  let gateway: PinGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinGateway],
    }).compile();

    gateway = module.get<PinGateway>(PinGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
