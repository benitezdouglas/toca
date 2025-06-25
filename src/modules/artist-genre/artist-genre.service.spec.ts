import { Test, TestingModule } from '@nestjs/testing';
import { ArtistGenreService } from './artist-genre.service';

describe('ArtistGenreService', () => {
  let service: ArtistGenreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtistGenreService],
    }).compile();

    service = module.get<ArtistGenreService>(ArtistGenreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
