const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var span = document.getElementById('span')
var span2 = document.getElementById('span2')
var span3 = document.getElementById('span3')
const button = document.getElementById('bt')


var rand = ''
const rands = []
var check = true
var ineck = true
var c = 0
var i = random(2, 9)

button.onclick = function onclick() {
    for (let i = 0; i < 6; i++) {
        var r = random(0, 1)
        if (r === 0) {
            rand += abc[random(0, abc.length - 1)]
        }
        else {
            rand += num[random(0, num.length - 1)]
        }
    }
    rands.push(rand)
    if (c >= 1) {
        var bt2 = document.createElement('button')
        bt2.textContent = rand;
        span2.appendChild(bt2)
    }
    c++
    rand = ''
    if (check) {
        check = false
        if (ineck) {
            setInterval(
                function () {
                    if (i > -1) {
                        var time = new Date()
                        var sec = time.getSeconds()
                        var dsec = sec + i
                        span3.textContent = `${dsec - sec}`
                        i--
                    }
                    else {
                        ineck = false
                        span3.textContent = ''
                    }
                },
                1000)
        }
        sp()
        function sp() {
            i = random(2, 9)

            var bt = document.createElement('button')
            bt.textContent = rands[0];
            span.appendChild(bt)
            setTimeout(
                function () {
                    span.removeChild(span.childNodes[0])
                    rands.splice(0, 1)
                    if (rands.length !== 0) {
                        sp()
                        span2.removeChild(span2.childNodes[0])
                    }
                    else {
                        check = true
                        c = 0
                    }
                }
                , (i + 1) * 1000)
        }
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}