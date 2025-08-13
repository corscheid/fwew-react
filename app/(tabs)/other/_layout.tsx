import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Stack, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

// https://docs.expo.dev/router/reference/faq/#missing-back-button
export const unstable_settings = {
  initialRouteName: "index",
};

export default function StackLayout() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens, names } = getUI(appLanguage, dialect);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: screens.other, headerShown: false }} />
      <Stack.Screen
        name="lenition"
        options={{ title: screens.lenition, header: () => <OtherHeader title={screens.lenition} /> }} />
      <Stack.Screen
        name="lists/index"
        options={{ title: screens.lists, header: () => <OtherHeader title={screens.lists} /> }} />
      <Stack.Screen
        name="lists/all"
        options={{ title: screens.allWords, header: () => <OtherHeader title={screens.allWords} /> }} />
      <Stack.Screen
        name="lists/cameron"
        options={{ title: screens.cameronWords, header: () => <OtherHeader title={screens.cameronWords} /> }} />
      <Stack.Screen
        name="lists/homonyms"
        options={{ title: screens.homonyms, header: () => <OtherHeader title={screens.homonyms} /> }} />
      <Stack.Screen
        name="lists/multi-ipa"
        options={{ title: screens.multiIPA, header: () => <OtherHeader title={screens.multiIPA} /> }} />
      <Stack.Screen
        name="lists/oddballs"
        options={{ title: screens.oddballs, header: () => <OtherHeader title={screens.oddballs} /> }} />
      <Stack.Screen
        name="lists/profanity"
        options={{ title: screens.profanity, header: () => <OtherHeader title={screens.profanity} /> }} />
      <Stack.Screen
        name="lists/that"
        options={{ title: screens.that, header: () => <OtherHeader title={screens.that} /> }} />
      <Stack.Screen
        name="names/index"
        options={{ title: screens.names, header: () => <OtherHeader title={screens.names} /> }} />
      <Stack.Screen
        name="names/name-full"
        options={{ title: names.full, header: () => <OtherHeader title={names.full} /> }} />
      <Stack.Screen
        name="names/name-single"
        options={{ title: names.single, header: () => <OtherHeader title={names.single} /> }} />
      <Stack.Screen
        name="names/name-alu"
        options={{ title: names.alu, header: () => <OtherHeader title={names.alu} /> }} />
      <Stack.Screen
        name="stats"
        options={{ title: screens.stats, header: () => <OtherHeader title={screens.stats} /> }} />
      <Stack.Screen
        name="valid"
        options={{ title: screens.valid, header: () => <OtherHeader title={screens.valid} /> }} />
    </Stack>
  );
}

function OtherHeader({ title }: { title: string; }) {
  const theme = useTheme();
  const router = useRouter();

  return (
    <View style={{
      height: 60,
      backgroundColor: theme.colors.card,
      justifyContent: "center"
    }}>
      <Pressable onPress={() => router.back()} style={{
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        height: "100%",
        gap: 16,
      }}>
        <FontAwesome name="arrow-left" size={24} color={theme.colors.text} />
        <Text style={{
          color: theme.colors.text,
          fontSize: 22,
        }}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
}
