$(document).ready(function() {
  $('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg
  });
  
  $('[data-id="8b8fc310-e9c0-11ec-ba06-654ee29d1609"]').prop('readonly',true);

  var total = parseInt(
    $('h3.cli-cart-total').text() ? $('h3.cli-cart-total').text().replace(/[^\d.]/g, '') : '1500', 
    10
  );
  
  initRussianpostOps(total);
  initRussianpostCourier(total);

  $('h3.cli-cart-total').on('DOMSubtreeModified', function () {
    if (!$(this).text()) {
      total = 0;
    }

    total = parseInt($(this).text().replace(/[^\d.]/g, ''), 10) * 100;

    initRussianpostOps(total);
    initRussianpostCourier(total);
  });
});

function initRussianpostOps(total) {
  $('[data-id="8b8fc310-e9c0-11ec-ba06-654ee29d1609"]').val('');
  $('#ecom-widget-ops').html('');
  
  var params = {
      id: 28355,
      callbackFunction: fillAddress,
      containerId: 'ecom-widget-ops',
      sumoc: total
    };

  ecomStartWidget(params);
}

function initRussianpostCourier(total) {
  $('[data-id="8b8fc310-e9c0-11ec-ba06-654ee29d1609"]').val('');
  $('#ecom-widget-courier').html('');
  
  var params = {
      id: 28356,
      callbackFunction: fillAddress,
      containerId: 'ecom-widget-courier',
      sumoc: total
    };

  courierStartWidget(params);
}

function fillAddress(data) {
  console.info(data);
  var address = [];
  for (prop of ['regionTo', 'areaTo', 'cityTo', 'addressTo', 'indexTo']) {
    if (data.hasOwnProperty(prop) && data[prop]) {
      address.push(data[prop]);
    }
  }

  $('[data-id="8b8fc310-e9c0-11ec-ba06-654ee29d1609"]').val(address.join(', '));
  
  $('.cli-cart-icon').click();
}
