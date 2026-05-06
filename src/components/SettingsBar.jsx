import { useLocation, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSwitchTheme } from "../scripts/switchTheme";
import "../styles/settings-bar.css"
import "@material/web/iconbutton/filled-icon-button.js";

function SettingsBar() {
    const { theme, switchTheme } = useSwitchTheme();
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <>
            <div className="to-home-in-settings-bar">
                {location.pathname !== '/' && (
                    <md-filled-button className="button-to-home-in-settings-bar" onClick={() => navigate('/')}>
                        <md-icon slot="icon">chevron_left</md-icon>
                        На главную
                    </md-filled-button>
                )}
            </div>
            <div className="settings-bar">
                <div id='popUpInfo'>
                    <p>fkvdmzvmzkvm</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vitae deleniti perspiciatis quia nulla repudiandae sunt odio, ratione magni. Earum aperiam sunt accusantium illum, deserunt et a? Itaque, iusto amet.</p>
                </div>
                <md-filled-icon-button className="info-button-in-settings-bar">
                    <md-icon className="info-icon-in-settings-bar">error</md-icon>
                </md-filled-icon-button>
                <md-filled-icon-button className="theme-button-in-settings-bar" onClick={switchTheme}>
                    <md-icon className="theme-icon-in-settings-bar">
                        {theme === 'light' ? 'bedtime' : 'light_mode'}
                    </md-icon>
                </md-filled-icon-button>
            </div>
        </>
    )
}

export default SettingsBar