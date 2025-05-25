function QuantitySelector({ quantity, setQuantity }) {
  const handleAddQuantity = () => {
    setQuantity((prev) => {
      return Math.min(prev + 1, 10);
    });
  };

  const handleReduceQuantity = () => {
    setQuantity((prev) => {
      return Math.max(prev - 1, 1);
    });
  };

  return (
    <div className="flex m-auto border-2 rounded-2xl p-2">
      <div onClick={handleReduceQuantity}>-</div>

      <input className="text-center" type="text" value={quantity} disabled />

      <div onClick={handleAddQuantity}>+</div>
    </div>
  );
}

export default QuantitySelector;
