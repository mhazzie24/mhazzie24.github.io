const blogContainer = document.getElementById('blog-posts');

blogPosts.forEach(post => {
  const article = document.createElement('article');
  article.innerHTML = `
    <img src="${post.image}" alt="${post.title}" />
    <h2>${post.title}</h2>
    <p>${post.summary}</p>
    <p class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}</p>
  `;
  blogContainer.appendChild(article);
});
