import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

export type ProfileId = 'one' | 'two';

type Session = {
  unlocked: boolean;
  profile: ProfileId | null;
  unlock: () => void;
  selectProfile: (profile: ProfileId) => void;
};

const SessionContext = createContext<Session | null>(null);

export function SessionProvider({ children }: PropsWithChildren) {
  const [unlocked, setUnlocked] = useState(false);
  const [profile, setProfile] = useState<ProfileId | null>(null);

  return (
    <SessionContext.Provider
      value={{
        unlocked,
        profile,
        unlock: () => setUnlocked(true),
        selectProfile: setProfile,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): Session {
  const session = useContext(SessionContext);
  if (!session) throw new Error('SessionProvider is missing');
  return session;
}
