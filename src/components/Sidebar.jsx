import "@material/web/iconbutton/filled-icon-button.js";
import "../styles/training.css"

function Sidebar() {
    return (
        <>
            <div className="sidebar-buttons">
                <md-filled-button className="sidebar-button-theory">Теория</md-filled-button>
                <md-filled-button className="sidebar-button-practice">Практика</md-filled-button>
                <md-filled-button className="sidebar-button-materials">Материалы</md-filled-button>
            </div>
        </>
    )
}

export default Sidebar