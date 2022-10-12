const newFormHandler = async function(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;
  
    console.log(post_title);
    console.log(post_body);
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        post_title,
        post_body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
};
  
    document.querySelector('#new-post-form')
    document.addEventListener('submit', newFormHandler);