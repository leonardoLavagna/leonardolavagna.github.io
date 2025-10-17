---
layout: single
title: "Applets"
permalink: /applets/
toc: false
---

This is a curated collection of experimental projects spanning mathematics, machine learning, games, and quantum computing. Over the years, I’ve developed—or supervised the development of—these interactive tools, simulations, and apps to explore complex ideas through hands-on experimentation. Each project represents a fusion of curiosity and computation, aimed at making advanced concepts more intuitive, engaging, and accessible.
 
<div class="applets">
  {% assign apps = site.data.applets | default: empty %}
  {% if apps and apps.size > 0 %}
    {% for app in apps %}
      <section class="applet" style="margin-bottom: 2rem;">
        <h2>{{ app.title }}</h2>
        {% if app.description %}
          <p>{{ app.description }}</p>
        {% endif %}
        <a
          href="{{ app.url | replace: '?embed=true','' | replace: '&embed=true','' }}"
          target="_blank"
          rel="noopener"
          class="btn btn--primary"
        >
          🚀 Open App
        </a>
      </section>
    {% endfor %}
  {% else %}
    <p>No applets listed yet.</p>
  {% endif %}
</div>

<style>
.applets .btn {
  display: inline-block;
  padding: .5rem 1rem;
  border-radius: .5rem;
  text-decoration: none;
  font-weight: 600;
  transition: background .2s;
}
.applets .btn.btn--primary {
  background: var(--mm-btn-primary-bg, #2a7ae2);
  color: #fff;
}
.applets .btn.btn--primary:hover {
  background: #1f5fb8;
}
</style>

