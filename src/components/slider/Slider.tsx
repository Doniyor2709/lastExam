"use client";
import Slider from "react-slick";
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
import "./style.scss";
import useLatestProducts from "@/store/latestProducts";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading/Loading";

const Carousel = () => {
  const { data: latestProducts, getData: getLatestProducts } =
    useLatestProducts();

  useEffect(() => {
    getLatestProducts();
  }, [getLatestProducts]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {latestProducts?.map((product) => (
          <div className="product__border" key={product?._id}>
            <div className="products__card">
              <div className="product__img" data-aos="zoom-out-up">
                <Image 
                  src={
                    product?.image.url ||
                    "https://res.cloudinary.com/ddegkqlmz/image/upload/v1643729853/test/uc7weucjpvk7toma5px3.jpg"
                  }
                  alt={product?.title || "Product"}
                  fill
                  objectFit="cover"
                />
              </div>
              <Link
                href={`/allproducts/${product?._id}`}
                className="product__content"
              >
                <h3>{product?.title || "Title"}</h3>

                <p>Price: {product?.price || "Unknown"} UZS</p>
              </Link>
              <div className="button__wrapper">
                <button className="product__btn">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

<script>
  AOS.init();
</script>

export default Carousel;
