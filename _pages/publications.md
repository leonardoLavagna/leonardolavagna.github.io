---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

Here you can find a selection of publications. A complete list with all my scientific contributions can be found [here](/assets/files/publications.pdf) with corresponding BibTeX entries [here](https://gist.github.com/leonardoLavagna/e30c60bd37b3f04a1927913be0563097).

{% if author.googlescholar %}
You can also find my articles on [my Google Scholar profile]({{ author.googlescholar }}).
{% endif %}

{% include base_path %}

<style>
  .publication-tools {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    align-items: end;
    margin: 1.5rem 0 1rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .publication-tools > div {
    min-width: 0;
  }

  .publication-tools label {
    display: block;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .publication-tools input,
  .publication-tools select,
  .publication-tools button {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 0.45rem 0.55rem;
    font-size: 0.9rem;
  }

  .publication-tools button {
    cursor: pointer;
  }

  .publication-count {
    margin: 0.5rem 0 1rem;
    font-size: 0.9rem;
    color: #666;
  }

  .publication-entry {
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1200px) {
    .publication-tools {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }

    .publication-tool-title {
      grid-column: span 3;
    }

    .publication-tool-year {
      grid-column: span 2;
    }

    .publication-tool-category {
      grid-column: span 2;
    }

    .publication-tool-venue {
      grid-column: span 3;
    }

    .publication-tool-sort {
      grid-column: span 1;
    }

    .publication-tool-clear {
      grid-column: span 1;
    }
  }

  @media (max-width: 700px) {
    .publication-tools {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="publication-tools" aria-label="Publication filters">
  <div class="publication-tool-title">
    <label for="publication-title-search">Search by title</label>
    <input
      id="publication-title-search"
      type="search"
      placeholder="e.g. QAOA, microfluidics, cryptanalysis..."
      autocomplete="off"
    >
  </div>

  <div class="publication-tool-year">
    <label for="publication-year-filter">Year</label>
    <select id="publication-year-filter">
      <option value="">All years</option>
      {% assign publications_by_date = site.publications | sort: "date" | reverse %}
      {% assign seen_years = "" %}
      {% for post in publications_by_date %}
        {% assign publication_year = post.date | date: "%Y" %}
        {% assign year_token = "|" | append: publication_year | append: "|" %}
        {% unless seen_years contains year_token %}
          <option value="{{ publication_year }}">{{ publication_year }}</option>
          {% assign seen_years = seen_years | append: year_token %}
        {% endunless %}
      {% endfor %}
    </select>
  </div>

  <div class="publication-tool-category">
    <label for="publication-category-filter">Category</label>
    <select id="publication-category-filter">
      <option value="">All categories</option>
      <option value="journal">Journal papers</option>
      <option value="conference">Conference papers</option>
      <option value="preprint">Preprints</option>
      <option value="book">Books</option>
      <option value="other">Other</option>
    </select>
  </div>

  <div class="publication-tool-venue">
    <label for="publication-venue-filter">Published in</label>
    <select id="publication-venue-filter">
      <option value="">All venues</option>
    </select>
  </div>

  <div class="publication-tool-sort">
    <label for="publication-sort">Sort</label>
    <select id="publication-sort">
      <option value="newest">Newest first</option>
      <option value="oldest">Oldest first</option>
      <option value="title-asc">Title A–Z</option>
      <option value="title-desc">Title Z–A</option>
      <option value="category">Category</option>
    </select>
  </div>

  <div class="publication-tool-clear">
    <label>&nbsp;</label>
    <button id="publication-clear-filters" type="button">Clear</button>
  </div>
</div>

<p id="publication-count" class="publication-count"></p>

<div id="publication-list">
  {% assign publications_by_date = site.publications | sort: "date" | reverse %}
  {% for post in publications_by_date %}
    <div
      class="publication-entry js-publication"
      data-title="{{ post.title | strip_html | escape }}"
      data-title-search="{{ post.title | strip_html | downcase | escape }}"
      data-date="{{ post.date | date: '%Y-%m-%d' }}"
      data-year="{{ post.date | date: '%Y' }}"
      data-venue="{{ post.venue | default: '' | strip_html | escape }}"
    >
      {% include archive-single.html %}
    </div>
  {% endfor %}
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const titleInput = document.getElementById("publication-title-search");
    const yearFilter = document.getElementById("publication-year-filter");
    const categoryFilter = document.getElementById("publication-category-filter");
    const venueFilter = document.getElementById("publication-venue-filter");
    const sortSelect = document.getElementById("publication-sort");
    const clearButton = document.getElementById("publication-clear-filters");
    const count = document.getElementById("publication-count");
    const list = document.getElementById("publication-list");
    const publications = Array.from(document.querySelectorAll(".js-publication"));

    const categoryLabels = {
      "J": "journal",
      "C": "conference",
      "P": "preprint",
      "B": "book",
      "O": "other"
    };

    const categoryOrder = {
      "journal": 1,
      "conference": 2,
      "preprint": 3,
      "book": 4,
      "other": 5,
      "unknown": 6
    };

    function normalizeText(value) {
      return (value || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    }

    function removeCategoryPrefix(title) {
      return (title || "").replace(/^\s*\[[A-Z]\d+\]\s*/, "");
    }

    function getPublicationCode(title) {
      const match = (title || "").match(/^\s*\[([A-Z]\d+)\]/i);
      return match ? match[1].toUpperCase() : "";
    }

    function getCategoryFromTitle(title) {
      const match = (title || "").match(/^\s*\[([JCPBO])\d+\]/i);

      if (!match) {
        return "unknown";
      }

      return categoryLabels[match[1].toUpperCase()] || "unknown";
    }

    function cleanVenueLabel(venue) {
      return (venue || "")
        .replace(/\s*\([^)]*\)\s*/g, " ")
        .replace(/\s*,?\s*\d{4}\s*$/g, " ")
        .replace(/\s+/g, " ")
        .trim();
    }

    function populateVenueDropdown() {
      const venues = new Map();

      publications.forEach(function (publication) {
        const rawVenue = publication.dataset.venue || "";
        const cleanedVenue = cleanVenueLabel(rawVenue);
        const normalizedVenue = normalizeText(cleanedVenue);

        publication.dataset.cleanVenueLabel = cleanedVenue;
        publication.dataset.cleanVenueSearch = normalizedVenue;
        publication.dataset.fullVenueSearch =
          normalizeText(rawVenue) + " " + normalizedVenue;

        if (cleanedVenue && !venues.has(normalizedVenue)) {
          venues.set(normalizedVenue, cleanedVenue);
        }
      });

      Array.from(venues.entries())
        .sort(function (a, b) {
          return a[1].localeCompare(b[1]);
        })
        .forEach(function ([normalizedVenue, venueLabel]) {
          const option = document.createElement("option");
          option.value = normalizedVenue;
          option.textContent = venueLabel;
          venueFilter.appendChild(option);
        });
    }

    publications.forEach(function (publication) {
      const title = publication.dataset.title || "";

      publication.dataset.publicationCode = getPublicationCode(title);
      publication.dataset.category = getCategoryFromTitle(title);

      publication.dataset.cleanTitleSearch =
        normalizeText(removeCategoryPrefix(title));

      publication.dataset.fullTitleSearch =
        normalizeText(title) + " " +
        publication.dataset.cleanTitleSearch + " " +
        normalizeText(publication.dataset.publicationCode);
    });

    populateVenueDropdown();

    function sortPublications(items) {
      const mode = sortSelect.value;

      return items.slice().sort(function (a, b) {
        const titleA = normalizeText(removeCategoryPrefix(a.dataset.title));
        const titleB = normalizeText(removeCategoryPrefix(b.dataset.title));
        const dateA = new Date(a.dataset.date);
        const dateB = new Date(b.dataset.date);
        const categoryA = categoryOrder[a.dataset.category] || 99;
        const categoryB = categoryOrder[b.dataset.category] || 99;

        if (mode === "oldest") {
          return dateA - dateB;
        }

        if (mode === "title-asc") {
          return titleA.localeCompare(titleB);
        }

        if (mode === "title-desc") {
          return titleB.localeCompare(titleA);
        }

        if (mode === "category") {
          if (categoryA !== categoryB) {
            return categoryA - categoryB;
          }

          return dateB - dateA;
        }

        return dateB - dateA;
      });
    }

    function applyPublicationFilters() {
      const titleQuery = normalizeText(titleInput.value.trim());
      const selectedYear = yearFilter.value;
      const selectedCategory = categoryFilter.value;
      const selectedVenue = venueFilter.value;

      let visibleCount = 0;

      publications.forEach(function (publication) {
        const matchesTitle =
          !titleQuery ||
          publication.dataset.fullTitleSearch.includes(titleQuery);

        const matchesYear =
          !selectedYear ||
          publication.dataset.year === selectedYear;

        const matchesCategory =
          !selectedCategory ||
          publication.dataset.category === selectedCategory;

        const matchesVenue =
          !selectedVenue ||
          publication.dataset.cleanVenueSearch === selectedVenue;

        const isVisible =
          matchesTitle &&
          matchesYear &&
          matchesCategory &&
          matchesVenue;

        publication.hidden = !isVisible;

        if (isVisible) {
          visibleCount += 1;
        }
      });

      sortPublications(publications).forEach(function (publication) {
        list.appendChild(publication);
      });

      if (visibleCount === 1) {
        count.textContent = "Showing 1 publication";
      } else {
        count.textContent = "Showing " + visibleCount + " publications";
      }
    }

    titleInput.addEventListener("input", applyPublicationFilters);
    yearFilter.addEventListener("change", applyPublicationFilters);
    categoryFilter.addEventListener("change", applyPublicationFilters);
    venueFilter.addEventListener("change", applyPublicationFilters);
    sortSelect.addEventListener("change", applyPublicationFilters);

    clearButton.addEventListener("click", function () {
      titleInput.value = "";
      yearFilter.value = "";
      categoryFilter.value = "";
      venueFilter.value = "";
      sortSelect.value = "newest";
      applyPublicationFilters();
      titleInput.focus();
    });

    applyPublicationFilters();
  });
</script>
