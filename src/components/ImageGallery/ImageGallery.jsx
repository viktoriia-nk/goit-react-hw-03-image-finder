
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';

const ImageGallery =({photos})=> {
    return(
        <ul className={s.gallery}>
            {photos.map(photo=>(
                <ImageGalleryItem 
                key ={photo.id}
                webformatURL ={photo.webformatURL}
                largeImageURL ={photo.largeImageURL}
                />
            ))}
                
        </ul>
    )
    
}

ImageGallery.propTypes = {
    photos: PropTypes.array.isRequired
}

export default ImageGallery