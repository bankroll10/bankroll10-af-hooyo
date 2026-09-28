import { StyleSheet } from 'react-native';

import { ActionButton } from '../components/ActionButton';
import { LocalizedLabel } from '../components/LocalizedLabel';
import { Screen } from '../components/Screen';
import { type ProfileId } from '../session/SessionContext';

type Props = { profile: ProfileId; onChangeProfile: () => void };

export function ChildHomeScreen({ profile, onChangeProfile }: Props) {
  return (
    <Screen>
      <LocalizedLabel copyKey="appName" textStyle={styles.brand} />
      <LocalizedLabel
        copyKey={profile === 'one' ? 'profileOne' : 'profileTwo'}
      />
      <LocalizedLabel copyKey="homeTitle" textStyle={styles.title} />
      <LocalizedLabel copyKey="homeMessage" />
      <ActionButton copyKey="homeChange" onPress={onChangeProfile} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { color: '#096B62', fontSize: 24 },
  title: { fontSize: 34 },
});
