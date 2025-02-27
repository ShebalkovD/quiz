import classes from './StartScreen.module.css'
import cat_img from '../../assets/Кот играет в викторину.svg'
import arrow_icon from '../../assets/arrow.svg'
import plus_icon from '../../assets/plus.svg'

export default function StartScreen() {
    return (
        <div className={classes.container}>
            <div className={classes.btn_wrapper}>
                <a href="" className={classes.btn}>
                    <span>Добавить викторину</span>
                    <img src={plus_icon} alt="plus" />
                </a>
                <a href="" className={classes.btn}>
                    <span>Начать</span>
                    <img src={arrow_icon} alt="arrow" />
                </a>
            </div>
            <img src={cat_img} alt="" className={classes.img} />
        </div>
    )
}