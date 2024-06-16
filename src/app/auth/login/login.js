import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postData } from '../../_services/common';
import ClipLoader from 'react-spinners/ClipLoader';

const Login = () => {
  const navigate = useNavigate();

  const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error message for the field being edited
    if (name === 'username') setUsernameError('');
    if (name === 'password') setPasswordError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    if (!formData.username) {
      setUsernameError('Username is required');
      valid = false;
    }
    if (!formData.password) {
      setPasswordError('Password is required');
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    try {
      const result = await postData('api', 'authenticate', formData);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('data', JSON.stringify(result.data));
      setResponse(result);
      setLoading(false);
      navigate('/main');
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <div id="layoutAuthentication" style={{ position: 'relative' }}>
      <div id="layoutAuthentication_content" className="login-main">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 login-left">
                <div className="login-left-box">
                  <h4 className='greencolor'>மஜ்லிசுல் மாதரிஸில் அரபிய்யா தமிழ்நாடு</h4>
                  <h4 className="gray-text fw-normal">மதரஸா மேலாண்மை அமைப்பு</h4>
                </div>
              </div>
              <div className="col-lg-6 sepline login-right">
                <form onSubmit={handleSubmit}>
                  <div className="login-box">
                    <div className="login-logo d-none" />
                    <div className="mb-3">
                      <label className='greencolor'>Username</label>
                      <input
                        className="form-control"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      {usernameError && (
                        <div className="text-danger">{usernameError}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className='greencolor'>Password</label>
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      {passwordError && (
                        <div className="text-danger">{passwordError}</div>
                      )}
                    </div>
                    <div className="fpw">
                      <a className="blue_link">Forgot Password</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                      <button
                        type="submit"
                        className="btn btn-danger btn-md ps-5 pe-5"
                        disabled={loading}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
                {loading && (
                  <div className="loading-overlay">
                    <img style={{ width: '150px', height: '150px' }} src="img/ZC9Y.gif" />
                    {/* <ClipLoader color={'#123abc'} loading={loading} cssOverride={override} size={150} /> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      {loading && <div className="loading-backdrop"></div>}
    </div>
  );
};

export default Login;
