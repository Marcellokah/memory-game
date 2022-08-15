import logo from "../images/logo.jpg";

const Header = () => {
    return (
        <div className='ui internally celled centered grid'>
            <h2 className='ui icon centered header' id='headerTop'>
                <img src={logo} id='headerLogo' alt="LOGO"></img>
                <div className='title'>Memory Game</div>
            </h2>
        </div>
    );
};

export default Header;