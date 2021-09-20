var lofi_titles = document.getElementsByClassName("lofi_title")


for (var i = 0; i <= lofi_titles.length; i++) {
    var lofi_title = lofi_titles[i]

    lofi_title.addEventListener("click", (e) => {
        let lofi_title_clicked = e.target
        let searchText = lofi_title_clicked.innerHTML
        lofi_fetch(searchText)
    })
}

async function lofi_fetch(searchText) {
    console.log(searchText)
    const result = await fetch(`../Json/${searchText}.json`)
    const datas = await result.json()

    if (datas) {
        console.log(datas)
        update_data(datas)
    } else {
        alert(`${searchtext} is not Available`)
    }
}

function update_data(datas) {
    console.log(datas)
    let lofi_cont = datas
    localStorage.setItem("Lofi", JSON.stringify(lofi_cont))

}