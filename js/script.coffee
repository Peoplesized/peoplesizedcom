---
---
ready = ->
  theme = window.casanova
  theme.fixedHeader()
  theme.menu()
  theme.section()
  theme.backToTop()
  # theme.portfolioItem();
  # theme.toggleAccordion();
  # theme.quoteRotator();
  # theme.progress();
  # theme.initTwitter();
  # theme.initTabs();
  # theme.initPieChart();
  # theme.imageSlider();
  # theme.masonryBlog();
  # theme.stats();
  # theme.notificationBox();
  # theme.tooltip();
  # theme.lightBox();
  # theme.map();

$(document).ready(ready)
$(document).on('page:load', ready)
