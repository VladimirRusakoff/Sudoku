import Board from './Board';
import { useGame } from "../store/Game";

interface IProps {
    level: number
}

const Game = (props: IProps) => {

    // const {gameArray} = useSelector((state) => state);
    // const dispatch = useDispatch();
    
    const {gameArray, initArray, handleChangeCell} = useGame(props.level);
    
    /*const checkSudoku = () => {
        for (let i = 0; i < gameArray.length; i++) {
            for (let j = 0; j < gameArray.length; j++) {
                if (gameArray[i][j] !== solvedArray[i][j]) {
                    return false;
                } 
            }
        }
        return true;
    }*/

    return (
        <div className="game">
            <Board gameArray={gameArray} initArray={initArray} onCellChange={handleChangeCell} />
        </div>
    );
}

export default Game;