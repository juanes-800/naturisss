import { useCartContext } from "../context/CartContext";
import {useForm} from 'react-hook-form';
import { Button } from "react-bootstrap";
import  '../style/carry.css';

const Carry = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {saveData} = useCartContext()

    const onSubmits = (data) =>{
        saveData(data)
    }

    return(
        <section>
            <div>
                <h1>Registrarce</h1>
                <form onSubmit={handleSubmit(onSubmits)}>
                    <div>
                        <div>
                            <input
                            className="field"
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            {...register("nombre",{requiered:true})}>
                            </input>
                            {errors.nombre?.type === "required"&& <span>Nombre requerido</span> }
                        </div>
                        <div>
                            <input
                            className="field"
                            type="text"
                            name="telefono"
                            placeholder="Numero telefonico"
                            {...register("telefono", {required:true})}
                            ></input>
                            {errors.telefono?.type === "required" && <span>Telefono requerido</span>}
                        </div>
                        <div>
                            <input
                            className="field"
                            type="text"
                            name="email"
                            placeholder="Email @"
                            {...register("email",{
                                required:true,
                                pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                            })}
                            ></input>
                            {errors.Email?.type === "required" && <span>Email requerido</span>}
                            {errors.Email?.type === "pattern" && <span> El email debe incluir '@' '.com'</span>}
                        </div>
                        <div>
                            <input
                            className="field"
                            type="password"
                            name="password"
                            placeholder="contrase??a de 6 digitos"
                            {...register("contrase??a",{
                                required:true,
                                minLength:6
                            })}
                            ></input>
                            {errors.Contrase??a?.type === "required" && <span>Contrase??a requerido</span>}
                            {errors.Contrase??a?.type === "minLength" && <span>Minimo 6 caracteres</span>}
                        </div>
                    </div>
                    <Button className="text" variant="secondary"type="submit">Iniciar</Button>
                </form>
            </div>
        </section>
    )

}
export default Carry