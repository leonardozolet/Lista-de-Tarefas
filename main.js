$(document).ready(function() {
    // Função para adicionar uma nova tarefa à lista
    $("#task-form").submit(function(event) {
        event.preventDefault();
        var taskName = $("#task-input").val();
        if (taskName.trim() !== "") {
            $("#task-list").append("<li>" + taskName + "</li>");
            $("#task-input").val(""); // Limpa o campo de entrada
        }
    });

    // Função para aplicar o efeito de linha através quando um item da lista é clicado
    $("#task-list").on("click", "li", function() {
        $(this).toggleClass("completed");
    });
});