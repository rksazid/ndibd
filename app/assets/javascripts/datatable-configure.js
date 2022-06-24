$(document).ready(function() {
    datatable_configure();
});

function initialize_search_button(settings, json){
    let searchField = $(settings.nTableWrapper).find("input[type='search']");
    $(settings.nTableWrapper).find('select').addClass('custom-select custom-select-sm form-control form-control-sm');
    searchField.addClass('form-control form-control-sm');
    var input = $(settings.nTableWrapper).find('.dataTables_filter input').unbind(),
        self = settings.oInstance.api(),
        $searchButton = $('<button class="btn btn-sm btn-success search-button" id="search-button">')
            .text('Search')
            .append('<i class="mdi mdi-search-web pl-1">')
            .click(function() {
                self.search(input.val()).draw();
            }),
        $clearButton = $('<button class="btn btn-sm btn-secondary" id="clear-button">')
            .text('Clear')
            .append('<i class="mdi mdi-broom pl-1">')
            .click(function() {
                input.val('');
                $searchButton.click();
            });
    $(settings.nTableWrapper).find('.dataTables_filter').append($('<div class="btn-group btn-group-sm dataTable-filter-buttons pl-2">'));
    $(settings.nTableWrapper).find('.dataTable-filter-buttons').append($searchButton, $clearButton);

    searchField.on('keyup', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            $(settings.nTableWrapper).find('.search-button').click();
        }
    });
}

function datatable_configure(){
    $('#responsive-data-table').DataTable({
        initComplete: function (settings, json) {
            initialize_search_button(settings, json)
        },
        "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
        "pageLength": 20,
        "order": [[ 0, "desc" ]],
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': ['nosort']
        }],
        "stateSave": true,
        pagingType: 'numbers',
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });

    $('#responsive-data-table-show, .responsive-data-table-show').DataTable({
        initComplete: function (settings, json) {
            initialize_search_button(settings, json)

        },
        "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
        "pageLength": 20,
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': ['nosort']
        }],
        "stateSave": true,
        pagingType: 'numbers',
        retrieve: true,
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });

    $('#responsive-data-table-home, .responsive-data-table-home').DataTable({
        initComplete: function (settings, json) {
            initialize_search_button(settings, json)

        },
        "aLengthMenu": [[5, 10, 20, 30, 50, 75, -1], [5, 10, 20, 30, 50, 75, "All"]],
        "pageLength": 5,
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': ['nosort']
        }],
        "stateSave": true,
        pagingType: 'numbers',
        retrieve: true,
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });

    $('#responsive-data-table-ajax').DataTable({
        initComplete: function (settings, json) {
            initialize_search_button(settings, json)
        },
        "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
        "pageLength": 20,
        "order": [[ 0, "desc" ]],
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': ['nosort']
        }],
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">',
        stateSave: true,
        processing: true,
        serverSide: true,
        responsive: true,
        pagingType: 'numbers',
        ajax: {
            "url" : $(this).data('url'),
            "type" : "GET",
            "data" : function(d) {
                return d;
            }
        }
    });
}

function configure_show_datatable(){
    $('.responsive-data-table-show').DataTable({
        initComplete: function (settings, json) {
            initialize_search_button(settings, json)

        },
        "aLengthMenu": [[10, 20, 30, 50, 75, -1], [10, 20, 30, 50, 75, "All"]],
        "pageLength": 20,
        "aoColumnDefs": [{
            'bSortable': false,
            'aTargets': ['nosort']
        }],
        "stateSave": true,
        retrieve: true,
        pagingType: 'numbers',
        "dom": '<"row justify-content-between top-information"lf>rt<"row justify-content-between bottom-information"ip><"clear">'
    });
}
