---
---
ready = ->
  if (!Modernizr.svg)
    $("img.logo").attr("src", "/css/images/word.jpg")

  theme = window.casanova
  theme.fixedHeader()
  theme.menu()
  theme.section()
  theme.backToTop()

$(document).ready(ready)
$(document).on('page:load', ready)
