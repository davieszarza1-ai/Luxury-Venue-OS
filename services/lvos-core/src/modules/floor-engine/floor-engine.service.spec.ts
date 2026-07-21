import { Test, TestingModule } from '@nestjs/testing';
import { FloorEngineService } from './floor-engine.service';

describe('FloorEngineService', () => {
  let service: FloorEngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FloorEngineService],
    }).compile();

    service = module.get<FloorEngineService>(FloorEngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
