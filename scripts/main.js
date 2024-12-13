const forms = document.querySelectorAll("form");

// function cteateTransaction(datas) {
//   datas.sort((a, b) => b.id - a.id);
//   document.querySelector("#transactionCont").innerHTML = "";
//   datas.forEach((data) => {
//     let item = `
//         <tr>
//           <td>
//             <input data-id="${data.id}" type="checkbox" name="dwonload" />
//           </td>
//           <td>
//             <span>${data.id}</span>
//           </td>
//           <td>
//             <span>${data.fullNameHami}</span>
//           </td>
//           <td>
//             <span>${data.fullNameAtam}</span>
//           </td>
//           <td>
//             <p class="flex flex-col">
//               <span>${data.amount}</span>
//               <span>تومان</span>
//             </p>
//           </td>
//           <td>
//             <p class="flex flex-col">
//               <span>${data.date}</span>
//               <span>${data.time}</span>
//             </p>
//           </td>
//           <td class="${data.success ? "success" : "reject"}">
//             <span>${data.success ? "موفقیت آمیز" : "ناموفق"}</span>
//           </td>
//           <td style="max-width: 180px; min-width: 180px" class="py-4">
//             <ul>
//               <li>
//                 <a href="#">
//                   <svg
//                     width="20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <svg
//                     width="20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
//                     />
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <svg
//                     width="20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m4.5 12.75 6 6 9-13.5"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <svg
//                     width="20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M6 18 18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <svg
//                     width="20"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//                     />
//                   </svg>
//                 </a>
//               </li>
//             </ul>
//           </td>
//         </tr>`;
//     document.querySelector("#transactionCont").innerHTML += item;
//   });
// }
// async function setTransaction() {
//   try {
//     let res = await (await fetch("/scripts/datas.json")).json();
//     cteateTransaction(res);
//   } catch (e) {}
// }

// setTransaction();
function searchInTransaction(search) {
  let trs = document.querySelectorAll("#transactionCont tr");
  trs.forEach((item) => {
    console.log(item.querySelector(".idTransaction"));
    if (
      !String(item.querySelector(".idTransaction").textContent).includes(
        search
      ) &&
      !String(item.querySelector(".hamiName").textContent).includes(search) &&
      !String(item.querySelector(".atamName").textContent).includes(search)
    )
      item.classList.add("hidden");
    else item.classList.remove("hidden");
  });
}
function filter() {
  let trs = document.querySelectorAll("#transactionCont tr");
  let dateFrom = document.querySelector("#dateFrom").value;
  let dateTo = document.querySelector("#dateTo").value;
  if (!dateFrom || !dateTo) {
    console.log(2134);
    trs.forEach((item) => {
      item.classList.remove("hidden");
    });
    return;
  }
  trs.forEach((item) => {
   
    if (
      new Date(item.querySelector(".dateTransaction").textContent).getTime() >=
        new Date(dateFrom).getTime() &&
      new Date(item.querySelector(".dateTransaction").textContent).getTime() <=
        new Date(dateTo).getTime()
    )
      item.classList.remove("hidden");
    else item.classList.add("hidden");
  });
}
document
  .querySelector("#selectAllTransaction")
  .addEventListener("click", function () {
    document.querySelectorAll("input[name='dwonload']").forEach((item) => {
      item.checked = this.textContent === "لغو همه" ? false : true;
    });
    this.textContent =
      this.textContent === "لغو همه" ? "انتخاب همه" : "لغو همه";
  });

document.querySelector("#searchForm").addEventListener("click", () => {});

document.querySelector("#searchValue").addEventListener("keyup", function () {
  searchInTransaction(this.value);
});
document.querySelector("#filterTransaction").addEventListener("click", filter);
// document.querySelector("#downloadTransaction").addEventListener("click", () => {
//   document.querySelector("#downloadTransaction");
// });
// forms.forEach((item) => (item.onsubmit = (e) => e.preventDefault()));
