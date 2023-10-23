import { isMobile } from "react-device-detect";

import MobileGallery from "./Gallery/MobileGallery";
import DesktopScroll from "./Gallery/DesktopScroll";

export default function ScrollGallery() {
  return <section>{!isMobile ? <DesktopScroll /> : <MobileGallery />}</section>;
}
