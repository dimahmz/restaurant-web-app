const OrderCharge = ({ subtotal, GGST_SGST, delivery_charge, total }) => {
    return (
        <div className="order_cart bg-white flex-col space-y-3 py-2 px-3">
            <div>
                <p>Subtotal </p>
                <p>{subtotal} DH</p>
            </div>
            <div>
                {/* these should be dynamic */}
                <p>Cgst+sgst(5%+5%)</p>
                <p>{GGST_SGST} DH</p>
            </div>
            <div>
                <p>Delivery charge </p>
                <p>{delivery_charge} DH</p>
            </div>
            <div>
                <p>Total</p>
                <p>{total}</p>
            </div>
        </div>
    );
};

export default OrderCharge;
