export default function Menu() {
    // list rendering
    const menuItems = [
        { icon: "", text: "Home" },
        { icon: "", text: "Shorts" },
        { icon: "", text: "Subscriptions" },
        { icon: "", text: "Favs" },
    ];

    return (
        <aside className="cols-start-1 cols-end-2 rows-start-2 rows-end-3">
            {menuItems.map((item) => (
                <div key={`menu-item-${item.text}`} className="p-4 rounded-2xl flex flex-row gap-2 items-center hover:bg-gray-800">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                </div>
            ))}
        </aside>
    );
}



