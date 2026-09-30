import { Pressable, StyleSheet } from 'react-native';

import { resolveCopy, type CopyKey } from '../content/copy';
import { LocalizedLabel } from './LocalizedLabel';

type Props = {
  copyKey: CopyKey;
  onPress: () => void;
};

export function ActionButton({ copyKey, onPress }: Props) {
  return (
    <Pressable
      accessibilityLabel={resolveCopy(
        copyKey,
        __DEV__ ? 'development' : 'production',
      )}
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <LocalizedLabel copyKey={copyKey} textStyle={styles.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#F5AD69',
    borderRadius: 18,
    justifyContent: 'center',
    minHeight: 68,
    paddingHorizontal: 24,
    paddingVertical: 12,
    width: '100%',
  },
  pressed: { opacity: 0.75 },
  text: { color: '#3D2412', fontSize: 19 },
});
