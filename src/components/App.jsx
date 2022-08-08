import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';


import s from './App.module.css';

// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const API_KEY = '15830616-6bbce06063c91bd81d8a555c0'

export class App extends Component {

  state = {
    q: '',
    photos: [],
    page: 1,
    loader: false,
    error: null
  }

  fetchPhotos = () => {
    const { q, page } = this.state;
    this.setState({loader:true})
    
    return fetch(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok){
          return response.json()
        }
        return Promise.reject(new Error('Please, try again!'))
      })
      .then(photos => {
        if (photos.hits.length === 0) {
          alert('Please, try again!');
        }
        this.setState(prevState => ({
          photos: photos.hits
        }));
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
    return fetch(
      `https://pixabay.com/api/?q=${q}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => {
        if (response.ok){
          return response.json()
        }
        return Promise.reject(new Error('Please, try again!'))
      })
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
      return
    }

    if (prevState.page !== this.state.page ) {
      this.loadMorePhotos();
      return
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
      {this.state.photos.length !==0 && <Button 
      onMore={this.handleLoadMore}
      />}
      
     </div>
    </>
  );
}
};
