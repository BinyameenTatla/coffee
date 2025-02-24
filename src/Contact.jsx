import "./Contact.css";
import { MdContacts } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
    return (
        <>
            <h1 className="k">Contact Us</h1>

            <div className="Bod">
                <div className="Bods">
                    <h1 className="n">Send a Message</h1>
                    <form>
                        <label htmlFor="Name" className="mail">Name</label>
                        <input type="text" name="Name" required autoComplete="off" placeholder="Your Name" />

                        <label htmlFor="E-Mail" className="mail">E-Mail</label>
                        <input type="email" name="E-Mail" required autoComplete="off" placeholder="Your E-Mail" />

                        <label htmlFor="Message" className="l">Message</label>
                        <textarea
                            name="Message"
                            required
                            autoComplete="off"
                            placeholder="Your Message"
                            rows="6"
                        />

                        <button className="sub">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};
