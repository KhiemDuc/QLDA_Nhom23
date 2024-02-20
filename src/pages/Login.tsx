import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Gọi API để xác thực đăng nhập
      // Ví dụ: fetch, Axios, hoặc các thư viện HTTP khác
      console.log('Login request:', { username, password });

      // Sau khi xác thực thành công, bạn có thể thực hiện các hành động khác ở đây
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Username" value={username} onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder="Password" value={password} onChange={handlePasswordChange} />
                </div>
                <button type="submit" className="btn btn-sm btn-success w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
