import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "@expo/vector-icons/build/createIconSet";

type GetInnerType<S> = S extends Icon<infer G, any> ? G : never;

export type FontAwesomeIconName = GetInnerType<typeof FontAwesome>;
