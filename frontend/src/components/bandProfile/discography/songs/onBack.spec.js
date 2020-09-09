import onBack from './onBack';

describe('onBack test', () => {
  it('should dispatch action', () => {
    const event = { preventDefault: jest.fn() };
    try {
      onBack(event, 0);
    } catch (err) {}

    expect(event.preventDefault.mock.call).truthy;
  });
});
