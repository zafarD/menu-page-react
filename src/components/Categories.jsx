
const Categories = ({categories, filterCategory}) => {
    return  <section className="btn-container">
        {categories.map((category) => {
            return <button type="button" className="btn" key={category} onClick={() => filterCategory(category)}>
                {category}
            </button>
        })}
    </section>
}

export default Categories;