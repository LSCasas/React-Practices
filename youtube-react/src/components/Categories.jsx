export default function Categories() {
   const categories = [
    "All",
    "Music",
    "Gamming",
    "Code",
    "Programming",
    "Life Style",
    "Soports",
   ]

   return(
<div id="categories-list">
{ categories.map((category) => {
return(
    <span key={'category-${category}'} className="category">
        {category}
    </span>
)

})}



     </div>

    )
}