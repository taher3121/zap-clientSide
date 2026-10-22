
import logo from '../../assets/logo.png'

const Logo = () => {
    return (

        <div className='flex items-center gap-2'>
            <img src={logo} alt="" className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
            <p className='text-lg font-bold sm:text-2xl'>ZapShift</p>
        </div>
    );
};

export default Logo;