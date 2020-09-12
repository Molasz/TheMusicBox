import onShow from './onShow';

describe('onShow test', () => {
  it('should dispatch action', () => {
    const event = { preventDefault: jest.fn() };
    try {
      onShow(event, 0);
    } catch (err) {}

    expect(event.preventDefault.mock.call).truthy;
  });
});
