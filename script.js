$(function () {
  $('.year').text(new Date().getFullYear());

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  $('.nav-menu a').each(function () {
    const href = $(this).attr('href');
    if (href === currentPage) {
      $(this).addClass('active');
    }
  });

  $('.nav-toggle').on('click', function () {
    $('.nav-menu').toggleClass('open');
  });

  $('.filter').on('click', function () {
    const filter = $(this).data('filter');
    $('.filter').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.portfolio-item').fadeIn(220);
    } else {
      $('.portfolio-item').hide();
      $('.portfolio-item[data-category="' + filter + '"]').fadeIn(220);
    }
  });

  $('.choose-suite').on('click', function () {
    const suite = $(this).closest('.template-card').data('suite');
    window.location.href = 'contact.html?service=' + encodeURIComponent(suite);
  });

  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  if (service) {
    $('select[name="service"]').val('Semi-Custom Stationery');
    $('textarea[name="message"]').val('I am interested in ' + service + '.');
  }

  $('.contact-form').on('submit', function (event) {
    event.preventDefault();
    $('.form-note').text('Thank you! This demo form is ready to connect to your email or CRM.');
    this.reset();
  });

  function revealOnScroll() {
    $('.reveal').each(function () {
      const elementTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height() - 60;
      if (elementTop < windowBottom) {
        $(this).addClass('visible');
      }
    });
  }

  revealOnScroll();
  $(window).on('scroll resize', revealOnScroll);
});
