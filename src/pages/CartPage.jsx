import React from "react";
import { CartContext } from "../components/contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const {cart} = React.useContext(CartContext);

//Calculate total price
const totalPrice = cart.reduce((total, item) => total + item.data.price, 0)

// Calculate discount
const discount = totalPrice * 0.1;

const navigate = useNavigate();

  return (
    <div className="CartPage">
      <div id="icons">
        <h1>
            Shopping Cart
        </h1>
        <form>
            <section>
                <h2>
                    Items in your shopping cart
                </h2>
                <ul role="list">
                    {cart.map((item, index) =>
                    <div key={index} className="">
                        <li>
                            <div>
                                
                            </div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <h3>
                                      <a 
                                        href="#"
                                      >
                                        {item.data.title}
                                      </a>

                                    </h3>
                                  </div>
                                  <div>
                                    <p>
                                      ${item.data.price}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </li>
                        <div>
                          <div>
                            <button>
                              <span>Remove</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                </ul>
                <section>
                  <h2 id="summary-heading">
                    Price Details
                  </h2>
                  <div>
                    <dl>
                      <div>
                        <dt>
                          Price ({cart.length} item)
                        </dt>
                        <dd>
                          ${totalPrice}
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <span>Discount</span>
                        </dt>
                        <dd>
                          - ${discount}
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <span>Delivery Charges</span>
                        </dt>
                        <dd>
                            Free
                        </dd>
                      </div>
                      <div>
                        <dt>
                          <span>Total Amount</span>
                        </dt>
                        <dd>
                            ${totalPrice - discount}
                        </dd>
                      </div>
                    </dl>
                    <div>
                      <div>
                        <button onClick={()=>{ navigate("/BookingConfirmation"); }
                        }>
                          Buy Now</button>
                      </div>
                    </div>
                  </div>
                </section>
            </section>
        </form>
      </div>
    </div>
  );
}
