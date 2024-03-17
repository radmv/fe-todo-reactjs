const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {children}
    </div>
  );
};

const Top = (props) => {
  const { badge, imgUrl } = props;
  return (
    <a
      className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      href="#"
    >
      <img className="object-cover" src={imgUrl} alt="product image" />
      {badge && (
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {badge}
        </span>
      )}
    </a>
  );
};

const Bottom = (props) => {
  const { children, title, price, specialPrice, bodyText } = props;
  return (
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
      </a>
      <div className="mt-2 flex flex-col justify-end">
        {specialPrice ? (
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${specialPrice}
            </span>
            <span className="text-sm text-slate-900 line-through">
              ${price}
            </span>
          </p>
        ) : (
          <p>
            <span className="text-3xl font-bold text-slate-900">${price}</span>
          </p>
        )}
        <div className="mt-3">
          {bodyText && <p className="text-xs pb-5 text-justify">{bodyText}</p>}
          {children}
        </div>
      </div>
    </div>
  );
};

CardProduct.Top = Top;
CardProduct.Bottom = Bottom;

export default CardProduct;
