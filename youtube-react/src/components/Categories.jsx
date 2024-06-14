export default function Categories() {
    const categories = [
        "All",
        "Music",
        "Gamming",
        "Code",
        "Programming",
        "Life Style",
        "Soports",
    ];

    return (
        <div className="flex flex-row gap-4" id="categories-list">
            {categories.map((category) => {
                return (
                    <span
                        key={`category-${category}`}
                        className="px-4 py-2 rounded-full bg-gray-800"
                    >
                        {category}
                    </span>
                );
            })}
        </div>
    );
}
