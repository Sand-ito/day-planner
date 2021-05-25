var container = $('.container');

$('#currentDay').text("Today is " + moment().format("dddd, MMMM do YYYY"))
var currentHour = moment().format("H")

var timeInputs = [
    { miltime: 9, time: "9am", input: ""},
    { miltime: 10, time: "10am", input: ""},
    { miltime: 11, time: "11am", input: ""},
    { miltime: 12, time: "12pm", input: ""},
    { miltime: 13, time: "1pm", input: ""},
    { miltime: 14, time: "2pm", input: ""},
    { miltime: 15, time: "3pm", input: ""},
    { miltime: 16, time: "4pm", input: ""},
    { miltime: 17, time: "5pm", input: ""},
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
    
    if(currentHour > timeInputs.miltime){
        textArea.style.backgroundColor = "red"
    }

    labelEl.text(timeInputs[i].time);
    buttEl.text('Save');
    }

    // buttEl.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     var todoSoon = textArea.value
    //     allToDo = 
    //     localStorage.setItem("",)
    // })
}


renderList();