var container = $('.container');

$('#currentDay').text("Today is " + moment().format("dddd, MMMM do YYYY"))
var currentHour = moment().format("H")


var timeInputs = JSON.parse(localStorage.getItem('input')) || {
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "",
    "16": "",
    "17": "",
};



function renderList() {
    var hours = Object.keys(timeInputs);
    for (var i = 0; i < hours.length; i++) {
    var todorowEl = $('<div>');
    var labelEl = $('<label>');
    var buttEl = $('<button>');
    var textArea = $('<textarea>');
    var key = hours[i];

    buttEl.attr('data-index', key);
    container.append(todorowEl);
    todorowEl.append(labelEl);
    todorowEl.append(textArea);
    todorowEl.append(buttEl);

    todorowEl.addClass('row');
    labelEl.addClass('col-1');
    textArea.addClass('col-8');
    buttEl.addClass('col-1');
    
    textArea.text(timeInputs[key]);
    labelEl.text(key);
    buttEl.text('Save');

    if(currentHour > timeInputs.miltime){
        textArea.style.backgroundColor = "red"
    }
    }

    container.on('click', "button", function(event){
        timeInputs[$(this).data("index")] = $(this).prev().val();
        localStorage.setItem("input", JSON.stringify(timeInputs));
        renderList();
    })
}


renderList();