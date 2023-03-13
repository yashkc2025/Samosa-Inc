import '../styles/deliveryNotes.scss'

export default function DeliveryNote() {
    return (
        <div className="delivery-note">
            <div className="delivery-note-text">
                <h1>Ready to Deliver</h1>
                <div className='order'>
                    <div className='order-options'>
                        <h1>Large Pack</h1>
                        <h3>🌟 Pack of 10</h3>
                        <h3>🌟 High Priority</h3>
                        <div className='order-options-button'><a href=''>Order Now!</a></div>
                        <h3></h3>
                    </div>
                    <div className='order-options'>
                        <h1>Medium Pack</h1>
                        <h3>🌟 Pack of 5</h3>
                        <h3>🌟 Priority</h3>
                        <div className='order-options-button'><a href=''>Order Now!</a></div>
                    </div>
                </div>
            </div>
            <div className="delivery-process">
                <div className='instruction'>
                    <h1>1</h1>
                    <h3>Click the desired Order</h3>
                </div>
                <div className='instruction'>
                    <h1>2</h1>
                    <h3>Order Confirmation</h3>
                </div>
                <div className='instruction'>
                    <h1>3</h1>
                    <h3>Wait for Order</h3>
                </div>
                {/* <div className='instruction'>
                    <h1>4</h1>
                    <h3>Pay and Enjoy</h3> */}
                {/* </div> */}
            </div>
        </div>
    )
}