// Region NULL olan nə qədər customer var?
// -----------------------------
// axios.get("https://northwind.vercel.app/api/customers").then((res) => {
// 	let db = res.data;
//   let db2 = db.filter(item=>item.address.region == 'NULL')
//   console.log(db2.length);
// });

// “London” şəhərindəki müştəriləri console a yaz
// -----------------------------
// axios.get("https://northwind.vercel.app/api/customers").then((res) => {
// 	let db = res.data;
//   let db2 = db.filter(item=>item.address.city == 'London')
//   console.log(db2);
// });

// Ən bahalı məhsul
// -----------------------------
// axios.get("https://northwind.vercel.app/api/products/")
//   .then((res) => {
//   res.data.filter((res) => {
//     let max = 0;
// 		if (res.unitPrice > max) {
// 			max = res.unitPrice;
// 		}
// 	});
//   console.log(res);
// });

// Ortalama stok miqdarıv
// -----------------------------


// “C” ilə başlayan məhsullar
// -----------------------------
// axios.get("https://northwind.vercel.app/api/products/").then((res) => {
//   let db = res.data;
//   console.log(db.filter((item) => item.name.startsWith("C")));
// });

// Id-si 1 olan userin nə qədər postu var?
// ------------------------------------------
// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(res=>{
//   let db = res.data;
//   console.log(db.filter(item=>item.id == 1).length);
// })

// 1 nömrəli albümdə nə qədər fotoqraf var?
// ----------------------------------------
// axios.get("https://jsonplaceholder.typicode.com/albums").then((res) => {
// 	let db = res.data;
// 	console.log(db.filter((item) => item.userId == 1).length);
// });
