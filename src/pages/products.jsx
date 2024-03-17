import { Button, CardProduct } from "../components";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Top imgUrl="/images/shoes-1.png" badge="NEW" />
        <CardProduct.Bottom
          title="Nike Shoes"
          price={699}
          specialPrice={499}
          bodyText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ullam
            nulla numquam iure voluptatibus. Hic, assumenda. Soluta
            necessitatibus similique fugiat?"
        >
          <Button variant="bg-blue-600 w-full">Add to cart</Button>
        </CardProduct.Bottom>
      </CardProduct>
      <CardProduct>
        <CardProduct.Top imgUrl="/images/shoes-1.png" badge="NEW" />
        <CardProduct.Bottom
          title="Nike Shoes"
          price={699}
          specialPrice={499}
          bodyText="
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolores!"
        >
          <Button variant="bg-blue-600 w-full">Add to cart</Button>
        </CardProduct.Bottom>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
