function animateZoom() {
    let container = $('#zoom');
    $('#zoom > div').animate({
        transform: ['scale(3) translateX(10%)', 'scale(1)']}, {
        fill: 'both',
        timeline: new ViewTimeline({ subject: container }),
        rangeStart: { rangeName: 'contain', offset: CSS.percent(30) },
        rangeEnd: { rangeName: 'contain', offset: CSS.percent(80) },
    });
  }