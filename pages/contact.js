// TODO: Utilser email.js pour envoyer les data du formulaire par mail
// (Doit être fait avec Pierre parce qu'il faut connecter le compte gmail à l'API email.js)

// Icons imports
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <h1 className="mb-6 text-3xl font-bold mt-20 text-center">
        Brand&Com peut vous aider dans vos projets de marketing digital.
      </h1>
      <h2 className="text-2xl font-bold text-center mb-10">
        Contactez nous 📩
      </h2>
      <p className="text-center mb-20">
        Contactez Brand&Com via le formulaire ci-dessous. Vous pouvez aussi
        appeler directement ou envoyer un e-mail.
      </p>
      <div className="flex flex-row gap-40 justify-center items-center mb-20">
        <div>
          <h4 className="font-bold text-xl mb-4">
            Email &nbsp;
            <FaPhone className="inline" />
          </h4>
          <p>brandandcom.amiens@gmail.com</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-4">
            Téléphone &nbsp;
            <FaEnvelope className="inline" />
          </h4>
          <p>06 06 06 06 06</p>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url("./iconsBg.svg")`,
        }}
        // className="py-20"
      >
        <div
          style={{ backdropFilter: "blur(3px)", height: "100%" }}
          className="py-14"
        >
          <form className="flex flex-col justify-center items-center">
            <div
              className="flex flex-row gap-8 items-center justify-center"
              style={{ width: "50%" }}
            >
              <div className="flex flex-col grow">
                <label className="text-black">
                  Votre nom<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jean"
                  className="form-input px-4 py-3 rounded h-4 mb-4 "
                />
              </div>
              <div className="flex flex-col grow">
                <label className="text-black">
                  Votre prénom<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Dupont"
                  className="form-input px-4 py-3 rounded h-4 mb-4 "
                />
              </div>
            </div>
            <div className="flex flex-row gap-8" style={{ width: "50%" }}>
              <div className="flex flex-col grow">
                <label className="text-black">
                  Email<span className="text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jeandupont@gmail.com"
                  className="form-input px-4 py-3 rounded h-4 mb-4"
                />
              </div>
              <div className="flex flex-col grow">
                <label className="text-black">
                  Téléphone<span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="0606060606"
                  className="form-input px-4 py-3 rounded h-4 mb-4"
                />
              </div>
            </div>
            <label className="text-black">
              Message<span className="text-red-700">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Merci de préciser votre demande dans ce champ. Plus vous donnez de détails, plus Brand&Com peut vous répondre rapidement"
              className="form-input px-4 py-3 rounded mb-8 w-1/2"
            />
            <button type="submit" className="btn mb-8">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
