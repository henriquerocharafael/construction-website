import styles from "./styles.module.css";

export function ContactInfo() {
  return (
    <section id="contact" className={styles.contact}>
      <h1 className="heading">contact us</h1>
      <div className={styles.row}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1836.654998740833!2d-47.142221961501065!3d-22.975625425367408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b620292da16f%3A0xba9f3e5a16c28933!2sR.%20Guarani%20Futebol%20Clube%20-%20Dic%20I%20(Conjunto%20Hab.%20Monsenhor%20Luiz%20Fernando%20Abreu)%2C%20Campinas%20-%20SP%2C%2013056-400!5e0!3m2!1spt-BR!2sbr!4v1693312708009!5m2!1spt-BR!2sbr"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form action="">
          <h3>get in touch</h3>
          <input type="text" placeholder="name" className={styles.box} />
          <input type="email" placeholder="email" className={styles.box} />
          <input type="number" placeholder="phone" className={styles.box} />
          <textarea
            name=""
            placeholder="message"
            id=""
            cols={30}
            rows={10}
            className={styles.box}
          ></textarea>
          <input type="submit" value="send message" className={styles.btn} />
        </form>
      </div>
    </section>
  );
}
