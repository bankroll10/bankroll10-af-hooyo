import { fireEvent, render } from '@testing-library/react-native';

import { ChildHomeScreen } from '../src/screens/ChildHomeScreen';

test('child home shows the selected demo profile and can return to the picker', async () => {
  const onChangeProfile = jest.fn();
  const { getByLabelText, getByText } = await render(
    <ChildHomeScreen profile="one" onChangeProfile={onChangeProfile} />,
  );

  getByText('Explorer One');
  getByText('Speaking adventures are coming soon.');
  await fireEvent.press(getByLabelText('Choose another learner'));
  expect(onChangeProfile).toHaveBeenCalledTimes(1);
});
