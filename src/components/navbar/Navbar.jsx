import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <a href='#s'>Профиль</a>
            </div>
            <div>
                <a href='#s'>Сообщения</a>
            </div>
            <div>
                <a href='#s'>Новости</a>
            </div>
            <div>
                <a href='#s'>Музыка</a>
            </div>
            <div>
                <a href='#s'>Настройки</a>

            </div>
        </nav>
    )
}
export default Navbar;