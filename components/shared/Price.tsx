const Price = ({ price }: { price: string }) => {
  if (price === "CHEAP")
    return (
      <p>
        $$<span className="text-gray-400">$$</span>{" "}
      </p>
    );
  if (price === "REGULAR")
    return (
      <p>
        $$$<span className="text-gray-400">$</span>{" "}
      </p>
    );
  else return <p>$$$$</p>;
};

export default Price;
