import axios from "axios";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function notify() {
  toast.success("Sua mensagem foi enviada!", {
    position: toast.POSITION.TOP_RIGHT,
  });
}

export function ContactInfo() {
  const formik = useFormik({
    initialValues: initialValues,

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Nome deve ter 20 caracteres ou menos.")
        .required("Nome deve ser preenchido."),
      email: Yup.string()
        .email("Email inválido.")
        .required("Email deve ser preenchido."),
      phone: Yup.string()
        .phone("BR", "Por favor insira um telefone válido.")
        .required("Telefone deve ser preenchido."),
      message: Yup.string().required("Mensagem deve ser preenchida."),
    }),

    onSubmit: (data, resetForm) => {
      axios
        .post("http://localhost:4000/api", { data })
        .then((response) => console.log(response.statusText))
        .catch((err) => console.log(err));

      resetForm.setValues(initialValues);

      // resets touched form after submiting
      formik.touched.name = false;
      formik.touched.email = false;
      formik.touched.phone = false;
      formik.touched.message = false;

      // success message after form submitting
      notify();
    },
  });

  return (
    <section id="contact" className={styles.contact}>
      <h1 className="heading" style={{ textTransform: "none" }}>
        Contate-nos
      </h1>
      <div className={styles.row}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.654998740833!2d-47.142221961501065!3d-22.975625425367408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b620292da16f%3A0xba9f3e5a16c28933!2sR.%20Guarani%20Futebol%20Clube%20-%20Dic%20I%20(Conjunto%20Hab.%20Monsenhor%20Luiz%20Fernando%20Abreu)%2C%20Campinas%20-%20SP%2C%2013056-400!5e0!3m2!1spt-BR!2sbr!4v1693312708009!5m2!1spt-BR!2sbr"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form onSubmit={formik.handleSubmit}>
          <h3>peça seu orçamento</h3>
          <label className={styles.label} htmlFor="name">
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : ""}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.box} ${
              formik.touched.name && formik.errors.name ? styles.error : ""
            }`}
          />
          <label className={styles.label} htmlFor="email">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.box} ${
              formik.touched.email && formik.errors.email ? styles.error : ""
            }`}
          />
          <label className={styles.label} htmlFor="phone">
            {formik.touched.phone && formik.errors.phone
              ? formik.errors.phone
              : ""}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="telefone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${styles.box} ${
              formik.touched.phone && formik.errors.phone ? styles.error : ""
            }`}
          />
          <label className={styles.label} htmlFor="message">
            {formik.touched.message && formik.errors.message
              ? formik.errors.message
              : ""}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="mensagem"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            cols={30}
            rows={10}
            className={`${styles.box} ${
              formik.touched.message && formik.errors.message
                ? styles.error
                : ""
            }`}
          ></textarea>
          <input type="submit" value="enviar" className={styles.btn} />
        </form>
      </div>

      <ToastContainer />
    </section>
  );
}
