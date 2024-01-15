const Controller = ({handleSetCount}) => {

    return (
        <button onClick = {() => {handleSetCount(1)}}>+</button>
    );

};
export default Controller;