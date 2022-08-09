import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({onMore}) =>{
    return (
        <button className={s.button} onClick={onMore} type="button">Load More</button>
    )
}

Button.propTypes = {
    onMore: PropTypes.func.isRequired
}

export default Button