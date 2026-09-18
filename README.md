A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

### Note: if you are using this repo and now get a notification about a security vulnerability, delete the Gemfile.lock file. 

# Instructions

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.

### Research at a glance

The Research overview at `/research/` uses `_includes/research-glance.html` and a scoped stylesheet
at `assets/css/research-glance.css`. Resource and theme entries live in
`_data/research.yml`; count distinct datasets once even if they have multiple mirrors.

When adding a publication, supply `type` (`journal`, `conference`, or `preprint`),
`work_id` (a stable identifier), and `status` (`published` or `preprint`) in its front
matter. Give preprint and published versions the same `work_id`. The Research overview
counts unique works, journal entries (including dataset articles), conference
entries, and the talks collection. These describe the selection listed on the
site rather than a complete career publication total. Update theme destinations
in the data file when a more representative publication or talk becomes available.

Research is the main navigation entry. Publications (`/publications/`) and talks
(`/talks/`) retain their existing URLs and share `_includes/research-navigation.html`
with the overview. Set `research_section: true` on these pages to load their styling.

The main Research menu uses native `<details>` with data-driven child links.
Its dropdown opens on mouse hover, Enter/Space or Arrow Down from the keyboard,
and taps. Escape and outside clicks close it. The existing overflow menu moves
the complete Research item, including its children, on narrow screens.

Research themes and their related-work links are authored in `_data/research.yml`.
Emerging directions use an optional `status` label. The Research overview also
renders two contextual illustrations from `assets/images/research/`, with short
captions and no work links. They are artistic illustrations generated with the
built-in image tool and exported as WebP for the website. Emerging-direction
cards have no related-work links.

Research document links use `_includes/research-document-url.html` to point to
the `.html` files emitted for extensionless publication and talk permalinks. This
works on a basic static preview server as well as GitHub Pages. Research archives
and previous/next links use the same helper and stay on the current site.
Application-domain descriptions live under `applications` in `_data/research.yml`.
