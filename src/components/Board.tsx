import React from 'react';
import Cell from './Cell';

interface BoardProps {
    gameArray: number[][];
    initArray: number[][];
    onCellChange: (rowIndex: number, colIndex: number, value: string) => void;
}

const Board: React.FC<BoardProps> = ({ gameArray, initArray, onCellChange }) => {

    return (
        <div className="board">
            {gameArray.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((value, colIndex) => (
                        <Cell 
                            key={`${rowIndex}-${colIndex}`} 
                            value={value}
                            isInitial={initArray[rowIndex][colIndex] !== 0} // передаем флаг, ялвялется ли ячейка начальной
                            onChange={(value) => onCellChange(rowIndex, colIndex, value)} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Board;