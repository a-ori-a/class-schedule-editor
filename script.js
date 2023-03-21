const table = document.getElementById('list')
const choice = document.getElementById('choice')

function setUp() {
    for (let i=0;i<7;i++) {

        let tr = document.createElement('tr')
        
        for (let j=0;j<12;j++) {
            let td = document.createElement('td')
            let txt = document.createElement('p')
            txt.id = String(j) + String(i)
            txt.innerText = txt.id
            td.appendChild(txt)
            tr.appendChild(td)
        }

        table.appendChild(tr)
    }

    let subjs = ['現文', '古典', '数B', '数Ⅲ', 'コ英', '英表', '化学', '生物', '物理', '地理']
    for (let i of subjs) {
        let button = document.createElement('input')
        button.type = 'button'
        button.value = i
        button.onclick = 'set'
        choice.appendChild(button)
    }
}

function collectData() {
    let classes = []
    for (let i=0;i<7;i++) {
        let today = []
        for (let j=0;j<12;j++) {
            let p = document.getElementById(String(j) + String(i))
            today.push(p.innerText)
        }
        classes.push(today)
    }
    // alert(classes)
    console.log(classes)
    return classes
}

setUp()
collectData()