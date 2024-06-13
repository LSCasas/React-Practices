export default function Menu() {
    // list rendering
    const menuItems = [
        { icon: "", text: "Home" },
        { icon: "", text: "Shorts" },
        { icon: "", text: "Subscriptions" },
        { icon: "", text: "Favs" },
    ];

    return (
        <aside id="menu">
            {menuItems.map((item) => (
                <div key={`menu-item-${item.text}`} className="menu-item">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </div>
            ))}
        </aside>
    );
}


