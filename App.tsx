import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

import { useCachedResources } from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./services";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <StatusBar />
        </QueryClientProvider>
      </NativeBaseProvider>
    );
  }
}
