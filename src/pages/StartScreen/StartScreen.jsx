import classes from './StartScreen.module.css'
import { Link } from "react-router"
import cat_img from '../../assets/Кот играет в викторину.svg'
import arrow_icon from '../../assets/arrow.svg'
import plus_icon from '../../assets/plus.svg'

export default function StartScreen() {
    return (
        <div className={`${classes.container} page`}>
            <div className={classes.btn_wrapper}>
                <Link to="/create" className={classes.btn}>
                    <span>Добавить викторину</span>
                    <img src={plus_icon} alt="plus" />
                </Link>
                <Link to="/pick" className={classes.btn}>
                    <span>Начать</span>
                    <img src={arrow_icon} alt="arrow" />
                </Link>
            </div>
            <img src={cat_img} alt="" className={classes.img} />
        </div>
    )
}