function Mahasiswa({nama,nim, jurusan}){
    return(
        <div>
            <p>nama : {nama}</p>
            <p>nim  : {nim}</p>
            <p>jurusan : {jurusan}</p>
        </div>
    );
}

function Daftarmahasiswa(){
    const mahasiswa = [
        {
            nama : "sohif",
            nim  : "219298383",
            jurusan : "Teknik informatika"
        },
        {
            nama : "satu",
            nim  : "2190298383",
            jurusan : "Teknik informatika"
        },
        {
            nama : "sohif",
            nim  : "2009298383",
            jurusan : "Teknik informatika"
        }
    ];
    return(
        <div>
            {mahasiswa.map((mhs) =>
            <Mahasiswa 
            nama ={mhs.nama}
            nim ={mhs.nim}
            jurusan={mhs.jurusan}
            />
            )}
        </div>
    );
}