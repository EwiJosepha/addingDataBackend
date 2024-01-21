document.addEventListener("DOMContentLoaded", function () {
  fetch("http//localhost:5000/getall")
  .then((res)=>res.json())
  .then(data =>console.log(data))
  loadhtml([])
})

function loadhtml(data) {
  const table = document.querySelector("table tbody")
  if (data.length === 0) {
    table.innerHTML = ` <tr><td class="no-data" colspan="5">No Data</td></tr>`
  }
}