import { ActionButtons } from "@/components/common/ActionButtons";
import Colors from "@/constants/Colors";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { Link, Stack } from "expo-router";
import { Platform, Pressable, StyleSheet } from "react-native";

export default function StackLayout() {
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { screens, names } = i18n[appLanguage];

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: Colors.dark.text,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: screens.other,
          headerRight: ActionButtons,
        }}
      />
      <Stack.Screen
        name="lenition"
        options={{
          title: screens.lenition,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="stats"
        options={{
          title: screens.stats,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="valid"
        options={{
          title: screens.valid,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/index"
        options={{
          title: screens.lists,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/cameron"
        options={{
          title: screens.cameronWords,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/homonyms"
        options={{
          title: screens.homonyms,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/multi-ipa"
        options={{
          title: screens.multiIPA,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/oddballs"
        options={{
          title: screens.oddballs,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/profanity"
        options={{
          title: screens.profanity,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="lists/that"
        options={{
          title: screens.that,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/index"
        options={{
          title: screens.names,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-single"
        options={{
          title: names.single,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-full"
        options={{
          title: names.full,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen
        name="names/name-alu"
        options={{
          title: names.alu,
          headerRight: () => (
            <Link href="/settings" asChild>
              <Pressable style={styles.actionButton}>
                {({ pressed }) => (
                  <FontAwesome
                    name="gear"
                    size={25}
                    color={Colors.dark.text}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginRight: Platform.OS === "web" ? 0 : -16,
  },
});
