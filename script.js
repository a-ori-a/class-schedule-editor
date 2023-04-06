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
            txt.contentEditable = true
            txt.id = String(j) + String(i)
            txt.innerText = ''
            td.appendChild(txt)
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

    let subjs = ['現文', '古典', '数①', '数②', '数Ⅲ', '情報', 'コ英', '英表', '化学', '生物', '物理', '世A', '世B','日B', '現社', '地理', '体育', 'LHR', '探究', '英語', '国語', '数学', '　　']
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

function asset(num) {
    tables = [[[],["物理","現文","化学","地理","体育","コ英","数①"],["世A","数②","数①","地理","情報","化学","古典"],["コ英","体育","現文","物理","英表","数①","LHR"],["英表","世A","化学","コ英","古典","数①","数②"],["物理","情報","体育","探究","コ英","数②","数①"],["数学","数学","化学","化学","　　","　　","　　"],[],["物理","情報","世A","古典","体育","化学","コ英"],["世A","数②","英表","化学","情報","数①","地理"],["数②","体育","地理","現文","物理","コ英","LHR"],["地理","英表","コ英","古典","数②","数①","化学"],["物理","現文","体育","探究","コ英","数①","地理"],["物理","物理","国語","国語","　　","　　","　　"]],
    [[],["物理","現文","化学","地理","体育","コ英","数Ⅲ"],["世A","数②","数Ⅲ","地理","情報","化学","古典"],["コ英","体育","現文","物理","英表","数Ⅲ","LHR"],["英表","世A","化学","コ英","古典","数Ⅲ","数②"],["物理","情報","体育","探究","コ英","数②","数Ⅲ"],["数学","数学","化学","化学","　　","　　","　　"],[],["物理","情報","世A","古典","体育","化学","コ英"],["世A","数②","英表","化学","情報","数Ⅲ","地理"],["数②","体育","地理","現文","物理","コ英","LHR"],["地理","英表","コ英","古典","数②","数Ⅲ","化学"],["物理","現文","体育","探究","コ英","数Ⅲ","地理"],["物理","物理","国語","国語","　　","　　","　　"]],
    [[],["生物","現文","化学","地理","体育","コ英","数①"],["世A","数②","数①","地理","情報","化学","古典"],["コ英","体育","現文","生物","英表","数①","LHR"],["英表","世A","化学","コ英","古典","数①","数②"],["生物","情報","体育","探究","コ英","数②","数①"],["数学","数学","化学","化学","　　","　　","　　"],[],["生物","情報","世A","古典","体育","化学","コ英"],["世A","数②","英表","化学","情報","数①","地理"],["数②","体育","地理","現文","生物","コ英","LHR"],["地理","英表","コ英","古典","数②","数①","化学"],["生物","現文","体育","探究","コ英","数①","地理"],["生物","生物","国語","国語","　　","　　","　　"]],
    [[],["生物","現文","化学","地理","体育","コ英","数Ⅲ"],["世A","数②","数Ⅲ","地理","情報","化学","古典"],["コ英","体育","現文","生物","英表","数Ⅲ","LHR"],["英表","世A","化学","コ英","古典","数Ⅲ","数②"],["生物","情報","体育","探究","コ英","数②","数Ⅲ"],["数学","数学","化学","化学","　　","　　","　　"],[],["生物","情報","世A","古典","体育","化学","コ英"],["世A","数②","英表","化学","情報","数Ⅲ","地理"],["数②","体育","地理","現文","生物","コ英","LHR"],["地理","英表","コ英","古典","数②","数Ⅲ","化学"],["生物","現文","体育","探究","コ英","数Ⅲ","地理"],["生物","生物","国語","国語","　　","　　","　　"]]]
    navigator.clipboard.writeText(JSON.stringify(tables[num]))
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