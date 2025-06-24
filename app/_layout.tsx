import { Stack, useRouter, useRootNavigationState } from "expo-router";
import { useEffect } from "react";

function RouteGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const navigationState = useRootNavigationState();
  const isAuth = false;

  useEffect(() => {
    if (navigationState?.key && !isAuth) {
      router.replace("/auth");
    }
  }, [navigationState?.key, isAuth]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <RouteGuard>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGuard>
  );
}
