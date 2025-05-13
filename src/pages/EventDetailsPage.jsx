import React from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../components/contexts/CartContext";
import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function EventDetailsPage() {
    const location = useLocation();
    const eventDetails = location.state.eventDetails;
    const {addToCart} = React.useContext(CartContext)
    const navigate = useNavigate();
    
    return (
        <section className="py-5 lg: py-16 font-poppins dark:bg-gray-800">
            <div className="max-w-6xl px-4 mx-auto">
                <div className="flex flex-wrap mb-24 -mx-4">
                    <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                    </div>
                    <div>
                        <div className="lg:pl-20">
                            <div className="mb-6">
                                <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {eventDetails.data.title}
                                </h2>
                                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400">
                                    <span>${eventDetails.data.price}</span>
                                </p>
                            </div>
                            <div className="mb-6">
                                <h2>
                                    Description:
                                </h2>
                                <p>{eventDetails.data.description}</p>
                            </div>
                            <div className="mb-6" />
                                <div className="flex flex-wrap items-center mb-5">
                                <button onClick={() => addToCart(eventDetails)}
                                    className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600 hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  );
}
