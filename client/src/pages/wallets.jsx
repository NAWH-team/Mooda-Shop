import React, { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Mywallet = () => {
  const [open, setOpen] = useState(true);

  const { userId } = useParams();
  const navigate = useNavigate();
  const [itms, setItems] = useState([]);
  const [updated, setUpdated] = useState(false);

  const Total = itms.reduce((total, item) => {
    return total + item.price * item.intQty;
  }, 0);

  const decrQty = (id) => {
    axios
      .put(`http://localhost:8080/wallet/dec/1/${id}`)
      .then((response) => {
        setUpdated(!updated);
        setItems(response.data.products || []);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const incrQty = (id) => {
    axios
      .put(`http://localhost:8080/wallet/inc/1/${id}`)
      .then((response) => {
        setUpdated(!updated);
        setItems(response.data.products || []);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const updateQty = () => {
    axios
      .put(`http://localhost:8080/wallet/UpQnty/1/${id}`)
      .then((response) => {
        setUpdated(!updated);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const delItem = (id) => {
    axios
      .delete(`http://localhost:8080/wallet/1/${id}`)
      .then((response) => {
        setUpdated(!updated);
        setItems(response.data.products || []);
        initialQty(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const delAllItem = (id) => {
    axios
      .delete(`http://localhost:8080/wallet/1`)
      .then((response) => {
        setUpdated(!updated);
        setItems(response.data.products || []);
        updateQty(id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const initialQty = (id) => {
    axios
      .put(`http://localhost:8080/wallet/upIntQty/1/${id}`)
      .then((response) => {
        setUpdated(!updated);
        setItems(response.data.products || []);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/wallet/1`)
      .then((response) => {
        console.log(response.data.products);
        setItems(response.data.products || itms);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [updated]);

  const hide = () => {
    setOpen(false);
    const x = setTimeout(() => {
      navigate("/");
      clearTimeout(x);
    }, 900);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={hide}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-700 sm:duration-1000"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-700 sm:duration-1000"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => {
                              hide();
                            }}
                          >
                            <span className="absolute -inset-0.5" />
                            <span
                              className="sr-only"
                              onClick={() => {
                                navigate("/");
                              }}
                            >
                              Close panel
                            </span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {itms.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.img}
                                    alt={`Product: ${product.name}`}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a>{product.name}</a>
                                      </h3>
                                      <p className="ml-4">${product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {product.color}
                                    </p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="flex items-center space-x-3">
                                      <button
                                        onClick={() => decrQty(product.id)}
                                        className="text-gray-500"
                                      >
                                        -
                                      </button>
                                      <p className="text-gray-500">
                                        {product.intQty}
                                      </p>
                                      <button
                                        onClick={() => incrQty(product.id)}
                                        className="text-gray-500"
                                      >
                                        +
                                      </button>
                                    </div>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                        onClick={() => delItem(product.id)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p> ${Total} </p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          onClick={(e) => {
                            delAllItem();
                          }}
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => {
                              hide();
                            }}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Mywallet;
