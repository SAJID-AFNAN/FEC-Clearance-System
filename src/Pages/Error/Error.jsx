import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center'>
            <h1  className='text-5xl'>Opps!! There is nothing</h1>
            <button className='btn btn-primary'><Link to="/">Go Home</Link></button>
        </div>
    );
};

export default Error;