const post_id = document.querySelector('input[name="post-id"]').value;
console.log("testing");
console.log(post_id);


const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_body = document.querySelector('textarea[name="post-body"]').value;

  console.log(title);
  console.log(post_body);

  const response = await fetch(`/api/post/${post_id}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
        post_body,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  console.log(response);
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to update your post');
  }
  document.location.replace('/dashboard');
};

const deleteClickHandler = async () => {
  await fetch(`/api/post/${post_id}`, {
    method: 'DELETE'
  });

  document.location.replace('/dashboard');
};


  document.querySelector('#edit-post-form')
  document.addEventListener('submit', editFormHandler);

document.querySelector('#delete-btn')
document.addEventListener('click', deleteClickHandler);