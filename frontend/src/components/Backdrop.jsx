import ReactDOM from 'react-dom'

const backdrop = (props) => {
  return ReactDOM.createPortal(
    <div
      className='fixed top-0 left-0 w-screen h-screen z-210 opacity-70 bg-black'
      onClick={props.open}
    ></div>,
    document.getElementById('backdrop-hook')
  )
}

export default backdrop
