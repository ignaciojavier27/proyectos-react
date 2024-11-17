import { useForm } from "../../hooks/useForm"
import Titulo from "../Titulo"
import "./contactForm.css"

const initialForm = {

};

const validateForm = () => {

}

const ContactForm = () => {

    const { 
        form, 
        errors, 
        loading, 
        response, 
        handleChange, 
        handleBlur, 
        handleSubmit 
    } = useForm(initialForm, validateForm);

    return (
        <article className="article-project">
            <Titulo titulo="Contact Form" />
            <form onSubmit={handleSubmit} className="container">
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Escribe tu nombre" 
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    value = {form.name}
                    required
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Escribe tu email" 
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    value = {form.email}
                    required
                />
                <input 
                    type="text" 
                    name="subject" 
                    placeholder="Escribe el asunto" 
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    value = {form.subject}
                    required
                />

                <textarea 
                    name="comments" 
                    cols="50" 
                    rows="5" 
                    placeholder="Escribe tus comentarios"
                    onBlur = {handleBlur}
                    onChange = {handleChange}
                    value = {form.comments}
                    required
                >
                </textarea>

                <input type="submit" value="Enviar" />
            </form>
        </article>
    )
}

export default ContactForm
