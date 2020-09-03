import { getBand } from './bandActions';

import { getBandSuccess } from '../actions/bandActions';
import { error } from '../actions/errorAction';

jest.mock('bandActions');

describe('Band actions', () => {
  it('should call get band success', () => {
    const mockDispatch = jest.fn;

    getBand(0)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(getBandSuccess);
  });

  it('should call error action if fetch resolve with error', () => {
    const mockDispatch = jest.fn;

    getBand(0)(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(error);
  });
});
