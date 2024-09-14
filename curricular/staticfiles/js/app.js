
/*
 *
 *   INSPINIA - Responsive Admin Theme
 *   version 2.7.1
 *
 */


$(document).ready(function () {

    /*
     * Autorização para chamadas ajax
     */
    $.ajaxSetup({
         headers: {
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
         }
     });

    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    $('.input-group.date').datepicker({
        orientation: 'top left',
        format: 'dd/mm/yyyy',
        language: "pt-BR",
        autoclose: true,
        todayHighlight: true,
    });

    /*
     * Habilita ou desabilita o campo SIAPE
     */
    $('#tipo_colaborador_id').on('change', function (e) {
        var tipo_colaborador = $(this).val();

        console.log('tipo_colaborador: ' + tipo_colaborador);

        if(tipo_colaborador == 1){
            $('#siape').removeAttr('disabled');
            $('#siape').show().attr('required', 'required');
            $('#banco_id').attr('disabled', 'disabled');
            $('#agencia').attr('disabled', 'disabled');
            $('#conta').attr('disabled', 'disabled');
        }else{
            $('#siape').attr('disabled', 'disabled');
            $('#banco_id').removeAttr('disabled');
            $('#agencia').removeAttr('disabled');
            $('#conta').removeAttr('disabled');
            $('#banco_id').show().attr('required', 'required');
            $('#agencia').show().attr('required', 'required');
            $('#conta').show().attr('required', 'required');
        }

    });

    $('.get-pessoa-data').change(function (e) {
        $.ajax({
            type: 'GET',
            url: '/admin/pessoas/'+$(this).val()+'/get',
            dataType: 'json',
            success: function (response) {
                $('#pis_siape').val(response.pessoa.pis);
                console.log('PIS encontrado para pessoa: '+response.pessoa.pis);
            },
            error: function (response) {
                console.log(response);
            }
        });

    });

    $('.ajax-delete').click(function (e) {

        var id = $(this).data('item');
        var url = $(this).data('url');
        var reload = $(this).data('reload');

        swal({
                title: "Tem certeza que deseja excluir?",
                text: "Esta ação não poderá ser desfeita!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, exclua!",
                cancelButtonText: "Não, quero cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function (isConfirm) {
                if (isConfirm) {

                    $.ajax({
                        type: 'POST',
                        url: url,
                        data: {id: id},
                        dataType: 'json',
                        success: function(response) {
                            swal({
                                title:"Registro excluído!",
                                text: response.message,
                                type: "success",
                            },function () {
                                if (reload === true) {
                                    window.location.reload();
                                }
                            });

                        },
                        error: function (response) {
                            swal("Erro na exclusão", JSON.parse(response['responseText']).message, "error");
                        }
                     });

                } else {
                    swal("Operação cancelada!", "Nenhum registro foi alterado.", "error");
                }
            });
    });

    $('.chosen-select').chosen({width: "100%"});

    /**
     * Exibe o modal disparado por botão com a classe "show-modal"
     * Parâmetros do botão:
     *      data-action: rota para a view,
     *      data-reload: se a página deve ser recarregada após fechar o modal
     *      data-item: se um objeto deve ser buscado
     */
    $('.show-modal').on('click', function (e) {
        var tempUrl = '';    
        var action = $(this).data('action');
        var reload = $(this).data('reload');
        var item = $(this).data('item');
        var tipo = $(this).data('tipo');

        /**
         * Array de itens. Somente quando o tipo for POST
         */
        var itens = $(this).data('itens');

        /**
         * Tipo de requisição que deve ser feita
         */
        if(tipo === undefined){
            tipo = 'view';
        }

        if(item === undefined){
            item = '';
        }
           
        if(tipo == 'view'){
            tempUrl = '/' + item;                        
        }else{
            if(itens){
                // Separar os items e montar um json
                var arr = itens.split(',');

                $.each( arr, function( index, value ) {
                    var temp2 = value.split('=');
                    if(tempUrl){
                        tempUrl = tempUrl +'&'+ temp2[0] +'='+ temp2[1];
                    }else{
                        tempUrl = '?' + temp2[0] +'='+ temp2[1];
                    }
                    
                });    
            }                
        }

        // Faz a chamada
        $.get( base_url + '/' + action + tempUrl, function(data) {
            $('#customModal').on('shown.bs.modal', function() {
                $('#customModal .modal-content').html(data);
            });
            $('#customModal').on('hidden.bs.modal', function() {
                $('#customModal .modal-content').data('');
                if (reload === true) {
                    window.location.reload();
                }
            });
            $('#customModal').modal();
        });
        
    });

    // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }

    // MetsiMenu
    $('#side-menu').metisMenu();

    // Collapse ibox function
    $('.collapse-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    });

    // Close ibox function
    $('.close-link').on('click', function () {
        var content = $(this).closest('div.ibox');
        content.remove();
    });

    // Fullscreen ibox function
    $('.fullscreen-link').on('click', function () {
        var ibox = $(this).closest('div.ibox');
        var button = $(this).find('i');
        $('body').toggleClass('fullscreen-ibox-mode');
        button.toggleClass('fa-expand').toggleClass('fa-compress');
        ibox.toggleClass('fullscreen');
        setTimeout(function () {
            $(window).trigger('resize');
        }, 100);
    });

    // Close menu in canvas mode
    $('.close-canvas-menu').on('click', function () {
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    // Run menu of canvas
    $('body.canvas-menu .sidebar-collapse').slimScroll({
        height: '100%',
        railOpacity: 0.9
    });

    // Open close right sidebar
    $('.right-sidebar-toggle').on('click', function () {
        $('#right-sidebar').toggleClass('sidebar-open');
    });

    // Initialize slimscroll for right sidebar
    $('.sidebar-container').slimScroll({
        height: '100%',
        railOpacity: 0.4,
        wheelStep: 10
    });

    // Open close small chat
    $('.open-small-chat').on('click', function () {
        $(this).children().toggleClass('fa-comments').toggleClass('fa-remove');
        $('.small-chat-box').toggleClass('active');
    });

    // Initialize slimscroll for small chat
    $('.small-chat-box .content').slimScroll({
        height: '234px',
        railOpacity: 0.4
    });

    // Small todo handler
    $('.check-link').on('click', function () {
        var button = $(this).find('i');
        var label = $(this).next('span');
        button.toggleClass('fa-check-square').toggleClass('fa-square-o');
        label.toggleClass('todo-completed');
        return false;
    });

    // Minimalize menu
    $('.navbar-minimalize').on('click', function (event) {
        event.preventDefault();
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();

    });

    // Full height of sidebar
    function fix_height() {
        var heightWithoutNavbar = $("body > #wrapper").height() - 61;
        $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

        var navbarHeight = $('nav.navbar-default').height();
        var wrapperHeight = $('#page-wrapper').height();

        if (navbarHeight > wrapperHeight) {
            $('#page-wrapper').css("min-height", navbarHeight + "px");
        }

        if (navbarHeight < wrapperHeight) {
            $('#page-wrapper').css("min-height", $(window).height() + "px");
        }

        if ($('body').hasClass('fixed-nav')) {
            if (navbarHeight > wrapperHeight) {
                $('#page-wrapper').css("min-height", navbarHeight + "px");
            } else {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }

    }

    fix_height();

    // Fixed Sidebar
    $(window).bind("load", function () {
        if ($("body").hasClass('fixed-sidebar')) {
            $('.sidebar-collapse').slimScroll({
                height: '100%',
                railOpacity: 0.9
            });
        }
    });

    // Move right sidebar top after scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && !$('body').hasClass('fixed-nav')) {
            $('#right-sidebar').addClass('sidebar-top');
        } else {
            $('#right-sidebar').removeClass('sidebar-top');
        }
    });

    $(window).bind("load resize scroll", function () {
        if (!$("body").hasClass('body-small')) {
            fix_height();
        }
    });

    $("[data-toggle=popover]")
        .popover();

    // Add slimscroll to element
    $('.full-height-scroll').slimscroll({
        height: '100%'
    });

    /* charts */
    var d1 = [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]];
    var d2 = [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]];

    var data1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];
    $.plot($("#flot-chart1"), data1, {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                },
            },
            points: {
                width: 0.1,
                show: false
            },
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false,
        }
    });

    var lineData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Example dataset",
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
                data: [48, 48, 60, 39, 56, 37, 30]
            },
            {
                label: "Example dataset",
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
                data: [65, 59, 40, 51, 36, 25, 40]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart");
    if(ctx){
        ctx = ctx.getContext("2d");
        new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});
    }

    /* End charts*/


});


// Minimalize menu when screen is less than 768px
$(window).bind("resize", function () {
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
});

function SmoothlyMenu() {
    if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 200);
    } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
            function () {
                $('#side-menu').fadeIn(400);
            }, 100);
    } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
    }
}

// Dragable panels
function WinMove() {
    var element = "[class*=col]";
    var handle = ".ibox-title";
    var connect = "[class*=col]";
    $(element).sortable(
        {
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
        .disableSelection();
}

$body = $("body");

$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }
});
