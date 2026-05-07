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
                    <h3>Индивидуальный проект</h3>
                    <h4>"Сайт для подготовки к экзаменам по математике"</h4>
                    <p>Выполнила: студентка ГАПОУ НСО "НКПиИТ"</p>
                    <p>группы ИСиП-1-9-25</p>
                    <p>Ракибова А. А.</p>
                    <p>Руководитель проекта: преподаватель математики</p>
                    <p>Шмидт. Л. П.</p>
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