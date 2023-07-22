import {useContext} from 'react'
import '../App.css';
import { ThemeContext } from './ThemeContext';


function Paragraph () {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <p className={context.theme}>Context provides a way to pass data throught</p>
    )

}

export default Paragraph


