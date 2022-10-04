import { CustomizeIconType } from "oh-vue-icons";
import * as Icons from "oh-vue-icons/icons";
export const findIcons = (iconNames: string[]) => {
  const usedIcons: CustomizeIconType[] = [];

  Object.entries(Icons).map((entry) => {
    if (iconNames.includes(entry[1].name)) {
      const icon = entry[0];
      usedIcons.push(Object(Icons)[icon]);
    }
  });

  return usedIcons;
};
