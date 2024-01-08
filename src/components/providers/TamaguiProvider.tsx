import { TamaguiProvider as Provider } from "tamagui";
import config from "../../../tamagui.config";
import "@tamagui/core/reset.css";

interface TamaguiProviderProps {
  children: React.ReactNode;
}

const TamaguiProvider = ({ children }: TamaguiProviderProps) => (
  <Provider config={config}>{children}</Provider>
);

export default TamaguiProvider;
