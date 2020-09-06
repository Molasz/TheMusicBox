// Function to test
import { getBand } from './authActions';

//Mock dependecies
import axios from 'axios';

jest.dontMock('./authActions');
jest.mock('axios');

describe('Band actions', () => {
  it('should call axios with /band/:id', async () => {});

  it('should call error action if axios throw error', async () => {});
});
