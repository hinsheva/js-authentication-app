const Header = ({isLoginActive}) => {
    return (
        <header>{ isLoginActive ? "LOGIN" : "REGISTER" }</header>
    )
}

export default Header;