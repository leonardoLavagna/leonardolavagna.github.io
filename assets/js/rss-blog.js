document.addEventListener("DOMContentLoaded", function () {
  const feedUrl = "https://lavagnaleo.wordpress.com/feed";
  const container = document.getElementById("recent-posts");

  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`)
    .then(response => response.json())
    .then(data => {
      if (!data.items || data.items.length === 0) {
        container.innerHTML = "No recent posts found.";
        return;
      }

      const items = data.items.slice(0, 5); // limit to 5 posts
      const list = document.createElement("ul");

      items.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
        list.appendChild(li);
      });

      container.innerHTML = "";
      container.appendChild(list);
    })
    .catch(err => {
      container.innerHTML = "Failed to load posts.";
      console.error("RSS fetch error:", err);
    });
});
