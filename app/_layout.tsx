import { Stack } from 'expo-router';

import { SessionProvider } from '../src/session/SessionContext';

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SessionProvider>
  );
}
