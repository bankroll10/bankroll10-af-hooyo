import { useRouter } from 'expo-router';

import { ParentGateScreen } from '../src/screens/ParentGateScreen';
import { useSession } from '../src/session/SessionContext';

export default function ParentGateRoute() {
  const router = useRouter();
  const { unlock } = useSession();

  return (
    <ParentGateScreen
      onUnlock={() => {
        unlock();
        router.replace('/profiles');
      }}
    />
  );
}
