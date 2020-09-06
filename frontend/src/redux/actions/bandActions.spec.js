import { getBand } from './bandActions';
import axios from 'axios';

jest.dontMock('./bandActions');
jest.mock('axios');

describe('Band actions', () => {
  it('should do something...', async () => {
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
    expect(axios.get.mock.calls[0][0]).toEqual('http://localhost:1312/band/5');
  });

  it('should do something...', async () => {
    const dispatch = jest.fn();
    axios.get.mockReturnValue(
      new Promise((resolve, reject) => reject(new Error()))
    );
    await getBand(5)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
