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
      <section class="applet">
        <h2>{{ app.title }}</h2>
        {% if app.description %}
          <p>{{ app.description }}</p>
        {% endif %}
        <div class="iframe-wrap" style="min-height: {{ app.height | default: 720 }}px">
          <iframe
            src="{{ app.url }}"
            loading="lazy"
            allow="clipboard-write"
            referrerpolicy="no-referrer-when-downgrade"
            title="{{ app.title }}"
          ></iframe>
        </div>
      </section>
    {% endfor %}
  {% else %}
    <p>No applets listed yet.</p>
  {% endif %}
</div>
