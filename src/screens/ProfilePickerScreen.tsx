import { StyleSheet } from 'react-native';

import { ActionButton } from '../components/ActionButton';
import { LocalizedLabel } from '../components/LocalizedLabel';
import { Screen } from '../components/Screen';
import { type ProfileId } from '../session/SessionContext';

type Props = { onSelect: (profile: ProfileId) => void };

export function ProfilePickerScreen({ onSelect }: Props) {
  return (
    <Screen>
      <LocalizedLabel copyKey="appName" textStyle={styles.brand} />
      <LocalizedLabel copyKey="profilesEyebrow" textStyle={styles.eyebrow} />
      <LocalizedLabel copyKey="profilesTitle" textStyle={styles.title} />
      <ActionButton copyKey="profileOne" onPress={() => onSelect('one')} />
      <ActionButton copyKey="profileTwo" onPress={() => onSelect('two')} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { color: '#096B62', fontSize: 24 },
  eyebrow: { color: '#096B62', fontSize: 16 },
  title: { fontSize: 34 },
});
