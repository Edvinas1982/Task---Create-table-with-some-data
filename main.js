var button = document.getElementById('button');
button.addEventListener('click', function() {
    // geting data 
    var date = document.getElementById('date').value;
    var plate = document.getElementById('plate').value;
    var distance = document.getElementById('distance').value;
    var time = document.getElementById('time').value;
    
    // converting data to integer and calculating speed 
    distance = parseInt(distance);
    time = parseInt(time);
    speed = Math.round(distance / time * 3,6); 

    // puting data to array, creating table and puting data insade table
    var tbody = document.querySelector('tbody');
    var data = [date, plate, distance, time, speed];
    var tr = document.createElement('tr');

    for (var i = 0; i < data.length; i++) {
        var td = document.createElement('td');
        td.innerHTML = data[i];
        tr.appendChild(td);
    }
    tbody.appendChild(tr);

    // reseting inputs
    document.getElementById('date').value = '';
    document.getElementById('plate').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('time').value = '';
})
