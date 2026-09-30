import { fireEvent, render } from '@testing-library/react-native';

import { ParentGateScreen } from '../src/screens/ParentGateScreen';

test('the adult check opens profiles only after the correct answer', async () => {
  const onUnlock = jest.fn();
  const { getByLabelText, getByText } = await render(
    <ParentGateScreen onUnlock={onUnlock} />,
  );

  await fireEvent.press(getByLabelText('Continue'));
  getByText('Try again with a grown-up.');
  expect(onUnlock).not.toHaveBeenCalled();

  await fireEvent.changeText(
    getByLabelText('Answer to the parent check'),
    '25',
  );
  await fireEvent.press(getByLabelText('Continue'));
  expect(onUnlock).toHaveBeenCalledTimes(1);
});
