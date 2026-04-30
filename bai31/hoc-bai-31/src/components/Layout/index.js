import Header from "../Header";
import { createContext } from "react";
export const MenuContext=createContext();
// import Menu from "../Menu";
function Layout() {
  const menu=["Trang chủ","Tin tức","Giới thiệu","Liên hệ"]
  return (
    <>
      <MenuContext.Provider value={menu}>
        <Header/>
      </MenuContext.Provider>
      <div>Main</div>
      <div>Footer</div>
    </>
  );
}
export default Layout;
