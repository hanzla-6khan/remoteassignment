import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedPage = () => {
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {

        const storedToken = localStorage.getItem('token');
        setToken(storedToken);

    }, []);


    const handlelogout = () => {
        try {
            localStorage.removeItem('token');
            navigate('/login')

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <button className='btn btn-danger' onClick={handlelogout}>logout</button>
                    <div className="card shadow-lg p-4 mb-4">
                        <div className="card-body">
                            <h3 className="text-center mb-4">User Dashboard</h3>
                            <div className="mb-3">
                                <h5>Username:</h5>

                            </div>
                            <div className="mb-3">
                                <h5>Token:</h5>

                                <p>{token ? token : 'No token available'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProtectedPage;
