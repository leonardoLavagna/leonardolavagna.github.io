---
layout: single
title: "Applets"
permalink: /applets/
toc: false
---

Below is an interactive app. It loads from its hosting provider and runs fully in your browser.

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
            src="{{ app.url }}?embed=true"
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
