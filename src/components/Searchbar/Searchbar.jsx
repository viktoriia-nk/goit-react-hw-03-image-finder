import { Component } from "react"
import s from './Searchbar.module.css';

class Searchbar extends Component {

    state = {
        q: '',
    }

    handleQueryChange = (e) =>{
        this.setState({q: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.q.trim()===""){
            alert("Введите данные")
        }
        this.props.onSubmit(this.state.q)
        this.setState({q:''})
    }

   render(){
    return (
        <header className={s.searchbar}>
  <form className={s.form} onSubmit={this.handleSubmit}>
    <button type="submit" className={s.button}>
      <span className={s.button__label}></span>
    </button>

    <input
      className={s.input}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      name="q"
      value={this.state.q} 
      onChange = {this.handleQueryChange}
    />
  </form>
</header>
    )
   }
}

export default Searchbar