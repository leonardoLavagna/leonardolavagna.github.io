---
layout: single
title: "Applets"
permalink: /applets/
toc: false
---

This is a curated collection of experimental projects spanning mathematics, machine learning, games, and quantum computing. Over the years, I’ve developed—or supervised the development of—these interactive tools, simulations, and apps to explore complex ideas through hands-on experimentation. Each project represents a fusion of curiosity and computation, aimed at making advanced concepts more intuitive, engaging, and accessible.
 
These are embedded interactive apps you should be able to run directly in this website. If you experience problems try to clear the cookies and disable your adblock. If the problems persist you can also try changing browser or check the apps directly in [my GitHub profile](https://github.com/leonardoLavagna/leonardoLavagna).

<div class="applets">
  {% assign apps = site.data.applets | default: empty %}
  {% if apps and apps.size > 0 %}
    {% for app in apps %}
      {% assign idx = forloop.index0 %}
      {% assign embed_url = app.url %}
      {% if embed_url contains '?' %}
        {% assign embed_url = embed_url | append: '&embed=true' %}
      {% else %}
        {% assign embed_url = embed_url | append: '?embed=true' %}
      {% endif %}

      {%- comment -%}
        Build a direct URL (remove ?embed=true or &embed=true for waking in a new tab)
      {%- endcomment -%}
      {% assign direct_url = app.url
          | replace: '?embed=true',''
          | replace: '&embed=true',''
      %}

      <section class="applet">
        <h2>{{ app.title }}</h2>
        {% if app.description %}
          <p>{{ app.description }}</p>
        {% endif %}

        <div class="applet-actions" style="margin: 0 0 0.5rem 0;">
          <a
            href="{{ direct_url }}"
            target="_blank"
            rel="noopener"
            class="btn btn--primary wake-btn"
            data-iframe-id="applet-iframe-{{ idx }}"
            data-embed-url="{{ embed_url }}"
          >
            🚀 Wake in new tab
          </a>
          <a
            href="#"
            class="btn btn--inverse refresh-btn"
            data-iframe-id="applet-iframe-{{ idx }}"
            data-embed-url="{{ embed_url }}"
          >
            ↻ Refresh now
          </a>
          <small id="applet-status-{{ idx }}" class="applet-status" style="margin-left: .5rem;"></small>
        </div>

        <div class="iframe-wrap" style="min-height: {{ app.height | default: 720 }}px">
          <iframe
            id="applet-iframe-{{ idx }}"
            src="{{ embed_url }}"
            loading="lazy"
            allow="clipboard-write; fullscreen"
            referrerpolicy="no-referrer-when-downgrade"
            title="{{ app.title }}"
            style="width:100%; height:{{ app.height | default: 720 }}px; border:0;"
          ></iframe>
        </div>
      </section>
    {% endfor %}
  {% else %}
    <p>No applets listed yet.</p>
  {% endif %}
</div>

<script>
// Minimal JS to: (1) open direct URL in new tab, (2) auto-reload the iframe a few times.
(function() {
  function cacheBusted(url) {
    try {
      const u = new URL(url, window.location.href);
      u.searchParams.set('_ts', Date.now().toString());
      return u.toString();
    } catch (e) {
      // fallback: append a timestamp
      return url + (url.indexOf('?') === -1 ? '?' : '&') + '_ts=' + Date.now();
    }
  }

  function startAutoRefresh(iframeId, embedUrl, statusEl) {
    // Try for up to 2 minutes, every 10 seconds
    const MAX_MS = 2 * 60 * 1000;
    const STEP_MS = 10 * 1000;
    const t0 = Date.now();

    // If there's an existing timer on this iframe, clear it
    const iframe = document.getElementById(iframeId);
    if (!iframe) return;
    if (iframe._wakeTimer) {
      clearInterval(iframe._wakeTimer);
      iframe._wakeTimer = null;
    }

    function tick() {
      const elapsed = Date.now() - t0;
      const secs = Math.round(elapsed / 1000);
      if (statusEl) statusEl.textContent = `checking… (${secs}s)`;
      // Reload the iframe with a cache-busting param
      iframe.src = cacheBusted(embedUrl);
      if (elapsed >= MAX_MS) {
        clearInterval(iframe._wakeTimer);
        iframe._wakeTimer = null;
        if (statusEl) statusEl.textContent = 'done checking — if it still shows “sleeping”, click Refresh now.';
      }
    }

    // Fire immediately, then repeat
    tick();
    iframe._wakeTimer = setInterval(tick, STEP_MS);

    // When the iframe finishes loading, update the status (we can't peek inside due to cross-origin,
    // but a load event after a few tries usually means it's awake).
    iframe.addEventListener('load', function onloadOnce() {
      // Leave the interval running; sometimes the sleep page loads fast too.
      if (statusEl) statusEl.textContent = 'loaded — if you still see the sleep screen, wait a few seconds or click Refresh now.';
      // Remove this one-time listener to avoid noisy updates
      iframe.removeEventListener('load', onloadOnce);
    });
  }

  function onWakeClick(e) {
    const a = e.currentTarget;
    const iframeId  = a.getAttribute('data-iframe-id');
    const embedUrl  = a.getAttribute('data-embed-url');
    const statusEl  = document.getElementById('applet-status-' + iframeId.split('-').pop());
    // Start auto-refreshing the iframe while the new tab wakes the app
    startAutoRefresh(iframeId, embedUrl, statusEl);
    // Let the link open in a new tab normally
  }

  function onRefreshClick(e) {
    e.preventDefault();
    const a = e.currentTarget;
    const iframeId = a.getAttribute('data-iframe-id');
    const embedUrl = a.getAttribute('data-embed-url');
    const statusId = 'applet-status-' + iframeId.split('-').pop();
    const statusEl = document.getElementById(statusId);
    const iframe = document.getElementById(iframeId);
    if (!iframe) return;
    iframe.src = (embedUrl ? (embedUrl + (embedUrl.includes('?') ? '&' : '?') + '_ts=' + Date.now()) : iframe.src);
    if (statusEl) statusEl.textContent = 'refreshing…';
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.wake-btn').forEach(btn => {
      btn.addEventListener('click', onWakeClick);
    });
    document.querySelectorAll('.refresh-btn').forEach(btn => {
      btn.addEventListener('click', onRefreshClick);
    });
  });
})();
</script>

<style>
/* Light styling touch so it blends with Minimal Mistakes */
.applets .btn { display: inline-block; padding: .4rem .7rem; border-radius: .5rem; text-decoration: none; }
.applets .btn.btn--primary { background: var(--mm-btn-primary-bg, #2a7ae2); color: #fff; }
.applets .btn.btn--inverse { background: #eee; color: #111; }
.applets .applet-status { color: #666; }
</style>

