import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword]=useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [profilePic, setProfilePic] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541.jpg");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login or sign up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Age:', age);
    console.log('Sex:', sex);
    console.log('Contact Number:', contactNumber);
    console.log('Description:', description);
    console.log('Profile Pic:', profilePic);
  };

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    setProfilePic(URL.createObjectURL(file));
  };
// const profilePic = "https://via.placeholder.com/300*300"
  return (
    <div className='main-body'>
    <div className="container-sign">
      <h2 className="h2-container">{isSignUp ? 'Sign Up' : 'Login'}</h2>
      {isSignUp && (
        <p>Create an account to access exclusive features.</p>
      )}
        <form className="form-sign" onSubmit={handleSubmit}>
        <input
         className='login-input'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
        className='login-input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
          {isSignUp && (
            <input
              className='login-input'
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
        
        {isSignUp && (
          <>
            <input
            className='login-input'
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <select
            className='login-select'
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              required
            >
              <option value="">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <input
            className='login-input'
              type="text"
              maxLength="10"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
            <textarea className='sign-text'
              placeholder="Description about yourself"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span className="file-upload-text">Upload Profile Picture</span>
            <label className="file-upload">
              <div className='profile-pic'>
              <img src={profilePic} alt="Profile" />
              <input type="file" accept="image/*" onChange={handleProfilePicChange} />
              </div>
            </label>
          </>
        )}
        <button type="submit" className='sign-button'>{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>
      

      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </span>
      </p>
    </div>
    </div>
  );
};

export default Login;
