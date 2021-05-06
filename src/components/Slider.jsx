const Slider = ({containerRef, onClick, isLogginActive}) => {
    return (
        <div className={`slider ${isLogginActive ? "right" : "left"}`} ref={containerRef} onClick={onClick}>
            <div className="inner">
                <div className="text">{ isLogginActive ? "Register" : "Login" }</div>
            </div>
        </div>
    )
}

export default Slider;