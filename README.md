# craftum-russianpost-widget
<script src='https://code.jquery.com/jquery-2.1.1.min.js'></script>
<script src='https://widget.pochta.ru/map/widget/widget.js'></script>
<script src='https://widget.pochta.ru/courier/widget/widget.js'></script>
<script src='https://kochnovdenis.github.io/craftum-russianpost-widget/main.js'></script>
<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/vtimbuc/bootstrap-responsive-tabs@master/dist/css/bootstrap-responsive-tabs.css'>
<script src='//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>
<script src='https://cdn.jsdelivr.net/gh/vtimbuc/bootstrap-responsive-tabs@master/dist/js/jquery.bootstrap-responsive-tabs.min.js'></script>

<div class="cli-content container">
  <div class="row justify-content-center">
    <div class="col-12">
      <ul class="nav nav-tabs responsive-tabs">
        <li class="active"><a href="#rp_ops">Почта России до отделения</a></li>
        <li><a href="#rp_courier">Почта России курьером</a></li>
      </ul>

      <div class="tab-content">
        <div class="tab-pane active" id="rp_ops">
          <div id="ecom-widget-ops" style="height: 500px"></div>
        </div>

        <div class="tab-pane" id="rp_courier">
          <div id="ecom-widget-courier" style="height: 500px"></div>
        </div>
      </div>
    </div>
  </div>
</div>
