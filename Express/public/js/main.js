const output = document.querySelector('.output');
const getPostBtn = document.getElementById('get-post-btn');
const formSubmit = document.getElementById('add-post-form');

async function showPost() {
  try {
    const res = await fetch('http://localhost:8000/api/posts');
  
    if(!res.ok) { throw new Error('Failed to fetch posts'); }
  
    const posts = await res.json();
    output.innerHTML = ' ';
  
    posts.forEach((post) => {
      const postEl = document.createElement('div');
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log('Error fetching posts:', error);
  }
}

async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get('title');

  try {
    const res = await fetch('http://localhost:8000/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title})
    });

    if(!res.ok){
      throw new Error('Failed to add post');
    }

    const newPost = await res.json();

    const postEl = document.createElement('div');
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
    e.target.reset();
    showPost();
  } catch (error) {
    console.log('Error adding post', error)
  }
}

getPostBtn.addEventListener('click', showPost);
formSubmit.addEventListener('submit', addPost);
