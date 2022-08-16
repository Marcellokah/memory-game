import logo from "../images/logo.jpg";

const Header = () => {
    return (
        <div className='header-container'>
            <h2 className='header' id='headerTop'>
                <img src={logo} id='headerLogo' alt="LOGO"></img>
                <div className='title'>Memory Game</div>
            </h2>
        </div>
    );
};

export default Header;