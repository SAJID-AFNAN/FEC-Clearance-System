import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <div className='w-96'>
                <img src="/src/assets/Images/Error_page.jpg" alt="image" />
            </div>
            <button className='btn btn-primary'><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default Error;