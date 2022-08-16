import Card from "./Card";

const Gameboard = (props) => {
    return (
        <div className='board'>
            <Card {...props} />
        </div>
    );
};

export default Gameboard;