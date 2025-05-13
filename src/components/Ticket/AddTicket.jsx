import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import Card from "../shared/Card";
import TicketContext from "../contexts/TicketContext";

import * as Yup from "yup";

export default function AddTicket() {
  const { addTicket, ticketEdit, updateTicket } = useContext(TicketContext);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    validationSchema: Yup.object({
      title: Yup.string()
        .max(10, "Title must be 10 characters or less")
        .required("Title is required"),
      description: Yup.string()
        .max(20, "Description must bt 20 characters or less")
        .required("Description is required"),
    }),

    onSubmit: (values) => {
      if (ticketEdit.edit === true) {
        updateTicket(ticketEdit.ticket.id, values);
        formik.resetForm();
        ticketEdit.edit = false;
      } else {
        addTicket(values);
        formik.resetForm();
      }
    },
  });

  const isButtonEdit = ticketEdit.edit === true ? false : true;

  useEffect(() => {
    if (ticketEdit.edit === true) {
      formik.setValues({
        title: ticketEdit.ticket.data.title,
        description: ticketEdit.ticket.data.description,
        date: ticketEdit.ticket.data.date,
        location: ticketEdit.ticket.data.location,
        price: ticketEdit.ticket.data.price,
      });
    }
  }, [ticketEdit.edit]);

  return (
    <Card>
      <form onSubmit={formik.handleSubmit}>
        <h2>Add a Ticket to your list</h2>
        <div className="inputBox">
          <div className="input_row">
            <label
              htmlFor="title"
              className={`label ${
                formik.errors.title && formik.touched.title ? "error" : ""
              }`}
            >
              {formik.errors.title ? formik.errors.title : "Title"}
            </label>
            <input
              type="text"
              className="input"
              name="title"
              placeholder="Ticket Title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="description"
              className={`label ${
                formik.errors.description && formik.touched.description
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.description
                ? formik.errors.description
                : "Description"}
            </label>
            <input
              type="text"
              className="input"
              name="description"
              placeholder="Ticket Description"
              onChange={formik.handleChange}
              value={formik.values.description}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="date"
              className={`label ${
                formik.errors.date && formik.touched.date
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.date
                ? formik.errors.date
                : "Date"}
            </label>
            <input
              type="text"
              className="input"
              placeholder="Ticket Date"
              onChange={formik.handleChange}
              value={formik.values.date}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="location"
              className={`label ${
                formik.errors.location && formik.touched.location
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.location
                ? formik.errors.location
                : "Location"}
            </label>
            <input
              type="text"
              className="input"
              name="location"
              placeholder="Ticket Location"
              onChange={formik.handleChange}
              value={formik.values.location}
            />
          </div>
          <div className="input_row">
            <label
              htmlFor="price"
              className={`label ${
                formik.errors.price && formik.touched.price
                  ? "error"
                  : ""
              }`}
            >
              {formik.errors.price
                ? formik.errors.price
                : "Price"}
            </label>
            <input
              type="text"
              className="input"
              name="price"
              placeholder="Ticket price"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
          </div>
        </div>
        <div>
          {isButtonEdit ? (
            <button type="submit" className="btn">
              Add Ticket
            </button>
          ) : (
            <button type="submit" className="btn">
              Edit Ticket
            </button>
          )}
        </div>
      </form>
    </Card>
  );
}
