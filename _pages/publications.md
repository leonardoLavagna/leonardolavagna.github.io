---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---
A complete list with all my scientific contributions can be found [here](/assets/files/publications.md) with corresponding BibTeX entries [here](https://gist.github.com/leonardoLavagna/e30c60bd37b3f04a1927913be0563097).

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
