import { Hearts } from  'react-loader-spinner'

const Loader =()=> {
return(
    <Hearts 
        height="180"
        width="180"
        color="#81a7fb"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
    />
    )
}

export default Loader