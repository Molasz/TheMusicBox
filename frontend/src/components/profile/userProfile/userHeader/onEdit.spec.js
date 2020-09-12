import onEdit from './onEdit';

describe('onEdit test', () => {
  it('should call dispatch', () => {
    const event = {
      preventDefault: jest.fn(),
      target: { style: { color: 'ffffff' } }
    };
    const user = 'user';
    const bio = 'bio';
    const dispatch = jest.fn();

    onEdit(event, user, bio, dispatch);

    expect(dispatch.call).truthy;
  });
});
