const { expect } = require('chai');
const sinon = require('sinon');

const getBand = require('./getBand');

describe('GetBand test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findById is called', () => {
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

    getBand(Band)(req, res);

    expect(findByIdStub.called).to.be.true;
  });
});
