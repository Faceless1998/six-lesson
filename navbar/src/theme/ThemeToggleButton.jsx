import { useTheme } from "./ThemeProvider";

const ThemeToggleButton = () =>{
    const { theme, toggleTheme } = useTheme();

    return(
        <>
            <label className="switch">

                <input type="checkbox" checked={ theme === "dark" } onClick={toggleTheme} />

                <span className="slider"></span>
            </label>

        </>
    )
}

export default ThemeToggleButton;