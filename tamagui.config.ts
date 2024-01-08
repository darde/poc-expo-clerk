import { createAnimations } from "@tamagui/animations-react-native";
import { createInterFont } from "@tamagui/font-inter";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createTamagui, styled, Text, YStack } from "tamagui";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const headingFont = createInterFont();

const bodyFont = createInterFont();

export const Main = styled(YStack, {
  flex: 1,
  // maxWidth: 960,
  justifyContent: "space-between",
});

export const Title = styled(Text, {
  fontSize: 64,
  fontWeight: "bold",
});

export const Subtitle = styled(Text, {
  color: "#38434D",
  fontSize: 36,
});

export const ButtonText = styled(Text, {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "600",
  textAlign: "center",
});

const config = createTamagui({
  light: {
    color: {
      background: "gray",
      text: "black",
    },
  },
  defaultFont: "body",
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  themes,
  tokens,
});

type AppConfig = typeof config;

// Enable auto-completion of props shorthand (ex: jc="center") for Tamagui templates.
// Docs: https://tamagui.dev/docs/core/configuration

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
