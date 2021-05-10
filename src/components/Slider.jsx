const Slider = ({onClick, isLogginActive}) => {
    return (
        <div className={`slider ${isLogginActive ? "right" : "left"}`} onClick={onClick}>
            <div className="inner">
                <div className="text">{ isLogginActive ? "Register" : "Login" }</div>
            </div>
        </div>
    )
}

export default Slider;