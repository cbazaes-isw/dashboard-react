import Script from "next/script";
import SideNavigationBar from "./SideNavigationBar";
import Toggle from "./Toggle";

const SideBar = () => {
  return (
    <>
      <aside>
        <Toggle />
        <SideNavigationBar />
      </aside>
      <Script src="/menu.js" />
    </>
  );
};

export default SideBar;
