import { getBand } from './bandActions';

describe('Band actions', () => {
  it('should defined', () => {
    expect(getBand).toBeDefined();
  });

  it('should throw error if fetch resolve with error', () => {});
});
