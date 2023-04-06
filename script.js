const table = document.getElementById('list')
const choice = document.getElementById('choice')

var day = 0
var number = 0

function setUp() {
    for (let i=0;i<7;i++) {

        let tr = document.createElement('tr')
        
        for (let j=0;j<12;j++) {
            let td = document.createElement('td')
            let txt = document.createElement('p')
            txt.id = String(j) + String(i)
            txt.innerText = '____'
            td.appendChild(txt)
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

    let subjs = ['現文', '古典', '数①', '数②', '情報', 'コ英', '英表', '化学', '生物', '物理', '世A', '世B','日B', '現社', '地理', '体育', 'LHR', '探究', '英語', '国語', '数学', '　　']
    for (let i of subjs) {
        let button = document.createElement('input')
        button.type = 'button'
        button.value = i
        button.addEventListener('click', 
        function (event) {
            let obj = event.target
            let edit = document.getElementById(String(day)+String(number))
            edit.innerText = obj.value
            if (number == 6) {
                day += 1
            }
            number = (number+1) % 7
        })
        choice.appendChild(button)
    }
}

function collectData() {
    let classes = []
    for (let i=0;i<12;i++) {
        let today = []
        for (let j=0;j<7;j++) {
            let p = document.getElementById(String(i) + String(j))
            today.push(p.innerText)
        }
        if ([0, 6].includes(i)) {
          classes.push([])
        }
        classes.push(today)
    }
    console.log(classes)
    navigator.clipboard.writeText(JSON.stringify(classes))
    document.getElementById('getData').value = '時間割がコピーされました'
}

document.documentElement.addEventListener('touchstart', function (e) {
  if (e.touches.length >= 2) {e.preventDefault();}
  }, {passive: false});
  var t = 0;
  document.documentElement.addEventListener('touchend', function (e) {
  var now = new Date().getTime();
  if ((now - t) < 350){
    e.preventDefault();
  }
  t = now;
  }, false);

setUp()
