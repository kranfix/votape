function getList() {
    var a = $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://www.losclasificados.com.pe/votape/api/list",
      cache: false,
      beforeSend: function() {
        /*$('#res1').html('Cargando lista...');
        $('#res2').html('');
        $('#res3').html('');*/
      },
      success: function(jsondata) {
        testX(jsondata);
        /*var str = '';
        str += '<ul>';
        $.each(jsondata, function(idx, obj) {
          str += '<li>' + obj.id + ' - ' + obj.coincidences + ' - ' + obj.fails + '</li>';
        });
        str += '</ul>';
        $('#res1').html(str);*/
      }
    });
}


function testX( p_contents )
{
  AppSettings.instance.onRefreshFromDB( p_contents );
  console.log( p_contents );
};

function getId (id) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://www.losclasificados.com.pe/votape/api/voto/"+id,
      cache: false,
      beforeSend: function() {
        /*$('#res1').html('');
        $('#res2').html('Cargando item...');
        $('#res3').html('');*/
      },
      success: function (jsondata) {
        return jsondata;
        /*var str = '';
        str += '<ul>';
        $.each(jsondata, function(idx, obj) {
          str += '<li>' + obj.id + ' - ' + obj.coincidences + ' - ' + obj.fails + '</li>';
        });
        str += '</ul>';
        $('#res2').html(str);
        */
     },
      error: function (jqXHR, status) {
         console.log(status);
     }
  });
}

function Fails (id) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://www.losclasificados.com.pe/votape/api/voto/fails/"+id,
      cache: false,
      beforeSend: function() {
        /*$('#res1').html('');
        $('#res2').html('');
        $('#res3').html('Sumando fails [3]...');*/
      },
      success: function (jsondata) {
        return jsondata;
        /*var str = '';
        str += '<ul>';
        $.each(jsondata, function(idx, obj) {
          str += '<li>' + obj.id + ' - ' + obj.coincidences + ' - ' + obj.fails + '</li>';
        });
        str += '</ul>';
        $('#res3').html(str);
        */
     },
      error: function (jqXHR, status) {
         console.log(status);
     }
  });
}

function Coincidences (id) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://www.losclasificados.com.pe/votape/api/voto/coincidences/"+id,
      cache: false,
      beforeSend: function() {
        $('#res1').html('');
        $('#res2').html('');
        $('#res3').html('Sumando fails [3]...');
      },
      success: function (jsondata) {
        /*
        var str = '';
        str += '<ul>';
        $.each(jsondata, function(idx, obj) {
          str += '<li>' + obj.id + ' - ' + obj.coincidences + ' - ' + obj.fails + '</li>';
        });
        str += '</ul>';
        $('#res3').html(str);
        */
     },
      error: function (jqXHR, status) {
         console.log(status);
     }
  });
}
