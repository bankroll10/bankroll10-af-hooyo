import { Redirect, useRouter } from 'expo-router';

import { ProfilePickerScreen } from '../src/screens/ProfilePickerScreen';
import { useSession } from '../src/session/SessionContext';

export default function ProfilePickerRoute() {
  const router = useRouter();
  const { unlocked, selectProfile } = useSession();

  if (!unlocked) return <Redirect href="/" />;

  return (
    <ProfilePickerScreen
      onSelect={(profile) => {
        selectProfile(profile);
        router.replace('/home');
      }}
    />
  );
}
