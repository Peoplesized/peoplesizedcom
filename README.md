# Peoplesized.com

Personal manifesto and archive site focusing on people-sized solutions. Visit the live site at [peoplesized.com](https://www.peoplesized.com).

## Local Development

This is a Jekyll static site. To run it locally:

### Prerequisites
- Ruby (version 2.7+ recommended)
- Bundler gem: `gem install bundler`

### Setup
```bash
# Install dependencies
bundle install

# Run the development server
bundle exec jekyll serve

# Or run with live reloading
bundle exec jekyll serve --livereload
```

The site will be available at `http://localhost:4000`

### Building for Production
```bash
# Build the static site
bundle exec jekyll build

# Output will be in _site/ directory
```

## Site Structure

- **Home page** (`index.html`): Personal manifesto on people-centered solutions
- **Archive page** (`archive.html`): Portfolio of past projects (2014-2018)
- **Project posts** (`_posts/`): Individual project descriptions in Markdown

## Deployment

The site is deployed to GitHub Pages from the `gh-pages` branch. Push changes to this branch to update the live site.
