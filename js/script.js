var ready;

ready = function() {
  var theme;
  theme = window.casanova;
  theme.fixedHeader();
  theme.menu();
  theme.section();
  theme.backToTop();
  return $("img").unveil(150);
};

$(document).ready(ready);

$(document).on('page:load', ready);