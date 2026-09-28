import { Redirect, useRouter } from 'expo-router';

import { ChildHomeScreen } from '../src/screens/ChildHomeScreen';
import { useSession } from '../src/session/SessionContext';

export default function ChildHomeRoute() {
  const router = useRouter();
  const { unlocked, profile } = useSession();

  if (!unlocked || !profile) return <Redirect href="/" />;

  return (
    <ChildHomeScreen
      profile={profile}
      onChangeProfile={() => router.replace('/profiles')}
    />
  );
}
