import onSave from './onSave';

describe('onSave test', () => {
  it('should call dispatch', () => {
    const event = { preventDefault: jest.fn() };
    const userId = 1;
    const data = 'data';
    const dispatch = jest.fn();

    onSave(event, userId, data, dispatch);

    expect(dispatch.call).truthy;
  });
});
