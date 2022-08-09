import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import fetchPhotosByApi from '../../src/Api';


import s from './App.module.css';



export class App extends Component {

  state = {
    q: '',
    photos: [],
    page: 1,
    loader: false,
    error: null
  }

  fetchPhotos = () => {
    const {q, page} = this.state;

    this.setState({loader:true})
    // console.log(q, page);
    fetchPhotosByApi(q, page)
      .then(photos => {
        if (photos.hits.length === 0) {
          alert('Please, try again!');
        }
        this.setState({
          photos: photos.hits
        });
      })
      .catch(error => this.setState({error}))
      .finally(()=> this.setState({loader: false}))
  };

  handleFormSubmit =(q)=>{
    this.setState({
      q: q,
      photos: [],
      page: 1
    })
    
  }

  loadMorePhotos = () => {
    const { q, page } = this.state;
    this.setState({loader:true})

   fetchPhotosByApi(q, page)
      .then(photos => {
        this.setState(prevState => ({
          photos: [...prevState.photos, ...photos.hits]
        }));
      })
      .catch(error => this.setState({error}))
      .finally(()=> this.setState({loader: false}))
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      this.fetchPhotos()
      
    }

    if (prevState.page !== this.state.page ) {
      this.loadMorePhotos();
      
    }
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  

render() {
  return (
    <>
     <div className={s.app}>
     <Searchbar onSubmit={this.handleFormSubmit}/>
      {this.state.error && <h1>{this.state.error.message};</h1>}
      <ImageGallery photos={this.state.photos} />
      {this.state.loader && <Loader />}
      {this.state.photos.length >= 12 && <Button 
      onMore={this.handleLoadMore}
      />}
      
     </div>
    </>
  );
}
};
