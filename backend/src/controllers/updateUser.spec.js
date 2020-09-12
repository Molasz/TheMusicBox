const { expect } = require('chai');
const sinon = require('sinon');

const updateUser = require('./updateUser');

describe('Update user test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should find is called', () => {
    const User = {
      findByIdAndUpdate: () => {
        return {
          populate: () => {
            return {
              exec: () => {}
            };
          }
        };
      }
    };
    const req = { params: { id: 0 }, body: {} };
    const res = {};

    const findStub = sinon.spy(User, 'findByIdAndUpdate');

    updateUser(User)(req, res);

    expect(findStub.called).to.be.true;
  });
});
