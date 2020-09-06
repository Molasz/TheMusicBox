const { expect } = require('chai');
const sinon = require('sinon');

const getBand = require('./getBand');

describe('GetBand test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should respond with status 200', () => {
    const req = {
      params: { id: 1 }
    };
    const res = {
      status: () => {},
      send: () => {}
    };
    const Band = {
      findById: (id, callback) => {}
    };

    const findByIdStub = sinon.stub(Band, 'findById');
    // const findByIdMock = sinon.mock(Band.findById);

    getBand(req, res, Band);

    expect(findByIdStub.called).to.be.true;
  });
  it('should respond with status 200', () => {
    const req = { params: 0 };
    const res = { status: () => {} };

    const statusStub = sinon.stub(res, 'status');

    getBand(req, res);

    expect(statusStub.calledWith(400)).to.be.true;
  });
});
