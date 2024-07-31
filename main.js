$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefa = $('#cadastro-novo').val();
    const novoItem = $(`<li id="text">${tarefa}</li>`);
    
        $(novoItem).appendTo('ul');
        
})

$('li').click(function(e){
$('#text').addClass('estilo')

});


