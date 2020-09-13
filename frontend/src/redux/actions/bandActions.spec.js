// Function to test
import { getBand, searchBand, follow, sendBandEditInfo } from './bandActions';

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

  describe('Search Band test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /band/follow/:id', async () => {
      axios.get.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const text = 'klk';
      await follow(text)(jest.fn());
      expect(axios.get.mock.calls[0][0]).toEqual(`/band/follow/${text}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.get.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await follow(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe('sendBandEditInfo test', () => {
    afterEach(() => jest.clearAllMocks());
    it('should call axios with /aut/band/:id', async () => {
      axios.patch.mockReturnValue(
        new Promise((resolve) =>
          resolve({
            json: () => {}
          })
        )
      );
      const id = 1;
      await sendBandEditInfo(id)(jest.fn());
      expect(axios.patch.mock.calls[0][0]).toEqual(`/auth/band/${id}`);
    });

    it('should call error action if axios throw error', async () => {
      const dispatch = jest.fn();
      axios.patch.mockReturnValue(
        new Promise((resolve, reject) => reject(new Error()))
      );
      await sendBandEditInfo(5)(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});
