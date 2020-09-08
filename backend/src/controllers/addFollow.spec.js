const { expect } = require('chai');
const sinon = require('sinon');

const addFollow = require('./addFollow');

describe('Add follow test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should call findByIdAndUpdate', () => {
    const User = { findByIdAndUpdate: () => {} };
    const req = { params: { id: 13 }, body: { band: 'band' } };

    const findByIdAndUpdateStub = sinon.stub(User, 'findByIdAndUpdate');

    addFollow(User)(req);

    expect(findByIdAndUpdateStub.called).to.be.true;
  });

  it('should respond with status 400', () => {
    const req = { params: {} };
    const res = { status: () => {} };

    const statusStub = sinon.stub(res, 'status');

    addFollow()(req, res);

    expect(statusStub.called).to.be.true;
  });
});
