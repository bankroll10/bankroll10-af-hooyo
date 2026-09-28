import { fireEvent, render } from '@testing-library/react-native';

import { ProfilePickerScreen } from '../src/screens/ProfilePickerScreen';

test('the profile picker selects a generic demo profile', async () => {
  const onSelect = jest.fn();
  const { getByLabelText, getByText } = await render(
    <ProfilePickerScreen onSelect={onSelect} />,
  );

  getByText("Who's learning today?");
  await fireEvent.press(getByLabelText('Explorer Two'));
  expect(onSelect).toHaveBeenCalledWith('two');
});
