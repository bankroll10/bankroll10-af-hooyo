import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { ActionButton } from '../components/ActionButton';
import { LocalizedLabel } from '../components/LocalizedLabel';
import { Screen } from '../components/Screen';
import { resolveCopy } from '../content/copy';

type Props = { onUnlock: () => void };

export function ParentGateScreen({ onUnlock }: Props) {
  const [answer, setAnswer] = useState('');
  const [showError, setShowError] = useState(false);

  function continueToProfiles() {
    if (answer.trim() === '25') {
      setShowError(false);
      onUnlock();
      return;
    }
    setShowError(true);
  }

  return (
    <Screen>
      <LocalizedLabel copyKey="appName" textStyle={styles.brand} />
      <LocalizedLabel copyKey="gateEyebrow" textStyle={styles.eyebrow} />
      <LocalizedLabel copyKey="gateTitle" textStyle={styles.title} />
      <LocalizedLabel copyKey="gateHint" />
      <LocalizedLabel copyKey="gatePrompt" />
      <TextInput
        accessibilityLabel={resolveCopy(
          'gateAnswerLabel',
          __DEV__ ? 'development' : 'production',
        )}
        keyboardType="number-pad"
        maxLength={3}
        onChangeText={setAnswer}
        onSubmitEditing={continueToProfiles}
        placeholder="?"
        style={styles.input}
        value={answer}
      />
      {showError && <LocalizedLabel copyKey="gateError" />}
      <ActionButton copyKey="gateContinue" onPress={continueToProfiles} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  brand: { color: '#096B62', fontSize: 24 },
  eyebrow: { color: '#096B62', fontSize: 16 },
  title: { fontSize: 34 },
  input: {
    borderColor: '#77BAAB',
    borderRadius: 16,
    borderWidth: 2,
    color: '#183C3B',
    fontSize: 30,
    height: 68,
    textAlign: 'center',
    width: 136,
  },
});
