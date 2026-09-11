import type { IconType } from "react-icons";
import type { Platform } from "./PlatformSelector";
import { MdPhoneIphone } from "react-icons/md";
import {
  BsAndroid,
  BsApple,
  BsGlobe,
  BsNintendoSwitch,
  BsPlaystation,
  BsUbuntu,
  BsWindows,
  BsXbox,
} from "react-icons/bs";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms = [] }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: BsWindows,
    playstation: BsPlaystation,
    xbox: BsXbox,
    nintendo: BsNintendoSwitch,
    mac: BsApple,
    linux: BsUbuntu,
    android: BsAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="d-flex gap-2 text-body-secondary">
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} /> : null;
      })}
    </div>
  );
};
export default PlatformIconList;
