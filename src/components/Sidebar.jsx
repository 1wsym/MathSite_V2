import "@material/web/iconbutton/filled-icon-button.js";
import "../styles/training.css"

function Sidebar({ onTypeChange, activeType }) {
    return (
        <>
            <div className="sidebar-buttons">
                <md-filled-button
                    className={`sidebar-button-theory ${activeType === 'theory' ? 'active' : ''}`}
                    onClick={() => onTypeChange('theory')}
                >
                    Теория
                </md-filled-button>

                <md-filled-button
                    className={`sidebar-button-practice ${activeType === 'practice' ? 'active' : ''}`}
                    onClick={() => onTypeChange('practice')}
                >
                    Практика
                </md-filled-button>

                <md-filled-button
                    className={`sidebar-button-materials ${activeType === 'materials' ? 'active' : ''}`}
                    onClick={() => onTypeChange('materials')}
                >
                    Материалы
                </md-filled-button>
                <hr id="hr-sidebar" />
                <md-filled-button className="sidebar-button-calculator">Калькулятор</md-filled-button>
            </div>
        </>
    )
}

export default Sidebar