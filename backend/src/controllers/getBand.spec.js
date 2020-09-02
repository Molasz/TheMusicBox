const { expect } = require('chai');
const sinon = require('sinon');

const getBand = require('./getBand');

xdescribe('GetBand test', () => {
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

    const statusStub = sinon.stub(res, 'status');

    getBand(req, res, Band);

    expect(statusStub.calledWith(200)).to.be.true;
  });
});
