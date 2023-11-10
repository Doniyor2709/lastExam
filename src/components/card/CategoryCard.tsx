"use client";
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
import useCategories from "@/store/categories";
import Image from "next/image";
import React, { useEffect } from "react";

import "./style.scss";
import Link from "next/link";
import Loading from "../loading/Loading";
import Script from "next/script";

const CategoryRow = () => {
  const { data: categories, getData: getCategories, loading } = useCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
  <div className="category__row" >
      {categories?.map((category) => (
        <div key={category?._id} className="category__card" data-aos="zoom-out-up">
          <div className="category__img">
            <Image src={category?.image.url} alt={category?.name} fill />
          </div>
          <div className="category__content">
            <h3>{category?.name}</h3>
            <Link href={`/allcategories/${category?._id}`}>See products</Link>
          </div>
        </div>
      ))}
    </div>
  );
};


<script>
  AOS.init();
</script>

export default CategoryRow;
