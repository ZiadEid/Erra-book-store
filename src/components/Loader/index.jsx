import style from './index.module.css'
const Loader = ({bg, w, h}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full max-h-[100vh] z-10 flex justify-center items-center ${bg}`}>
      <div>
      <span className={`${style.loader} ${w} ${h} block relative rounded-50`}></span>
      </div>
    </div>
  )
}

export default Loader