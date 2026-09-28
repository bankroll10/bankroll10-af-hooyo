import { render } from '@testing-library/react-native';

import { LocalizedLabel } from '../src/components/LocalizedLabel';
import { somaliCopy } from '../src/content/copy';

const unreviewed = {
  ...somaliCopy,
  gateContinue: { text: 'Sii wad', reviewed: false },
};
const reviewed = {
  ...somaliCopy,
  gateContinue: { text: 'Sii wad', reviewed: true },
};

test('production renders English for unreviewed Somali', async () => {
  const { getByText, queryByText } = await render(
    <LocalizedLabel
      copyKey="gateContinue"
      mode="production"
      entries={unreviewed}
    />,
  );

  getByText('Continue');
  expect(queryByText('Sii wad')).toBeNull();
  expect(queryByText('Needs review')).toBeNull();
});

test('production renders Somali only after review', async () => {
  const { getByText, queryByText } = await render(
    <LocalizedLabel
      copyKey="gateContinue"
      mode="production"
      entries={reviewed}
    />,
  );

  getByText('Sii wad');
  expect(queryByText('Continue')).toBeNull();
  expect(queryByText('Needs review')).toBeNull();
});

test('development marks unreviewed Somali text visibly', async () => {
  const { getByText } = await render(
    <LocalizedLabel
      copyKey="gateContinue"
      mode="development"
      entries={unreviewed}
    />,
  );

  getByText('Continue');
  getByText('Sii wad');
  getByText('Needs review');
});
