export default function Form(props) {
  const { onSubmit } = props
  return (
    <div className="login-div">
      <h1 className="form-h1">Log in</h1>
      <form className="login-form" action="/login/password" method="post">
        <label htmlFor="username-input" className="form-label">Username</label>
        <input id="username-input" name="username" type="text" autocomplete="username" required autofocus className="form-input"/>
        
        <label htmlFor="password-input" className="form-label">Password</label>
        <input id="password-input" name="password" type="password" autocomplete="current-password" required className="form-input"/>
        
        <button type="submit" className="form-btn" onSubmit={onSubmit}>Log In</button>
      </form>
      <p className="text-center mt-4 text-gray-500 hover:text-blue-500 active:text-blue-600">I don't have an account</p>
    </div>
  )
}