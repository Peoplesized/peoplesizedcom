---
---
ready = ->
  theme = window.casanova
  theme.fixedHeader()
  theme.menu()
  theme.section()
  theme.backToTop()

$(document).ready(ready)
$(document).on('page:load', ready)
