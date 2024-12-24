import { useState, useEffect } from "react";
import { generateSudoku } from './sudokuLogic';
import { getSolvedSudoku } from "./sudokuLogic";

export const useGame = (level: number) => {
    const [solvedArray, setSolvedArray] = useState<number[][]>([[]])
    const [initArray, setInitArray] = useState<number[][]>([[]])
    const [gameArray, setGameArray] = useState<number[][]>([[]])

    useEffect(() => {
        const solvArray: number[][] = getSolvedSudoku()
        setSolvedArray(solvArray)
        //
        const inArray: number[][] = generateSudoku(solvArray, level)
        setInitArray(inArray.map(row => [...row]))
        //
        setGameArray(inArray.map(row => [...row]))
    }, [level])


    const handleChangeCell = (rowIndex: number, colIndex: number, value: string) => {
        // проверяем что введено число от 0 до 9
        const numValue = parseInt(value);
        
        const gArray = [...gameArray]; // Поверхностная копия массива
        gArray[rowIndex] = [...gArray[rowIndex]]; // Копия строки
        gArray[rowIndex][colIndex] = !isNaN(numValue) && numValue >= 0 && numValue <= 9 ? Number(value) : 0; // Изменение значения
        setGameArray(gArray);
        
    };

    return {gameArray, initArray, solvedArray, handleChangeCell}
}
// Redux
// все приложение оборачивается в Provider 
// создается store 
// заполняем store начальными значениями и создаем action
// в любом компоненте можно достать store и action и можно сделать dispatch action
// хуки Redux useSelector и useDispatch