import * as _ from "lodash";
import * as HeroIcons from "@heroicons/react/outline";

export const iconStringToIcon = (iconString: string): JSX.Element =>
  HeroIcons?.[
    (_.startCase(iconString ?? "").replace(/\s/g, "") ?? "Cube") + "Icon"
  ] ?? HeroIcons.CubeIcon;
