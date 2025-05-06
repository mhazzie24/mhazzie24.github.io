const promptToTags = {
  nostalgic: ["80s", "feel-good", "retro"],
  funny: ["comedy", "quirky"],
  stylized: ["stylized", "artsy"],
  intense: ["thriller", "drama"],
  smart: ["sci-fi", "mind-bending"]
};

function recommendMovie() {
  const input = document.getElementById("prompt").value.trim().toLowerCase();
  const tagsToMatch = promptToTags[input] || [input];

  const matches = blogPosts.filter(post =>
    post.tags.some(tag => tagsToMatch.includes(tag.toLowerCase()))
  );

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = "";

  if (matches.length === 0) {
    resultBox.innerHTML = `<p>No match found for "${input}". Try another vibe!</p>`;
    return;
  }

  const randomPost = matches[Math.floor(Math.random() * matches.length)];
  resultBox.innerHTML = `
    <h2>${randomPost.title}</h2>
    <img src="${randomPost.image}" alt="${randomPost.title}" />
    <p>${randomPost.summary}</p>
    <p class="tags">${randomPost.tags.map(t => `<span class="tag">${t}</span>`).join(' ')}</p>
  `;
}
