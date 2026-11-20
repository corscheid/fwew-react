import React from "react";
import { Platform } from "react-native";

function GlobalStyle(): null {
  const css = "input{outline:none;}body{overflow:hidden;}";

  React.useEffect(() => {
    if (Platform.OS === "web") {
      const style = document.createElement("style");
      style.textContent = css;
      document.head.append(style);
      return () => style.remove();
    }
  }, [css]);
  return null;
}

export default React.memo(GlobalStyle);
