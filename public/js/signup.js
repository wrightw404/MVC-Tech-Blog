const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const usernameEl = document.querySelector('#username-input-signup').value.trim();
    const passwordEl = document.querySelector('#password-input-signup').value.trim();
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        usernameEl, passwordEl
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to sign up');
    }
  };
  
    document.querySelector('.signup-form')
    document.addEventListener('submit', signupFormHandler);