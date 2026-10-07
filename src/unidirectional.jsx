// function Parent({nama,jurusan}){
//     return(
//         <div>
//             <p>Nama : {nama}</p>
//             <p>Jurusan : {jurusan}</p>
//         </div>
//     );
// }

function Produk({namaproduk, harga, stok, kategori}){
    let status ;
    if(stok > 0){
        status = "tersedia";
    }else{
        status = "habis";
    }
    return(
        <div>
            <p>Produk : {namaproduk}</p>
            <p>harga : {harga}</p>
            <p>stok : {stok}</p>
            <p>kategori : {kategori}</p>
            <p>status : {status}</p>
        </div>
    );
}

// export default Parent;
export default Produk;