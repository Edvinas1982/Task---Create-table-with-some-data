var button = document.getElementById('button');
button.addEventListener('click', function() {
    var date = document.getElementById('date').value;
    var plate = document.getElementById('plate').value;
    var distance = document.getElementById('distance').value;
    var time = document.getElementById('time').value;
    
    distance = parseInt(distance);
    time = parseInt(time);

    speed = distance / time * 3,6; 
    var tbody = document.querySelector('tbody');
    var data = [date, plate, distance, time, speed];
    console.log(data);
})
