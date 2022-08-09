
import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem extends Component {

    state = {
        modal: false
    }

    togleModal = () => {
        this.setState(({modal}) => ({
            modal: !modal
          }))
      };
   
    render(){

        const {webformatURL, largeImageURL} = this.props
        return(
            <>
            <li className={s.gallery_item}
            onClick={this.togleModal}  >
                <img className={s.gallery_item__image} src={webformatURL} alt="" />
            </li>
            {this.state.modal && (<Modal largeImageURL={largeImageURL} toogleModal={this.togleModal}/>)}
            </>
            )
            
    }
}

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired
}

export default ImageGalleryItem