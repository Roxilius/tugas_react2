const nama = "Fajri"
const Header = () => {
    return (
        <header className="font-bold text-2xl flex bg-slate-500 items-center justify-around h-10">
            <h1>Daftar Lagu</h1>
            <h1>{nama ? `Haii ${nama}` : "Tanpa Nama"}</h1>
        </header>
    );
}
 
export default Header;