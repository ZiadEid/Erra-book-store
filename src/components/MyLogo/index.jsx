import Logo from '../../assets/logo.png'

const MyLogo = ({className}) => {
  return (
    <>
      <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
        <img
          src={Logo}
          alt="logo"
          className={className}
        />
        <span>Books</span>
      </a>
    </>
  )
}

export default MyLogo