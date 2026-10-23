document.addEventListener("DOMContentLoaded", function () {
  const blogUrl = "https://lavagnaleo.wordpress.com/";
  const apiUrl = "https://public-api.wordpress.com/rest/v1.1/sites/lavagnaleo.wordpress.com/posts/?number=5&fields=title,URL";
  const container = document.getElementById("recent-posts");
  if (!container) return;

  function showFallback(message) {
    const link = document.createElement("a");
    link.href = blogUrl;
    link.textContent = "Visit my blog";
    container.textContent = message + " ";
    container.appendChild(link);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  fetch(apiUrl, { signal: controller.signal })
    .then(response => {
      if (!response.ok) throw new Error(`WordPress API returned ${response.status}`);
      return response.json();
    })
    .then(data => {
      if (!Array.isArray(data.posts)) throw new Error("Invalid WordPress posts response");
      if (data.posts.length === 0) {
        showFallback("No recent posts found.");
        return;
      }

      const items = data.posts.slice(0, 5);
      const list = document.createElement("ul");

      items.forEach(item => {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = item.URL;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        // WordPress titles may contain HTML entities or formatting.
        link.textContent = new DOMParser().parseFromString(item.title, "text/html").body.textContent;
        li.appendChild(link);
        list.appendChild(li);
      });

      container.innerHTML = "";
      container.appendChild(list);
    })
    .catch(err => {
      showFallback("Unable to load recent posts.");
      console.error("WordPress posts fetch error:", err);
    })
    .finally(() => clearTimeout(timeout));
});
