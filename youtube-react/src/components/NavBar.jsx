import YouTube from "./YoutubeLogo"

export default function NavBar(){
    return     (
    <nav className="col-start-1 col-end-3 grid grid-cols-3">
<div className="flex flex-row items-center gap-1 pl-4">
<YouTube height="1.8rem" width="3rem" />
<span>YouTube</span>
</div>
<div className="flex justify-center items-center" id="search-container">
    <input
        type="text"
        placeholder="Search"
        className="w-full px-4 py-2 border border-gray-800 rounded-lg bg-transparent"
    />
</div>



<div className="flex justify-end" id="user-icon">
    <img
        src="https://api.dicebear.com/8.x/identicon/svg?seed=C"
        alt="Casas"
        className="w-8 h-8 rounded-full"
    />
</div>

    </nav>
    )
}

