$(document).ready(function() {
  $('[data-id="dbdc3f10-e696-11ec-b2d7-41bf6778975e"]').prop('readonly',true);

  var total = parseInt(
    $('h3.cli-cart-total').text() ? $('h3.cli-cart-total').text().replace(/[^\d.]/g, '') : '1500', 
    10
  );
  
  initRussianpostOps(total);

  $('h3.cli-cart-total').on('DOMSubtreeModified', function () {
    if (!$(this).text()) {
      total = 0;
    }

    total = parseInt($(this).text().replace(/[^\d.]/g, ''), 10) * 100;

    initRussianpostOps(total);
  });
});

function initRussianpostOps(total) {
  $('#ecom-widget-ops').html('');
  
  var params = {
      id: 28355,
      callbackFunction: fillAddress,
      containerId: 'ecom-widget-ops',
      sumoc: total
    };

  ecomStartWidget(params);
}

function fillAddress(data) {
  console.info(data);
  var address = [];
  for (prop of ['regionTo', 'areaTo', 'cityTo', 'addressTo', 'indexTo']) {
    if (data.hasOwnProperty(prop) && data[prop]) {
      address.push(data[prop]);
    }
  }

  $('[data-id="dbdc3f10-e696-11ec-b2d7-41bf6778975e"]').val(address.join(', '));
}