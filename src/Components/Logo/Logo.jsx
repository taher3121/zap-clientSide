
import logo from '../../assets/logo.png'

const Logo = () => {
    return (

        <div className='flex items-end'>
            <img src={logo} alt="" />
            <p className='font-bold text-2xl -mx-4.5'>ZapShift</p>
        </div>
    );
};

export default Logo;