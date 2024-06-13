import YouTube from "./YoutubeLogo"

export default function NavBar(){
    return     (
    <nav id="navbar">
<div id="logo">
<YouTube height="1.8rem" width="3rem" />
<span>YouTube</span>
</div>
<div id="search-container">
    <input type="text" placeholder="Search"/>
</div>


<div id="user-icon"> 
    <img src="https://api.dicebear.com/8.x/identicon/svg?seed=C" 
    alt="Casas"></img>
</div>
    </nav>
    )
}

