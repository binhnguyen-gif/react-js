import { createContext, useState } from "react";
import Paragraph from "./Paragraph";
// nhận đươc vô số context khác nhau trong ThemeContext.Provider phải lấy được đúng thằng ThemeContext thì mới lấy được dữ liệu
export const ThemeContext = createContext();//Trả về object trong đó có provider và Consumer để cung cấp dữ liệu và nhận dữ liệu
function ContextComponent() {
  const [theme, setTheme] = useState("dark");
  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toogleTheme}>toogleTheme</button>
        <Paragraph />
      </div>
    </ThemeContext.Provider>
  );
}

export default ContextComponent;
// Context
// CompA => CompB => CompC
// truyền dữ liệu từ componenet cha xuống componenet con mà ko phải sử dụng props
// Truyền thẳng từ compoent A sang C mà ko cần thông qua B
// 1. Create context (ngữ cảnh tạo ra một phạm vi để truyền dữ liệu trong pham vi đó)
// 2. Provider (nhận dữ liệu)
// 3. Consumer (đẻ compC nhận được dữ liệu của CompA ) 
