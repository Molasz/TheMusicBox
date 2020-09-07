// Function to test
import { getBand, searchBand } from './bandActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./bandActions');
jest.mock('axios');

describe('Band actions', () => {
  describe('Get Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      await getBand(5)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual('/band/5');
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await getBand(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('Search Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/search/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const text = 'klk';
      await searchBand(text)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual(`/band/search/${text}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await searchBand(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
