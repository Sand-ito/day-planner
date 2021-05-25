var container = $('.container');

$('#currentDay').text("Today is " + moment().format("dddd, MMMM do YYYY"))
var currentHour = moment().format("k")

var timeInputs = [
    { time: 9, input: "" },
    { time: 10, input: "" },
    { time: 11, input: "" },
    { time: 12, input: "" },
    { time: 13, input: "" },
    { time: 14, input: "" },
    { time: 15, input: "" },
    { time: 16, input: "" },
    { time: 17, input: "" },
]

function renderList() {
    for (var i = 0; i < timeInputs.length; i++) {
    var todorowEl = $('<div>');
    var labelEl = $('<label>');
    var buttEl = $('<button>');
    var textArea = $('<textarea>');
    

    container.append(todorowEl);
    todorowEl.append(textArea);
    todorowEl.append(labelEl);
    todorowEl.append(buttEl);

    todorowEl.addClass('row');
    labelEl.addClass('col-2 float-left');
    textArea.addClass('col-8');
    buttEl.addClass('col-1');
    }
}

renderList();