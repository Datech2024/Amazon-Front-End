import React from "react";
import { CategoryInfo } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./Category.module.css";

function Category() {
	return (
		<section className={classes.category_container}>
			{CategoryInfo.map((info, i) => {
				return <CategoryCard key={i} data={info} />;
			})}
		</section>
	);
}

export default Category;
