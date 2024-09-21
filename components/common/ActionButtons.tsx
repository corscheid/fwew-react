import Colors from "@/constants/Colors";
import { ResultsLanguages } from "@/constants/Language";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { FontAwesomeIconName } from "@/types/icons";
import { FontAwesome } from "@expo/vector-icons";
import { getTheme } from "@/hooks/useAuxtheme";
import { Link } from "expo-router";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from "react-native";

type ActionButtonsProps = {
  style?: ViewStyle;
};

export function ActionButtons({ style }: ActionButtonsProps) {
  const { dialectDisplay, toggleDialect } = useDialectContext();
  const auxtheme = getTheme()

  const dialectButton = (<Pressable style={styles.actionButton} onPress={toggleDialect}>
    {({ pressed }) => (
      <View
        style={{
          height: 25,
          justifyContent: "center",
          alignItems: "center",
          opacity: pressed ? 0.5 : 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
          }}
        >
          {dialectDisplay}
        </Text>
      </View>
    )}
  </Pressable>);

  const favoritesButton = (<Link href="/favorites" asChild>
    <Pressable style={styles.actionButton}>
      {({ pressed }) => (
        <FontAwesome
          name="heart"
          size={25}
          color={Colors.dark.text}
          style={{ opacity: pressed ? 0.5 : 1 }}
        />
      )}
    </Pressable>
  </Link>);

  const settingsButton = (<Link href="/settings" asChild>
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
  </Link>);

export function ActionButtons() {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 16,
        gap: 16,
        ...style,
      }}
    >
      {auxtheme.ButtonBackgroundTop(dialectButton)}
      {auxtheme.ButtonBackgroundTop(favoritesButton)}
      {auxtheme.ButtonBackgroundTop(settingsButton)}
    </View>
  );
}

function LanguageDisplay() {
  const { resultsLanguage, saveResultsLanguage } = useResultsLanguageContext();
  const Languages = ResultsLanguages.map((rl) => rl.value);
  const index = Languages.indexOf(resultsLanguage);
  const resultsFlag = FlagMap[resultsLanguage];

  const nextLanguage = () => {
    if (index < 0 || index === Languages.length - 1) {
      saveResultsLanguage(Languages[0]);
      return;
    }
    saveResultsLanguage(Languages[index + 1]);
  };

  return (
    <Pressable style={styles.actionButton} onPress={nextLanguage}>
      {({ pressed }) => (
        <View style={{ opacity: pressed ? 0.5 : 1 }}>{resultsFlag}</View>
      )}
    </Pressable>
  );
}

function DialectButton() {
  const { dialectDisplay, toggleDialect } = useDialectContext();
  return (
    <Pressable style={styles.actionButton} onPress={toggleDialect}>
      {({ pressed }) => (
        <View style={[styles.dialectButton, { opacity: pressed ? 0.5 : 1 }]}>
          <Text style={styles.dialectText}>{dialectDisplay}</Text>
        </View>
      )}
    </Pressable>
  );
}

type ABProps = {
  href: Href<string>;
  icon: FontAwesomeIconName;
};

function ActionButton({ href, icon }: ABProps) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.actionButton}>
        {({ pressed }) => (
          <FontAwesome
            name={icon}
            size={25}
            color={Colors.dark.text}
            style={{ opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 16,
    gap: 16,
  },
  dialectButton: {
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  dialectText: {
    color: "#fff",
    fontSize: 20,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
