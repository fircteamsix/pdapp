M.AutoInit();

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    //var instances = M.Modal.init(elems, options);
});


document.addEventListener('DOMContentLoaded', function() {
    var options = {
        //defaultDate: new Date(1990,1,3),
        yearRange: 120,
        setDefaultDate: true,
        format: 'dd/mm/yyyy',
        i18n: {
            today: 'Hoje',
            clear: 'Limpar',
            done: 'Ok',
            cancel: 'Cancelar',
            nextMonth: 'Próximo mês',
            previousMonth: 'Mês anterior',
            weekdaysAbbrev: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
            weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            weekdays: ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'],
            monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        }
    };
    var elems = document.querySelectorAll('.datepicker');
    var instance = M.Datepicker.init(elems, options);
});