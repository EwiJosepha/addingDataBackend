document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5500/getall")
  .then((res)=>res.json())
  .then(data =>loadhtml("data"[data])
  )
})

function loadhtml(data) {
  const table = document.

  console.log(data);
  querySelector("table tbody")
  if (data.length === 0) {
    table.innerHTML = ` <tr><td class="no-data" colspan="5">No Data</td></tr>`
  }
}