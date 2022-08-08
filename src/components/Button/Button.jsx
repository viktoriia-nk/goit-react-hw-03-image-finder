import s from './Button.module.css';

const Button = ({onMore}) =>{
    return (
        <button className={s.button} onClick={onMore} type="button">Load More</button>
    )
}

export default Button