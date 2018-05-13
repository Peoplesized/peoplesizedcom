---
---

ready = ->
  theme = window.casanova
  theme.fixedHeader()
  theme.menu()
  theme.section()
  theme.backToTop()
  $("img").unveil(150)

$(document).ready(ready)
$(document).on('page:load', ready)
