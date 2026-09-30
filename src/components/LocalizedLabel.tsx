import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
} from 'react-native';

import {
  resolveCopy,
  somaliCopy,
  type CopyKey,
  type CopyMode,
  type SomaliCopy,
} from '../content/copy';

type Props = {
  copyKey: CopyKey;
  mode?: CopyMode;
  entries?: SomaliCopy;
  textStyle?: StyleProp<TextStyle>;
};

export function LocalizedLabel({
  copyKey,
  mode = __DEV__ ? 'development' : 'production',
  entries = somaliCopy,
  textStyle,
}: Props) {
  const translated = entries[copyKey];

  return (
    <View style={styles.container}>
      <Text style={[styles.primary, textStyle]}>
        {resolveCopy(copyKey, mode, entries)}
      </Text>
      {mode === 'development' && (
        <View style={styles.translationRow}>
          <Text style={styles.somali}>{translated.text}</Text>
          {!translated.reviewed && (
            <Text style={styles.reviewMarker}>Needs review</Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', gap: 4 },
  primary: {
    color: '#183C3B',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  translationRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  somali: { color: '#315B59', fontSize: 15, textAlign: 'center' },
  reviewMarker: {
    backgroundColor: '#FFF0CA',
    borderRadius: 8,
    color: '#694600',
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
