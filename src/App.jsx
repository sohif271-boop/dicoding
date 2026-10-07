import Daftarmahasiswa from './imperatif-deklaratif';
import Produk from './unidirectional'; 

function App(){
    const nama = "riqza yasmine soraya"; //unidirectional
    const jurusan = "Pendidikan Guru Sekolah Dasar" //unidirectional
    const namaproduk = "laptop";
    const harga = 7000000;
    const stok = 0;
    const kategori = "elektronik"
  return(
  <div>    
      <Mahasiswa
        nama = "sohif fudin anwarul huda"
        nim = "23344321"
        jurusan = "Teknik Informatika"
    />

      <Kelas
        namakelas = "TIA125"
        ruangan = "lantai 3"
      />

        <Daftarmahasiswa/>
        {/* <Parent nama={nama} jurusan={jurusan}/> //unidirectional */}

        <Produk namaproduk={namaproduk} harga={harga} stok={stok} kategori={kategori}/>
  </div>
  );
}

// function Uni(){
//     const namaproduk = "laptop";
//     const harga = 7000000;
//     const stok = 10;
//     const kategori = "elektronik"
//     return(
//         <div>

//         </div>
//     );
// }

function Kelas({namakelas,ruangan}){
  return(
    <div>
      <h3>namakelas :  {namakelas}</h3>
      <h2>ruangan   :  {ruangan}</h2>
    </div>
  );
}

function Mahasiswa({nama,nim, jurusan}){
    return(
        <div>
            <p>nama : {nama}</p>
            <p>nim  : {nim}</p>
            <p>jurusan : {jurusan}</p>
        </div>
    );
}

export default App;