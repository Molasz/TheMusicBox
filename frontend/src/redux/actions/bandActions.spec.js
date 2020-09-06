// Function to test
import { getBand } from './bandActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./bandActions');
jest.mock('axios');

describe('Band actions', () => {
  it('should call axios with /band/:id', async () => {
    axios.get.mockReturnValue(
      new Promise((resolve) =>
        resolve({
          json: () => {
            data: 5;
          }
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
