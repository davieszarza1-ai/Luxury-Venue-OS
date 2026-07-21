import { Test, TestingModule } from '@nestjs/testing';
import { FloorEngineController } from './floor-engine.controller';

describe('FloorEngineController', () => {
  let controller: FloorEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FloorEngineController],
    }).compile();

    controller = module.get<FloorEngineController>(FloorEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
