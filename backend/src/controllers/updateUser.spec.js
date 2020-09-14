const { expect } = require('chai');
const sinon = require('sinon');

const updateUser = require('./updateUser');

describe('findByIdAndUpdate test', () => {
  afterEach(() => {
    sinon.restore();
  });
  it('should findByIdAndUpdate is called with body', () => {
    const body = { name: 'name' };

    const User = {
      findByIdAndUpdate: () => {
        return {
          populate: () => {
            return {
              populate: () => {
                return {
                  exec: () => {}
                };
              }
            };
          }
        };
      }
    };
    const req = { params: { id: 1 }, body };
    const res = { status: () => {}, json: () => {} };

    const findByIdAndUpdateSpy = sinon.spy(User, 'findByIdAndUpdate');

    updateUser(User)(req, res);

    expect(findByIdAndUpdateSpy.called).to.be.true;
  });
});
