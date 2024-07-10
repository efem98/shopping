
import React from "react";
import "../style/shoping.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShopingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn2 close-btn"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{products.map((product) => (
						<div
							className="cart-product"
							key={product.id}>
							<img
								src={
									product.image
								}
								alt={product.name}
							/>
							<div className="product-info">
								<h3>
									{product.name}
								</h3>
								<span className="product-price">
									{product.price *
										product.count}
									$
								</span>
							</div>
							<select
								className="count"
								value={
									product.count
								}
								onChange={(
									event
								) => {
									onQuantityChange(
										product.id,
										event
											.target
											.value
									);
								}}>
								{[
									...Array(
										10
									).keys(),
								].map(
									(number) => {
										const num =
											number +
											1;
										return (
											<option
												value={
													num
												}
												key={
													num
												}>
												{
													num
												}
											</option>
										);
									}
								)}
							</select>
							<button
								className="btn2 remove-btn"
								onClick={() =>
									onProductRemove(
										product
									)
								}>
								<RiDeleteBin6Line
									size={20}
								/>
							</button>
						</div>
					))}
					{products.length > 0 && (
						<button className="btn2 checkout-btn">
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShopingCart;
