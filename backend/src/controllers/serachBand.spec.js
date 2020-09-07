const { expect } = require('chai');
const sinon = require('sinon');

const searchBand = require('./searchBand');

describe('Search Band test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find is called', () => {
    const Band = {
      find: () => {}
    };
    const req = {
      params: { text: 'klk' }
    };
    const res = {
      status: () => {}
    };

    const findStub = sinon.stub(Band, 'find');

    searchBand(Band)(req, res);

    expect(findStub.called).to.be.true;
  });
  it('should respond with status 400', () => {
    const Band = {
      find: () => {}
    };
    const req = {
      params: {}
    };
    const res = {
      status: () => {}
    };

    const statusStub = sinon.stub(res, 'status');

    searchBand(Band)(req, res);

    expect(statusStub.calledWith(400)).to.be.true;
  });
});
