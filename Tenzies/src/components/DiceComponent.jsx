export default function DiceComponent(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#5bc4dfff" : null
    }

    return (
        <div 
            style={styles} 
            onClick={() => props.changeState(props.id)} 
            className="dice-component-class"
        >
            <span>{props.value}</span>
        </div>
    );
};