import { Component } from 'react'; 
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

const modalWindow = document.getElementById('modal');

class Modal extends Component {
    componentDidMount() {
        const body = document.querySelector('body');
        body.style.overflow = 'hidden';
    
        window.addEventListener('keydown', this.onClicEscape);
      }
    
      componentWillUnmount() {
        const body = document.querySelector('body');
        body.style.overflow = 'auto';
    
        window.removeEventListener('keydown', this.onClicEscape);
      }
    
      onOverlayClick = e => {
        e.target === e.currentTarget && this.props.toogleModal();
      };
    
      onClicEscape = e => {
        if (e.code === 'Escape') {
          this.props.toogleModal();
        }
    }

   render(){
    const { largeImageURL } = this.props;
    return createPortal (
        <div className={s.overlay} onClick={this.onOverlayClick}>
            <div className={s.modal}>
                <img src={largeImageURL} alt="" />
             </div>
        </div>,
        modalWindow
        )
   }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired
}

export default Modal