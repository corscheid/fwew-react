import { useStaticList } from "@/hooks/useStaticList";
import { homonyms } from "fwew.js";

export const useHomonyms = () => useStaticList(homonyms);
