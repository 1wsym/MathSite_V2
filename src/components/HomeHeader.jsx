import { useNavigate } from 'react-router-dom';
import "../styles/home-header.css"
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/icon/icon.js";

function HomeHeader() {
    const navigate = useNavigate()

    return (
        <>
            <header className="home-header">
                <div>
                    <h2>Математика: комплексная подготовка</h2>
                    <p>Интерактивная платформа для комплексной подготовки к экзаменам, объединяющая теорию, практику и инструменты для расчетов</p>
                </div>
                <div className="buttons-in-home">
                    <md-filled-button className="start-button-in-home" onClick={() => navigate('/training')}>
                        <md-icon slot="icon">chevron_right</md-icon>
                        Начать подготовку
                    </md-filled-button>
                    <md-outlined-button className="outlined-buttons-in-home">Калькулятор</md-outlined-button>
                    {/* <md-outlined-button className="outlined-buttons-in-home">Новости</md-outlined-button> */}
                </div>
            </header>
        </>
    )
}

export default HomeHeader