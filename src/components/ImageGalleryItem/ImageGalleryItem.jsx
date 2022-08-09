import { render } from '@testing-library/react';
import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal/Modal';

class ImageGalleryItem  extends Component {

    state = {
        modal: false
        // =({ webformatURL, largeImageURL})=>
    }

    togleModal = () => {
        // this.setState(({ modal }) => ({ modal: !modal }));
        this.setState(({modal}) => ({
            modal: !modal
          }))
      };
   
    render(){
        return(
            <>
            <li className={s.gallery_item}
            onClick={this.togleModal}  >
                <img className={s.gallery_item__image} src={this.props.webformatURL} alt="" />
            </li>
            {this.state.modal && (<Modal largeImageURL={this.props.largeImageURL} toogleModal={this.togleModal}/>)}
            </>
            );
            
    }
}

export default ImageGalleryItem