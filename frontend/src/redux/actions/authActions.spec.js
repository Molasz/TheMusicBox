// Function to test
import { getUser } from './authActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./authActions');
jest.mock('axios');

describe('Auth actions', () => {
  it('should call axios with /auth/:id', async () => {
    axios.post.mockReturnValue(
      new Promise((resolve) =>
        resolve({
          json: () => {}
        })
      )
    );
    const user = {
      sub: 13,
      nickname: 'bombasto'
    };
    await getUser(user)(jest.fn());
    expect(axios.post.mock.calls[0][0]).toEqual('/auth/13');
  });

  it('should call error action if axios throw error', async () => {
    const dispatch = jest.fn();
    axios.post.mockReturnValue(
      new Promise((resolve, reject) => reject(new Error()))
    );
    await getUser(13)(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
