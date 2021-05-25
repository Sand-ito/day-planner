var container = $('.container');

$('#currentDay').text("Today is " + moment().format("dddd, MMMM do YYYY"))
var currentHour = moment().format("H")

var timeInputs = [
    {miltime: 9, time: "9am"},
    { miltime: 10, time: "10am"},
    { miltime: 11, time: "11am"},
    { miltime: 12, time: "12pm"},
    { miltime: 13, time: "1pm"},
    { miltime: 14, time: "2pm"},
    { miltime: 15, time: "3pm"},
    { miltime: 16, time: "4pm"},
    { miltime: 17, time: "5pm"},
]

function renderList() {
    for (var i = 0; i < timeInputs.length; i++) {
    var todorowEl = $('<div>');
    var labelEl = $('<label>');
    var buttEl = $('<button>');
    var textArea = $('<textarea>');
    

    container.append(todorowEl);
    todorowEl.append(labelEl);
    todorowEl.append(textArea);
    todorowEl.append(buttEl);

    todorowEl.addClass('row');
    labelEl.addClass('col-1');
    textArea.addClass('col-8');
    buttEl.addClass('col-1');
    
    if(currentHour )
    labelEl.text(timeInputs[i].time)
    buttEl.text('Save')
    }
}

renderList();