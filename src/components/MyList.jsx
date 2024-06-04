/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
export const songs = [
    {
        id: 1,
        penyanyi: "LISA",
        lagu: "Gurenge",
        band: "LEO-NiNE",
        gambar: "https://i1.sndcdn.com/artworks-000627561985-809w2s-t500x500.jpg"
    },
    {
        id: 2,
        penyanyi: "ZP Theart",
        lagu: "Fury of the Storm",
        band: "DragonForce",
        gambar: "https://i1.sndcdn.com/artworks-000069747329-jk1eos-t500x500.jpg"
    },
    {
        id: 3,
        penyanyi: "BanYa",
        lagu: " Beethoven Virus",
        band: "InterLock",
        gambar: "https://i1.sndcdn.com/artworks-000089385748-sjwrbk-t500x500.jpg"
    },
    {
        id: 4,
        penyanyi: "Virgoun",
        lagu: "Sekuat Hatimu",
        band: "Last Child",
        gambar: "https://images.genius.com/f7d177bc14b6b09f0e59ebaa193e5fe2.1000x1000x1.jpg"
    },
    {
        id: 5,
        penyanyi: "Andika Mahesa",
        lagu: "Penantian Yang Tertunda",
        band: "Kangen Band",
        gambar: "https://yt3.googleusercontent.com/1Qog9InwBfbLO4c2Y0Us_l3UhqMkNJW4hw3Es_3-VaKh8_y3OvWX_rehWf9ygAOkoE1vj-E1HQ=s900-c-k-c0x00ffffff-no-rj"
    },
]
const MyList = ({song}) => {
    function handleClick(song) {
        alert(`Penyanyi : ${song.penyanyi}\nBand : ${song.band}\nLagu : ${song.lagu}`);
    }
    return ( 
        <figure className="bg-slate-500 items-center font-bold rounded-xl text-center gap-5 p-5 flex flex-col">
            <img src={song.gambar} alt="" width={200}/>
            <figcaption className="text-lg">{song.lagu}</figcaption>
            <button onClick={() => handleClick(song)} className="bg-blue-300 p-2 rounded-full">Lihat Selengkapnya</button>
        </figure>
    );
}
export default MyList;