import { Test, TestingModule } from '@nestjs/testing';
import { ArtistGenreController } from './artist-genre.controller';

describe('ArtistGenreController', () => {
  let controller: ArtistGenreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtistGenreController],
    }).compile();

    controller = module.get<ArtistGenreController>(ArtistGenreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
