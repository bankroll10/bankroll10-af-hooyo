import { type PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export function Screen({ children }: PropsWithChildren) {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.card}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    backgroundColor: '#EAF8F2',
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#C5E9D9',
    borderRadius: 28,
    borderWidth: 2,
    gap: 20,
    maxWidth: 560,
    padding: 32,
    width: '100%',
  },
});
